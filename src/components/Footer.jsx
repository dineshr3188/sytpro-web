import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full py-6 bg-gray-100 mt-12">
      <div className="max-w-6xl mx-auto px-6 text-center text-gray-700">

        {/* COPYRIGHT */}
        <p className="text-sm mb-4">
          © {new Date().getFullYear()} <span className="font-semibold">SytPro</span>. All rights reserved.
        </p>

        {/* LINKS */}
        <div className="flex flex-wrap justify-center gap-6 text-sm">

          <Link
            to="/privacy-policy"
            className="hover:text-blue-600 transition"
          >
            Privacy Policy
          </Link>

          <Link
            to="/terms-and-conditions"
            className="hover:text-blue-600 transition"
          >
            Terms & Conditions
          </Link>

          <Link
            to="/refund-and-cancellation"
            className="hover:text-blue-600 transition"
          >
            Cancellation & Refund Policy
          </Link>

          <Link
            to="/shipping-policy"
            className="hover:text-blue-600 transition"
          >
            Shipping Policy
          </Link>

          <Link
            to="/contact"
            className="hover:text-blue-600 transition"
          >
            Contact Us
          </Link>

        </div>
      </div>
    </footer>
  );
}
