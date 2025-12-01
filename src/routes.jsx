import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import Refund from "./pages/Refund";
import Download from "./pages/DownloadApp";
import ShippingPolicy from "./pages/ShippingPolicy";
import AdminLogin from "./admin/AdminLogin";
import AdminDashboard from "./admin/AdminDashboard";
import TenantsList from "./admin/TenantsList";

export default function RoutesList() {
  return (
    <Routes>
      {/* Public Pages */}
      <Route path="/" element={<Home />} />
      <Route path="/features" element={<Features />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/terms-and-conditions" element={<Terms />} />
      <Route path="/refund-and-cancellation" element={<Refund />} />
      <Route path="/download" element={<Download />} />
      <Route path="/shipping-policy" element={<ShippingPolicy />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />

      {/* Admin */}
      <Route path="/admin" element={<AdminLogin />} />
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
      <Route path="/admin/tenants" element={<TenantsList />} />
    </Routes>
  );
}
