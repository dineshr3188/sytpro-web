import React from "react";
import AdminLayout from "./AdminLayout";

export default function AdminDashboard() {
  return (
    <AdminLayout>
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="bg-white shadow p-6 rounded-xl">
          <h2 className="text-gray-600">Total Tenants</h2>
          <p className="text-3xl font-bold">14</p>
        </div>

        <div className="bg-white shadow p-6 rounded-xl">
          <h2 className="text-gray-600">Active Subscriptions</h2>
          <p className="text-3xl font-bold">12</p>
        </div>

        <div className="bg-white shadow p-6 rounded-xl">
          <h2 className="text-gray-600">Monthly Revenue</h2>
          <p className="text-3xl font-bold">₹1,80,000</p>
        </div>

      </div>
    </AdminLayout>
  );
}
