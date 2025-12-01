import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Refund() {
  return (
    <>
      <Header />

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Cancellation & Refund Policy
          </h1>

          <p className="text-gray-600 mb-4">
            <strong>Effective Date:</strong> 01 December 2025
          </p>

          <h2 className="text-2xl font-semibold mt-6">1. Subscription Cancellation</h2>
          <p className="text-gray-600 mt-2">
            You may request cancellation anytime via email:
            <a href="mailto:support@sytpro.in" className="text-blue-600 underline"> support@sytpro.in</a>
          </p>

          <h2 className="text-2xl font-semibold mt-6">2. Refund Eligibility</h2>
          <p className="text-gray-600 mt-2">
            Refunds apply only for duplicate payments or charges after cancellation.
          </p>

          <h2 className="text-2xl font-semibold mt-6">3. No Refund Cases</h2>
          <p className="text-gray-600 mt-2">
            No refunds for active monthly subscriptions or account suspension due
            to non-payment.
          </p>

          <h2 className="text-2xl font-semibold mt-6">4. Processing Time</h2>
          <p className="text-gray-600 mt-2">7–10 business days.</p>
        </div>
      </section>

      <Footer />
    </>
  );
}
