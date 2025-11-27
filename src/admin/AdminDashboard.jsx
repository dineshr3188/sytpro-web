import React from "react";
import { Link } from "react-router-dom";

export default function AdminDashboard() {
  return (
    <div className="page">
      <h1>Admin Dashboard</h1>

      <Link className="btn-primary" to="/admin/tenants">View Tenants</Link>
    </div>
  );
}
