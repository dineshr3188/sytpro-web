import React, { useEffect, useState } from "react";
import { getJson, postJson } from "../services/api";

export default function TenantsList() {
  const [tenants, setTenants] = useState([]);

  useEffect(() => {
    load();
  }, []);

  async function load() {
    const data = await getJson("/admin/tenants");
    setTenants(data.tenants || []);
  }

  async function toggle(t, action) {
    await postJson(`/admin/tenants/${t.id}/${action}`);
    load();
  }

  return (
    <div className="page">
      <h1>Tenants</h1>

      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
            <th>Suspend/Activate</th>
          </tr>
        </thead>

        <tbody>
          {tenants.map((t) => (
            <tr key={t.id}>
              <td>{t.name}</td>
              <td>{t.subscriptionStatus}</td>
              <td>
                <button onClick={() => toggle(t, "suspend")}>Suspend</button>
                <button onClick={() => toggle(t, "activate")}>Activate</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
