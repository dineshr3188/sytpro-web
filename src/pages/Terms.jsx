import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Terms() {
  return (
    <>
      <Header />

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Terms & Conditions
          </h1>

          <p className="text-gray-600 mb-4">
            <strong>Effective Date:</strong> 01 December 2025
          </p>

          <h2 className="text-2xl font-semibold mt-6">1. Service Description</h2>
          <p className="text-gray-600 mt-2">
            SytPro provides digital tools for construction project tracking,
            real-time updates, team collaboration and reporting.
          </p>

          <h2 className="text-2xl font-semibold mt-6">2. Subscription & Billing</h2>
          <p className="text-gray-600 mt-2">
            Subscription fee: <strong>₹15,000/month per tenant</strong>.
            Payments are securely processed via Razorpay. Failed payments may
            result in account suspension.
          </p>

          <h2 className="text-2xl font-semibold mt-6">3. User Responsibilities</h2>
          <p className="text-gray-600 mt-2">
            Users must provide accurate information, maintain credential safety,
            and follow lawful usage.
          </p>

          <h2 className="text-2xl font-semibold mt-6">4. Data Ownership</h2>
          <p className="text-gray-600 mt-2">
            You own your data. SytPro only processes and stores it securely.
          </p>

          <h2 className="text-2xl font-semibold mt-6">5. Service Availability</h2>
          <p className="text-gray-600 mt-2">
            While we target 99% uptime, interruptions may occur during
            maintenance or external outages.
          </p>

          <h2 className="text-2xl font-semibold mt-6">6. Termination</h2>
          <p className="text-gray-600 mt-2">
            Accounts may be suspended due to non-payment or misuse.
          </p>

          <h2 className="text-2xl font-semibold mt-6">7. Contact</h2>
          <p className="text-gray-600 mt-2">
            Email: <a href="mailto:support@sytpro.in" className="text-blue-600 underline">support@sytpro.in</a>
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
