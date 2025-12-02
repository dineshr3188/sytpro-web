import React, { useEffect, useState } from "react";
import AdminLayout from "./AdminLayout";
import { getJson, postJson } from "../services/api";

export default function TenantsList() {
  const [tenants, setTenants] = useState([]);

  useEffect(() => {
    loadTenants();
  }, []);

  async function loadTenants() {
    const res = await getJson("/admin/tenants");
    setTenants(res || []);        // ✅ FIX 1
  }

  async function toggleStatus(id, currentStatus) {
    await postJson("/admin/tenants/status", {
      tenantId: id,
      status: currentStatus === "ACTIVE" ? "SUSPENDED" : "ACTIVE",
    });

    loadTenants();
  }

  return (
    <AdminLayout>
      <h1 className="text-3xl font-bold mb-6">Tenants</h1>

      <div className="bg-white p-6 rounded-xl shadow">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b">
              <th className="p-3 text-left">Tenant</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Action</th>
            </tr>
          </thead>

          <tbody>
            {tenants.map(t => (
              <tr key={t.id} className="border-b">
                <td className="p-3">{t.name}</td>
                <td className="p-3">{t.contactEmail}</td>
                <td className="p-3">{t.active ? "ACTIVE" : "INACTIVE"}</td>

                <td className="p-3">
                  <button
                    onClick={() =>
                      toggleStatus(t.id, t.active ? "ACTIVE" : "INACTIVE")
                    }
                    className={`px-4 py-2 rounded text-white ${
                      t.active ? "bg-red-500" : "bg-green-600"
                    }`}
                  >
                    {t.active ? "Suspend" : "Activate"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
}
