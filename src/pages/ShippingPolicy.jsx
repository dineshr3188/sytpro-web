import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ShippingPolicy() {
  return (
    <>
      <Header />

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Shipping & Delivery Policy
          </h1>

          <p className="text-gray-600 mb-4">
            SytPro is a digital SaaS platform. No physical goods are shipped.
          </p>

          <h2 className="text-2xl font-semibold mt-6">1. Service Delivery</h2>
          <p className="text-gray-600 mt-2">
            Upon payment, your tenant account is activated instantly and access
            credentials are emailed.
          </p>

          <h2 className="text-2xl font-semibold mt-6">2. No Physical Shipment</h2>
          <p className="text-gray-600 mt-2">
            Digital service only. No delivery charges apply.
          </p>

          <h2 className="text-2xl font-semibold mt-6">3. Contact</h2>
          <p className="text-gray-600 mt-2">
            Email: <a href="mailto:support@sytpro.in" className="text-blue-600 underline">support@sytpro.in</a>
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
