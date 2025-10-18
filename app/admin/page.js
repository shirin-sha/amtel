"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function AdminLoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);
    setError("");
    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password })
      });
      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        setError(data?.message || "Login failed. Check credentials.");
        setIsSubmitting(false);
        return;
      }
      // Redirect to admin home (this same page can serve as entry)
      router.replace("/admin");
      router.refresh();
    } catch (e) {
      setError("Network error. Please try again.");
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <div className="sign-form-area bg-13">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-8 m-auto">
              <div className="sign-form-wrap">
               
                <div className="sign-form">
                  <div className="form-heading">
                    <h3>Admin Login</h3>
                    <p>Enter your admin credentials to continue</p>
                  </div>
                  {error ? (
                    <div className="alert alert-danger" role="alert">{error}</div>
                  ) : null}
                  <form onSubmit={handleSubmit}>
                    <label htmlFor="admin-username">USERNAME</label>
                    <input
                      id="admin-username"
                      type="text"
                      placeholder="Enter Username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      autoComplete="username"
                      required
                    />
                    <label htmlFor="admin-password">PASSWORD</label>
                    <input
                      id="admin-password"
                      type="password"
                      placeholder="Enter Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      autoComplete="current-password"
                      required
                    />
                    <div className="space40" />
                    <button type="submit" className="theme-btn-11 full-btn" disabled={isSubmitting}>
                      {isSubmitting ? "Signing in..." : "Sign In"}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}



