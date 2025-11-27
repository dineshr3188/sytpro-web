import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <>
      <Header />

      {/* HERO SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h1 className="text-4xl font-bold text-gray-900">
            Contact Us
          </h1>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Have questions? Need assistance? Our team is here to help.
            Reach out anytime.
          </p>
        </div>
      </section>

      {/* CONTACT DETAILS + FORM */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">

          {/* CONTACT INFO */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">
              Get in Touch
            </h2>

            <p className="text-gray-600 mt-4">
              We typically respond within 4 hours.
            </p>

            <div className="mt-8 space-y-6">
              <div>
                <p className="text-gray-500 text-sm">Email</p>
                <p className="text-gray-800 font-medium">dineshr3188@gmail.com</p>
              </div>

              <div>
                <p className="text-gray-500 text-sm">Phone</p>
                <p className="text-gray-800 font-medium">+91 8951915344</p>
              </div>

              <div>
                <p className="text-gray-500 text-sm">Address</p>
                <p className="text-gray-800 font-medium">
                  SytPro <br />
                  Bangalore, Karnataka, India
                </p>
              </div>
            </div>
          </div>

          {/* CONTACT FORM */}
          <div className="bg-gray-50 p-8 rounded-2xl shadow-lg border border-gray-200">
            <form className="space-y-6">

              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Dinesh R"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="dineshr3188@gmail.com"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Phone
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="+91 8951915344"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Message
                </label>
                <textarea
                  className="w-full px-4 py-3 border rounded-xl h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="How can we help you?"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl text-lg font-semibold"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* OPTIONAL MAP */}
{/*       <section className="py-12"> */}
{/*         <div className="max-w-5xl mx-auto px-6"> */}
{/*           <iframe */}
{/*             title="SytPro Location" */}
{/*             className="w-full h-72 rounded-2xl shadow-lg grayscale" */}
{/*             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387144.00758318994!2d77.3507372865696!3d12.953847720996045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15c31bd0b7df%3A0x6dd8d67f1d8c5c2a!2sBangalore%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000" */}
{/*             allowFullScreen="" */}
{/*             loading="lazy" */}
{/*           ></iframe> */}
{/*         </div> */}
{/*       </section> */}

      <Footer />
    </>
  );
}
