import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function PrivacyPolicy() {
  return (
    <>
      <Header />

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Privacy Policy
          </h1>

          <p className="text-gray-600 mb-4">
            <strong>Effective Date:</strong> 01 December 2025
          </p>

          <p className="text-gray-600 mb-6">
            SytPro (“we”, “our”, “us”) is committed to protecting your privacy.
            This Privacy Policy explains how we collect, use, disclose, and
            safeguard your information when you use our website or mobile
            application.
          </p>

          <h2 className="text-2xl font-semibold mt-6">1. Information We Collect</h2>
          <ul className="list-disc ml-6 text-gray-600 mt-2 space-y-1">
            <li>Personal details: Name, phone number, email ID</li>
            <li>Business details: Company name, GST details, address</li>
            <li>App usage data</li>
            <li>Uploaded images, project data, progress reports</li>
            <li>Payment information (handled securely by Razorpay)</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6">2. How We Use Your Information</h2>
          <p className="text-gray-600 mt-2">
            We use your information to operate and improve SytPro, manage your
            account, process payments, send invoices, provide support, and ensure
            platform security.
          </p>

          <h2 className="text-2xl font-semibold mt-6">3. Sharing of Information</h2>
          <p className="text-gray-600 mt-2">
            We do <strong>not</strong> sell your information. Data may be shared
            only with trusted partners like Razorpay and AWS for secure
            processing and storage.
          </p>

          <h2 className="text-2xl font-semibold mt-6">4. Data Security</h2>
          <p className="text-gray-600 mt-2">
            Your data is protected using AWS S3 encryption, JWT authentication,
            and best-in-class security practices.
          </p>

          <h2 className="text-2xl font-semibold mt-6">5. Your Rights</h2>
          <p className="text-gray-600 mt-2">
            You may request data access, correction, or account deletion anytime.
          </p>

          <h2 className="text-2xl font-semibold mt-6">6. Contact</h2>
          <p className="text-gray-600 mt-2">
            Email us at: <a href="mailto:support@sytpro.in" className="text-blue-600 underline">support@sytpro.in</a>
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
