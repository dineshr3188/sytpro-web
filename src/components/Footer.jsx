import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} SytPro. All rights reserved.</p>

      <nav>
        <Link to="/privacy-policy">Privacy Policy</Link>
        <Link to="/terms-and-conditions">Terms & Conditions</Link>
        <Link to="/refund-and-cancellation">Refund Policy</Link>
      </nav>
    </footer>
  );
}
