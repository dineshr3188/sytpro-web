import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} SytPro. All rights reserved.</p>

      <nav>
        <Link to="/privacy-policy">Privacy Policy</Link>
        <Link to="/terms-and-conditions">Terms & Conditions</Link>
        <Link to="/refund-and-cancellation">Cancellation & Refund Policy</Link>
        <Link to="/shipping-policy">Shipping Policy</Link>
        <Link to="/contact">Contact Us</Link>
      </nav>
    </footer>
  );
}
