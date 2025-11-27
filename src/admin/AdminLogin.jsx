import React, { useState } from "react";
import { postJson } from "../services/api";

export default function AdminLogin() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  async function login(e) {
    e.preventDefault();
    const res = await postJson("/auth/admin/login", form);

    if (res.ok) {
      window.location.href = "/admin/dashboard";
    } else {
      setError(res.message || "Login failed");
    }
  }

  return (
    <div className="admin-login">
      <h1>Admin Login</h1>

      <form onSubmit={login}>
        <input placeholder="Email" onChange={(e) => setForm({ ...form, email: e.target.value })} />
        <input type="password" placeholder="Password" onChange={(e) => setForm({ ...form, password: e.target.value })} />

        <button className="btn-primary">Login</button>
      </form>

      {error && <p className="error">{error}</p>}
    </div>
  );
}
