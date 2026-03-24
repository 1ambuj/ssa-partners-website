"use client";

import React, { useState } from "react";
import { useAuth } from "@/lib/AuthContext";
import { useRouter } from "next/router";

type LoginRole = "admin" | "partner" | "client";

const Login: React.FC<{ initialRole?: LoginRole }> = ({ initialRole = "admin" }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<LoginRole>(initialRole);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { loginWithRole, setPartnerSession, setClientSession } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      if (!email || !password) {
        setError("Please fill in all fields");
        setLoading(false);
        return;
      }

      const result = await loginWithRole(email, password, role);

      if (result.role === "admin") {
        router.push("/admin/blog-dashboard");
      } else if (result.role === "partner") {
        setPartnerSession(email);
        router.push("/partner-dashboard");
      } else if (result.role === "client") {
        setClientSession(email);
        router.push("/feedback");
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Login failed";
      setError(msg);
      if (typeof (err as { code?: string })?.code === "string" && (err as { code: string }).code === "permission-denied") {
        setError("Cannot access user records. Please contact the admin.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page-wrap">
      <div className="login-banner-compact">
        <div className="container">
          <h4>Sign In</h4>
          <h3>{role.charAt(0).toUpperCase() + role.slice(1)} Login</h3>
        </div>
      </div>

      <div className="login-content-area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5 col-md-7">
              <div className="login-form-inner">
              <div className="login-role-tabs mb-4">
                {(["admin", "partner", "client"] as const).map((r) => (
                  <button
                    key={r}
                    type="button"
                    className={`login-role-tab ${role === r ? "active" : ""}`}
                    onClick={() => {
                      setRole(r);
                      setError("");
                    }}
                  >
                    {r.charAt(0).toUpperCase() + r.slice(1)}
                  </button>
                ))}
              </div>

              {error && (
                <div className="alert alert-danger mb-4 py-3" role="alert">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="single-input-inner style-bg mb-4">
                  <input
                    type="email"
                    id="login-email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email Address *"
                    required
                  />
                </div>

                <div className="single-input-inner style-bg mb-4 login-password-wrap">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="login-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password *"
                    required
                  />
                  <button
                    type="button"
                    className="login-password-toggle"
                    onClick={() => setShowPassword((v) => !v)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    <i className={`fas fa-${showPassword ? "eye-slash" : "eye"}`} />
                  </button>
                </div>

                <button
                  type="submit"
                  className="btn btn-base border-radius w-100"
                  disabled={loading}
                >
                  {loading ? "Signing in..." : "Sign in"}
                </button>
              </form>

                <p className="login-hint mt-4 mb-0">
                  Admin: use Firebase Auth email. Partner/Client: use registered credentials.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
