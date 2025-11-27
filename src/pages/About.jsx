import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <Header />

      {/* HERO */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-gray-900">
            About SytPro
          </h1>

          <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
            SytPro is a modern construction tracking platform built for
            contractors, builders, site managers & engineers — designed to make
            project management simple, transparent and efficient.
          </p>
        </div>
      </section>

      {/* OUR MISSION */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              Our Mission
            </h2>
            <p className="text-gray-600 mt-4 leading-relaxed">
              Construction projects often face delays, miscommunication, material
              wastage and a lack of real-time visibility. SytPro was created to
              solve these challenges by bringing everything — projects, tasks,
              materials, team updates and payments — into one powerful platform.
            </p>
            <p className="text-gray-600 mt-4 leading-relaxed">
              Our goal is simple: help every construction team deliver projects
              on time, with transparency and total control.
            </p>
          </div>

          <img
            src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?q=80&w=1200"
            alt="Construction Team"
            className="rounded-3xl shadow-lg"
          />
        </div>
      </section>

      {/* WHY SYTPRO */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Why SytPro?
          </h2>

          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            We focus on simplicity, speed and reliability — everything a modern
            construction team needs.
          </p>

          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {/* CARD 1 */}
            <div className="bg-white p-8 rounded-3xl shadow hover:shadow-xl transition">
              <div className="text-blue-600 text-4xl mb-4">📱</div>
              <h3 className="text-xl font-semibold text-gray-900">
                Built for Mobile Workflows
              </h3>
              <p className="text-gray-600 mt-3">
                Capture updates, photos and reports directly from the site.
              </p>
            </div>

            {/* CARD 2 */}
            <div className="bg-white p-8 rounded-3xl shadow hover:shadow-xl transition">
              <div className="text-blue-600 text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-gray-900">
                Fast & Easy to Use
              </h3>
              <p className="text-gray-600 mt-3">
                A clean interface designed for teams that need speed.
              </p>
            </div>

            {/* CARD 3 */}
            <div className="bg-white p-8 rounded-3xl shadow hover:shadow-xl transition">
              <div className="text-blue-600 text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold text-gray-900">
                Secure & Reliable
              </h3>
              <p className="text-gray-600 mt-3">
                Your data is encrypted and safely stored with AWS infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white text-center">
        <h2 className="text-3xl font-bold text-gray-900">
          Ready to Simplify Your Construction Workflow?
        </h2>

        <p className="text-gray-600 mt-3 max-w-xl mx-auto">
          Get started with SytPro and experience faster, smarter project tracking.
        </p>

        <a
          href="/pricing"
          className="inline-block mt-8 px-10 py-4 bg-blue-600 text-white rounded-xl font-medium text-lg hover:bg-blue-700 transition"
        >
          Start Free Trial
        </a>
      </section>

      <Footer />
    </>
  );
}
