import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link to="/" className="text-2xl font-semibold text-blue-600">
          SytPro
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex gap-8 text-gray-700 text-lg">
          <Link to="/features">Features</Link>
          <Link to="/pricing">Pricing</Link>
          <Link to="/about">About</Link>
          <Link to="/download">Download</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        {/* CTA */}
        <a
          href="/admin"
          className="px-5 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          Admin Login
        </a>
      </div>
    </header>
  );
}
