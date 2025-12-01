import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postJson } from "../services/api";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const res = await postJson("/auth/signin", {
        usernameOrEmail: email,
        password: password,
      });

      if (res.accessToken) {
        localStorage.setItem("ADMIN_TOKEN", res.accessToken);

        // ⭐⭐ THIS IS WHERE IT GOES ⭐⭐
        navigate("/admin/dashboard", { replace: true });
      } else {
        alert("Invalid login");
      }
    } catch (err) {
      alert("Login failed. Incorrect email/password.");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-6">
      <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-900">
          Admin Login
        </h1>

        <form onSubmit={handleLogin} className="space-y-6">
          <input
            type="email"
            placeholder="Admin Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border rounded-lg"
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border rounded-lg"
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
