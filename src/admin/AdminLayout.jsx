import React from "react";
import { Link } from "react-router-dom";

export default function AdminLayout({ children }) {
  return (
    <div className="flex min-h-screen">

      {/* SIDEBAR */}
      <aside className="w-64 bg-gray-900 text-white p-6 space-y-6">
        <h2 className="text-2xl font-bold">SytPro Admin</h2>

        <nav className="space-y-3 text-gray-300">
          <Link to="/admin/dashboard" className="block hover:text-white">Dashboard</Link>
          <Link to="/admin/tenants" className="block hover:text-white">Tenants</Link>
        </nav>

        <button
          onClick={() => {
            localStorage.removeItem("ADMIN_TOKEN");
            window.location.href = "/admin";
          }}
          className="mt-8 text-red-400 hover:text-red-300"
        >
          Logout
        </button>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-10 bg-gray-50">
        {children}
      </main>

    </div>
  );
}
