import React from "react";
import { Link } from "react-router";

const ComingSoon = () => {
  return (
    <div className="min-h-screen bg-[#FAF6F3] flex flex-col items-center justify-center px-4 text-center">
      {/* Image */}
      <div className="mb-8 relative">
        <div className="absolute inset-0 bg-[#f47726] rounded-full blur-xl opacity-20 animate-pulse"></div>
        <img
          src="https://thumb.photo-ac.com/eb/eb44a4d672a40fb6bafeee3a34b665cc_t.jpeg"
          alt="Working Dog"
          className="relative w-48 h-48 md:w-64 md:h-64 object-cover rounded-full border-4 border-white shadow-xl"
        />
      </div>

      {/* Content */}
      <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4 tracking-tight">
        Paws in <span className="text-[#f47726]">Progress</span>
      </h1>

      <p className="text-gray-500 text-lg md:text-xl mb-8 max-w-lg mx-auto leading-relaxed">
        We are currently building this page to make it pawsome!{" "}
        <br className="hidden md:block" />
        Please check back later.
      </p>

      {/* Back Button */}
      <Link
        to="/"
        className="btn bg-[#f47726] hover:bg-gray-900 text-white border-none rounded-full px-10 h-12 text-base font-semibold shadow-lg shadow-orange-100 transition-all duration-300 hover:scale-105"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default ComingSoon;
