import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";

export default function Home() {
  return (
    <>
      <Header />

      <section className="bg-gradient-to-b from-white to-gray-50 pt-24 pb-32">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

          {/* LEFT SIDE */}
          <div>
            <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">
              Construction Tracking <br /> Made Simple
            </h1>

            <p className="text-lg text-gray-600 mt-6">
              Track projects, materials, site progress, payments & tenants—
              all from a single powerful mobile app designed for contractors
              and builders.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex gap-4">
              <a
                href="/pricing"
                className="px-8 py-3 text-lg rounded-xl bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition-all"
              >
                Start Free Trial
              </a>

              <a
                href="#demo"
                className="px-8 py-3 text-lg rounded-xl bg-white border border-gray-300 text-gray-700 hover:bg-gray-100 transition-all"
              >
                Watch Demo
              </a>
            </div>

            {/* Trust Badges */}
            <div className="mt-8 flex items-center gap-3">
              <span className="text-yellow-400 text-2xl">★★★★★</span>
              <span className="text-gray-600 text-sm">Rated 4.8 by contractors</span>
            </div>
          </div>

          {/* RIGHT SIDE — VIDEO CARD */}
          <div className="relative flex justify-center">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border w-[450px]">

              <video
                src="https://construction-tracker-east1.s3.amazonaws.com/assets/hero-demo.mp4"
                poster="https://construction-tracker-east1.s3.amazonaws.com/assets/hero-poster.png"
                controls
                className="rounded-3xl w-full h-[260px] object-cover shadow-xl border"
              >
              </video>
            </div>

            {/* FLOATING STAT CARD */}
{/*             <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-xl border"> */}
{/*               <p className="text-gray-700 text-sm font-medium">Progress Tracked</p> */}
{/*               <p className="text-blue-600 font-bold text-lg">97%</p> */}
{/*             </div> */}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center text-gray-900">
            How SytPro Works
          </h2>

          <p className="mt-4 text-center text-gray-600 text-lg max-w-2xl mx-auto">
            A simple and intuitive workflow designed for contractors, builders and site managers.
          </p>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">

            {/* Step 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border hover:shadow-xl transition">
              <div className="text-4xl mb-4">📌</div>
              <h3 className="text-xl font-semibold text-gray-900">1. Create Project</h3>
              <p className="text-gray-600 mt-2">
                Add project details, assign team members and manage tasks effortlessly.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border hover:shadow-xl transition">
              <div className="text-4xl mb-4">🏗️</div>
              <h3 className="text-xl font-semibold text-gray-900">2. Track Site Progress</h3>
              <p className="text-gray-600 mt-2">
                Upload photos, track materials and record daily progress from the field.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border hover:shadow-xl transition">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-semibold text-gray-900">3. Manage Delivery</h3>
              <p className="text-gray-600 mt-2">
                Handle team,tasks and workflows automatically in one place.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* APP GALLERY — 3-PHONE SLIDER */}
      <section className="py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold text-gray-900">
            See SytPro in Action
          </h2>

          <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
            Explore how SytPro helps contractors, builders, engineers and site managers track everything in one place.
          </p>

          <div className="mt-16">
            <Swiper
              modules={[Autoplay, Pagination, Navigation]}
              spaceBetween={40}
              loop={true}
              centeredSlides={true}
              slidesPerView={3}
              pagination={{ clickable: true }}
              autoplay={{ delay: 2500 }}
              breakpoints={{
                0: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 }
              }}
              className="pb-12"
            >
              {/* Slide 1 */}
              <SwiperSlide className="flex justify-center">
                <div className="w-[260px] bg-white rounded-[35px] p-4 shadow-2xl border">
                  <img src="https://construction-tracker-east1.s3.amazonaws.com/assets/screen1.png" className="w-full rounded-2xl" />
                </div>
              </SwiperSlide>

              {/* Slide 2 */}
              <SwiperSlide className="flex justify-center">
                <div className="w-[260px] bg-white rounded-[35px] p-4 shadow-2xl border">
                  <img src="https://construction-tracker-east1.s3.amazonaws.com/assets/screen2.png" className="w-full rounded-2xl" />
                </div>
              </SwiperSlide>

              {/* Slide 3 */}
              <SwiperSlide className="flex justify-center">
                <div className="w-[260px] bg-white rounded-[35px] p-4 shadow-2xl border">
                  <img src="https://construction-tracker-east1.s3.amazonaws.com/assets/screen3.png" className="w-full rounded-2xl" />
                </div>
              </SwiperSlide>

              {/* Slide 4 */}
              <SwiperSlide className="flex justify-center">
                <div className="w-[260px] bg-white rounded-[35px] p-4 shadow-2xl border">
                  <img src="https://construction-tracker-east1.s3.amazonaws.com/assets/screen4.png" className="w-full rounded-2xl" />
                </div>
              </SwiperSlide>

              {/* Slide 5 */}
              <SwiperSlide className="flex justify-center">
                <div className="w-[260px] bg-white rounded-[35px] p-4 shadow-2xl border">
                  <img src="https://construction-tracker-east1.s3.amazonaws.com/assets/screen5.png" className="w-full rounded-2xl" />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>

        </div>
      </section>


      <Footer />
    </>
  );
}
