import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function DownloadApp() {
  return (
    <>
      <Header />

      {/* HERO SECTION */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-gray-900">
            Download the SytPro App
          </h1>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Manage projects, track site progress, update materials, assign tasks and
            get real-time insights — all from your mobile device.
          </p>
        </div>
      </section>

      {/* DOWNLOAD OPTIONS */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12 justify-center">

          {/* QR CODE */}
{/*           <div className="text-center"> */}
{/*             <img */}
{/*               src={qr} */}
{/*               alt="QR Code" */}
{/*               className="w-48 h-48 mx-auto shadow-lg rounded-xl" */}
{/*             /> */}
{/*             <p className="text-gray-600 mt-3">Scan to download SytPro App</p> */}
{/*           </div> */}

          {/* DOWNLOAD BUTTONS */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold text-gray-900">
              Get the App
            </h3>

            <a
              href="https://play.google.com/store/apps/details?id=com.sytpro.app"
              target="_blank"
              className="mt-6 inline-block"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png"
                alt="Download on Play Store"
                className="w-48"
              />
            </a>

            {/* If you launch iOS later */}
            {/*
            <a
              href="#"
              className="mt-4 inline-block"
            >
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                className="w-40"
              />
            </a>
            */}
          </div>
        </div>
      </section>

      {/* APP SCREENSHOTS */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            What’s Inside the App?
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            SytPro is built to help contractors and engineers manage all project workflows
            in one place.
          </p>

          <div className="mt-16 grid md:grid-cols-3 gap-10">
            <img src="/assets/screen1.png" className="rounded-3xl shadow-xl mx-auto w-64" />
            <img src="/assets/screen2.png" className="rounded-3xl shadow-xl mx-auto w-64" />
            <img src="/assets/screen3.png" className="rounded-3xl shadow-xl mx-auto w-64" />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
