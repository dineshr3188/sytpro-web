import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Features() {
  return (
    <>
      <Header />

      {/* FEATURES SECTION */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold text-gray-900">
            Streamline your task tracking on one platform
          </h2>

          <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
            Manage projects, materials, tasks, tenants, billing and onsite progress — all in one easy-to-use system.
          </p>

          {/* Feature Cards */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">

            {/* Card 1 */}
            <div className="bg-white shadow-lg rounded-2xl p-8 border hover:shadow-xl transition">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="text-xl font-semibold text-gray-900">Project & Task Tracking</h3>
              <p className="text-gray-600 mt-2">
                Organize projects, assign tasks, track dependencies and manage work updates in real time.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white shadow-lg rounded-2xl p-8 border hover:shadow-xl transition">
              <div className="text-4xl mb-4">🏗️</div>
              <h3 className="text-xl font-semibold text-gray-900">Materials & Site Progress</h3>
              <p className="text-gray-600 mt-2">
                Monitor material usage, deliveries and on-site progress with photo updates.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white shadow-lg rounded-2xl p-8 border hover:shadow-xl transition">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-semibold text-gray-900">Payments & Billing</h3>
              <p className="text-gray-600 mt-2">
                Simplify tenant payments, invoices, dues and financial tracking from a unified dashboard.
              </p>
            </div>

          </div>
        </div>
      </section>



      <Footer />
    </>
  );
}
