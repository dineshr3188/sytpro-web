import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Pricing() {
  return (
    <>
      <Header />

      {/* PRICING SECTION */}
      <section className="py-28 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center px-6">

          <h1 className="text-4xl font-bold text-gray-900">
            Simple & Transparent Pricing
          </h1>

          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            One powerful plan for contractors, builders, site managers & tenants.
          </p>

          {/* Pricing Card */}
          <div className="mt-14 flex justify-center">
            <div className="bg-white shadow-xl rounded-3xl p-10 border w-full max-w-lg">

              <h2 className="text-3xl font-semibold text-gray-900">
                ₹15,000 <span className="text-lg text-gray-600">/ month</span>
              </h2>

              <p className="text-gray-600 mt-2">
                Unlimited Projects • Unlimited Tasks • Unlimited Users
              </p>

              {/* Feature List */}
              <ul className="text-left mt-8 space-y-4">
                {[
                  "Track Projects, Materials & Site Progress",
                  "Manage Team, Tenants & Payments",
                  "Photo Uploads & Daily Reports",
                  "Real-time Project Insights",
                  "Export Reports & Analytics",
                  "Admin Control + Permissions",
                  "Mobile App for Android",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="text-green-600 text-xl">✔</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              {/* CTA BUTTON */}
              <button className="mt-10 w-full py-4 bg-blue-600 text-white rounded-xl font-medium text-lg hover:bg-blue-700 transition">
                Start Free Trial
              </button>

              <p className="mt-4 text-sm text-gray-500">
                No credit card required. Cancel anytime.
              </p>

            </div>
          </div>
        </div>
      </section>

      {/* OPTIONAL — COMPARISON GRID */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900">
            Why Choose SytPro?
          </h2>

          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {[
              {
                title: "All-in-One Platform",
                desc: "Projects, tasks, materials, tenants, payments and reports — everything in one place.",
              },
              {
                title: "Unlimited Users",
                desc: "Add team members, contractors, managers, auditors without extra cost.",
              },
              {
                title: "Reliable & Secure",
                desc: "Hosted on AWS with secure backups, encryption and 99.9% uptime.",
              },
            ].map((box, i) => (
              <div
                key={i}
                className="p-8 border rounded-3xl shadow-sm bg-gray-50 hover:shadow-xl transition"
              >
                <h3 className="text-xl font-semibold text-gray-900">{box.title}</h3>
                <p className="text-gray-600 mt-3">{box.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
