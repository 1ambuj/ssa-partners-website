"use client";

import React, { createContext, useContext, useEffect, useState, useCallback, useRef } from "react";
import {
  signInWithEmailAndPassword,
  signOut,
  User,
  onAuthStateChanged,
  AuthError,
} from "firebase/auth";
import { collection, doc, getDoc, getDocs, query, where, setDoc } from "firebase/firestore";
import { auth, db } from "./firebase";

export interface UserData {
  email?: string;
  role?: "admin" | "client" | "partner";
  name?: string;
  phone?: string;
  company?: string;
}

const SESSION_ROLE_KEY = "ssa_session_role";
const SESSION_EMAIL_KEY = "ssa_session_email";
const SESSION_NAME_KEY = "ssa_session_name";

interface AuthContextType {
  currentUser: User | null;
  userData: UserData | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  loginWithRole: (
    email: string,
    password: string,
    role: "admin" | "partner" | "client"
  ) => Promise<{ role: string; name?: string }>;
  setPartnerSession: (email: string, name?: string) => void;
  setClientSession: (email: string, name?: string) => void;
  logout: () => Promise<void>;
  isAdmin: boolean;
  isPartner: boolean;
  isClient: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const ADMIN_EMAIL = (
  process.env.NEXT_PUBLIC_ADMIN_EMAIL || "admin@sandeepassociates.com"
).toLowerCase().trim();

const normalizeRole = (r: string) =>
  (r || "").toLowerCase().trim().replace(/s$/, "");

function friendlyAuthError(err: unknown): string {
  if (err && typeof err === "object" && "code" in err) {
    const code = (err as AuthError).code;
    switch (code) {
      case "auth/invalid-credential":
      case "auth/wrong-password":
        return "Incorrect email or password. Please try again.";
      case "auth/user-not-found":
        return "No account found with this email.";
      case "auth/too-many-requests":
        return "Too many failed attempts. Please wait a moment and try again.";
      case "auth/user-disabled":
        return "This account has been disabled. Contact the admin.";
      case "auth/network-request-failed":
        return "Network error. Check your internet connection.";
      case "auth/invalid-email":
        return "Please enter a valid email address.";
      case "permission-denied":
        return "Cannot access user records. Please contact the admin.";
      default:
        return "Login failed. Please check your credentials.";
    }
  }
  if (err instanceof Error) return err.message;
  return "An unexpected error occurred. Please try again.";
}

async function resolveRoleFromFirestore(
  email: string
): Promise<{ role: string; name?: string; phone?: string; company?: string } | null> {
  const userDocRef = doc(db, "users", email);
  const userDoc = await getDoc(userDocRef);
  if (userDoc.exists()) {
    const data = userDoc.data() as Record<string, unknown>;
    return {
      role: normalizeRole(String(data.role || "")),
      name: data.name ? String(data.name) : undefined,
      phone: data.phone ? String(data.phone) : undefined,
      company: data.company ? String(data.company) : undefined,
    };
  }

  const q = query(collection(db, "user"), where("email", "==", email));
  const snaps = await getDocs(q);
  if (!snaps.empty) {
    const data = snaps.docs[0].data();
    return {
      role: normalizeRole(String(data.role || "")),
      name: data.name ? String(data.name) : undefined,
      phone: data.phone ? String(data.phone) : undefined,
      company: data.company ? String(data.company) : undefined,
    };
  }

  return null;
}

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isPartner, setIsPartner] = useState(false);
  const [isClient, setIsClient] = useState(false);

  const pendingRoleRef = useRef<string | null>(null);

  const applyRole = useCallback(
    (
      email: string,
      role: string,
      extra?: { name?: string; phone?: string; company?: string }
    ) => {
      const r = normalizeRole(role);
      setIsAdmin(r === "admin");
      setIsPartner(r === "partner");
      setIsClient(r === "client");
      setUserData({
        email,
        role: r === "admin" ? "admin" : r === "partner" ? "partner" : r === "client" ? "client" : undefined,
        name: extra?.name,
        phone: extra?.phone,
        company: extra?.company,
      });
    },
    []
  );

  const fetchUserData = useCallback(
    async (user: User) => {
      try {
        const userEmail = (user.email || "").toLowerCase().trim();

        if (pendingRoleRef.current) {
          const role = pendingRoleRef.current;
          pendingRoleRef.current = null;
          applyRole(userEmail, role);

          if (role === "admin") {
            try {
              await setDoc(
                doc(db, "users", userEmail),
                { email: userEmail, role: "admin", updatedAt: new Date().toISOString() },
                { merge: true }
              );
            } catch {
              // non-critical
            }
          }
          return;
        }

        if (userEmail === ADMIN_EMAIL) {
          applyRole(userEmail, "admin", { name: "Admin" });
          return;
        }

        const firestoreData = await resolveRoleFromFirestore(userEmail);
        if (firestoreData && firestoreData.role) {
          applyRole(userEmail, firestoreData.role, firestoreData);
        } else {
          setUserData({ email: userEmail });
          setIsAdmin(false);
          setIsPartner(false);
          setIsClient(false);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
        setUserData({ email: user.email || "" });
      }
    },
    [applyRole]
  );

  useEffect(() => {
    if (typeof window === "undefined") return;
    const sessionRole = sessionStorage.getItem(SESSION_ROLE_KEY);
    const sessionEmail = sessionStorage.getItem(SESSION_EMAIL_KEY);
    const sessionName = sessionStorage.getItem(SESSION_NAME_KEY);

    if (sessionRole === "partner" && sessionEmail) {
      applyRole(sessionEmail, "partner", { name: sessionName || undefined });
    } else if (sessionRole === "client" && sessionEmail) {
      applyRole(sessionEmail, "client", { name: sessionName || undefined });
    }
  }, [applyRole]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user);
      if (user) {
        await fetchUserData(user);
        if (typeof window !== "undefined") {
          sessionStorage.removeItem(SESSION_ROLE_KEY);
          sessionStorage.removeItem(SESSION_EMAIL_KEY);
          sessionStorage.removeItem(SESSION_NAME_KEY);
        }
      } else {
        const sessionRole =
          typeof window !== "undefined"
            ? sessionStorage.getItem(SESSION_ROLE_KEY)
            : null;
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
  }, [fetchUserData]);

  const login = async (email: string, password: string) => {
    await signInWithEmailAndPassword(auth, email, password);
  };

  const loginWithRole = async (
    email: string,
    password: string,
    role: "admin" | "partner" | "client"
  ): Promise<{ role: string; name?: string }> => {
    const cleanEmail = email.toLowerCase().trim();

    if (role === "admin") {
      try {
        pendingRoleRef.current = "admin";
        const cred = await signInWithEmailAndPassword(auth, cleanEmail, password);

        setCurrentUser(cred.user);
        setIsAdmin(true);
        setIsPartner(false);
        setIsClient(false);
        setUserData({ email: cleanEmail, role: "admin" });
      } catch (err) {
        pendingRoleRef.current = null;
        throw new Error(friendlyAuthError(err));
      }
      return { role: "admin" };
    }

    try {
      const q = query(
        collection(db, "user"),
        where("email", "==", cleanEmail)
      );
      const snaps = await getDocs(q);

      if (snaps.empty) {
        throw new Error(
          `No ${role} account found with this email. Please check or contact the admin.`
        );
      }

      const expectedNorm = normalizeRole(role);
      let matchedDoc: { name?: string; role?: string } | null = null;

      for (const docSnap of snaps.docs) {
        const data = docSnap.data();
        const dbPassword = String(data.password || "");
        const dbRole = normalizeRole(String(data.role || ""));

        if (dbPassword !== password) continue;
        if (dbRole !== expectedNorm) continue;

        matchedDoc = {
          name: data.name ? String(data.name) : undefined,
          role: data.role ? String(data.role) : undefined,
        };
        break;
      }

      if (!matchedDoc) {
        const hasRoleMatch = snaps.docs.some((d) => {
          const dbRole = normalizeRole(String(d.data().role || ""));
          return dbRole === expectedNorm;
        });

        if (hasRoleMatch) {
          throw new Error("Incorrect password. Please try again.");
        }

        const hasPasswordMatch = snaps.docs.some((d) => {
          return String(d.data().password || "") === password;
        });
        if (hasPasswordMatch) {
          throw new Error(
            `Your account is not registered as a ${role}. Please select the correct role tab.`
          );
        }

        throw new Error(
          `Invalid credentials for ${role} login. Please check your email, password, and role.`
        );
      }

      const resolvedRole = normalizeRole(matchedDoc.role || role);
      const finalRole = resolvedRole.includes("partner") ? "partner" : "client";
      return { role: finalRole, name: matchedDoc.name };
    } catch (err) {
      if (
        err instanceof Error &&
        !err.message.startsWith("No ") &&
        !err.message.startsWith("Incorrect") &&
        !err.message.startsWith("Your ") &&
        !err.message.startsWith("Invalid ")
      ) {
        console.error("Firestore login error:", err);
        throw new Error("Unable to verify credentials. Please try again later.");
      }
      throw err;
    }
  };

  const setPartnerSession = (email: string, name?: string) => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem(SESSION_ROLE_KEY, "partner");
      sessionStorage.setItem(SESSION_EMAIL_KEY, email);
      if (name) sessionStorage.setItem(SESSION_NAME_KEY, name);
    }
    applyRole(email, "partner", { name });
  };

  const setClientSession = (email: string, name?: string) => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem(SESSION_ROLE_KEY, "client");
      sessionStorage.setItem(SESSION_EMAIL_KEY, email);
      if (name) sessionStorage.setItem(SESSION_NAME_KEY, name);
    }
    applyRole(email, "client", { name });
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch {
      // ok for partner/client sessions
    }
    if (typeof window !== "undefined") {
      sessionStorage.removeItem(SESSION_ROLE_KEY);
      sessionStorage.removeItem(SESSION_EMAIL_KEY);
      sessionStorage.removeItem(SESSION_NAME_KEY);
    }
    setCurrentUser(null);
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
