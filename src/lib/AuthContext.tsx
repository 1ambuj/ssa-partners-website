"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import {
  signInWithEmailAndPassword,
  signOut,
  User,
  onAuthStateChanged,
} from "firebase/auth";
import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";
import { auth, db } from "./firebase";

interface UserData {
  email?: string;
  role?: "admin" | "client" | "partner";
  name?: string;
  phone?: string;
  company?: string;
}

const SESSION_ROLE_KEY = "ssa_session_role";
const SESSION_EMAIL_KEY = "ssa_session_email";

interface AuthContextType {
  currentUser: User | null;
  userData: UserData | null;
  loading: boolean;
  login: (email: string, password: string, role?: "admin" | "partner" | "client") => Promise<void>;
  loginWithRole: (email: string, password: string, role: "admin" | "partner" | "client") => Promise<{ role: string }>;
  setPartnerSession: (email: string) => void;
  setClientSession: (email: string) => void;
  logout: () => Promise<void>;
  isAdmin: boolean;
  isPartner: boolean;
  isClient: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const normalizeRole = (r: string) => (r || "").toLowerCase().trim().replace(/s$/, "");

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isPartner, setIsPartner] = useState(false);
  const [isClient, setIsClient] = useState(false);

  // Fetch user data from Firestore
  const fetchUserData = async (user: User) => {
    try {
      const userEmail = user.email || "";
      const adminEmail = process.env.NEXT_PUBLIC_ADMIN_EMAIL || "admin@sandeepassociates.com";
      if (userEmail === adminEmail) {
        setIsAdmin(true);
        setUserData({ email: userEmail, role: "admin" });
        return;
      }

      // Try to fetch user data from users collection
      const userDocRef = doc(db, "users", userEmail);
      const userDoc = await getDoc(userDocRef);

      if (userDoc.exists()) {
        setUserData({ email: userEmail, ...userDoc.data() });
        setIsAdmin(false);
      } else {
        setUserData({ email: userEmail });
        setIsAdmin(false);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      setUserData({ email: user.email || "" });
    }
  };

  useEffect(() => {
    const sessionRole = typeof window !== "undefined" ? sessionStorage.getItem(SESSION_ROLE_KEY) : null;
    const sessionEmail = typeof window !== "undefined" ? sessionStorage.getItem(SESSION_EMAIL_KEY) : null;
    if (sessionRole === "partner" && sessionEmail) {
      setIsPartner(true);
      setUserData({ email: sessionEmail, role: "partner" });
    } else if (sessionRole === "client" && sessionEmail) {
      setIsClient(true);
      setUserData({ email: sessionEmail, role: "client" });
    }
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user);
      if (user) {
        await fetchUserData(user);
        if (typeof window !== "undefined") {
          sessionStorage.removeItem(SESSION_ROLE_KEY);
          sessionStorage.removeItem(SESSION_EMAIL_KEY);
        }
        setIsPartner(false);
        setIsClient(false);
      } else {
        const sessionRole = typeof window !== "undefined" ? sessionStorage.getItem(SESSION_ROLE_KEY) : null;
        if (!sessionRole) {
          setUserData(null);
          setIsAdmin(false);
          setIsPartner(false);
          setIsClient(false);
        }
      }
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const login = async (email: string, password: string) => {
    await signInWithEmailAndPassword(auth, email, password);
  };

  const loginWithRole = async (
    email: string,
    password: string,
    role: "admin" | "partner" | "client"
  ): Promise<{ role: string }> => {
    if (role === "admin") {
      await signInWithEmailAndPassword(auth, email, password);
      return { role: "admin" };
    }

    const q = query(
      collection(db, "user"),
      where("email", "==", email.toLowerCase().trim())
    );
    const snaps = await getDocs(q);
    if (snaps.empty) {
      throw new Error("No user found with that email");
    }

    const inputEmail = email.toLowerCase().trim();
    const expectedRole = role;
    let matched: { id: string; data: { role?: string } } | null = null;

    for (const docSnap of snaps.docs) {
      const data = docSnap.data();
      const dbEmail = (data.email || "").toLowerCase().trim();
      const dbPassword = data.password || "";
      const dbRole = normalizeRole(String(data.role || ""));
      const roleNorm = normalizeRole(expectedRole);

      if (dbEmail === inputEmail && dbPassword === password && dbRole === roleNorm) {
        matched = { id: docSnap.id, data: data as { role?: string } };
        break;
      }
    }

    if (!matched) {
      throw new Error("Invalid credentials for this role");
    }

    const matchedRole = (matched.data.role || "").toLowerCase();
    if (matchedRole.includes("partner")) {
      return { role: "partner" };
    }
    return { role: "client" };
  };

  const setPartnerSession = (email: string) => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem(SESSION_ROLE_KEY, "partner");
      sessionStorage.setItem(SESSION_EMAIL_KEY, email);
    }
    setIsPartner(true);
    setUserData({ email, role: "partner" });
  };

  const setClientSession = (email: string) => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem(SESSION_ROLE_KEY, "client");
      sessionStorage.setItem(SESSION_EMAIL_KEY, email);
    }
    setIsClient(true);
    setUserData({ email, role: "client" });
  };

  const logout = async () => {
    await signOut(auth);
    if (typeof window !== "undefined") {
      sessionStorage.removeItem(SESSION_ROLE_KEY);
      sessionStorage.removeItem(SESSION_EMAIL_KEY);
    }
    setUserData(null);
    setIsAdmin(false);
    setIsPartner(false);
    setIsClient(false);
  };

  const value: AuthContextType = {
    currentUser,
    userData,
    loading,
    login,
    loginWithRole,
    setPartnerSession,
    setClientSession,
    logout,
    isAdmin,
    isPartner,
    isClient,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
