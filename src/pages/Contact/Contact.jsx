import React from "react";
import toast from "react-hot-toast";
import { FaPaw, FaPhoneAlt } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import { IoMail } from "react-icons/io5";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success(
      <div className="flex">
        <span>Thanks for reaching out!</span>
        <FaPaw className="text-orange-400 ml-2 mt-px" />
      </div>
    );
    e.target.reset();
  };

  return (
    <div className="bg-[#FAF6F3] min-h-screen pt-24 pb-12 px-4 flex items-center justify-center">
      {/* Main Container */}
      <div className="bg-white w-full max-w-5xl shadow-2xl rounded-3xl overflow-hidden flex flex-col md:flex-row">
        {/* Left Side */}
        <div className="relative w-full md:w-1/2 h-64 md:h-auto">
          <img
            src="https://i.postimg.cc/Y2F0mPzQ/photo-1583511655857-d19b40a7a54e-ixlib-rb-4-0.jpg"
            alt="Cute Dog Waiting"
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 text-white">
            <h3 className="text-2xl font-bold mb-2">Visit Us</h3>
            <p className="opacity-90 mb-4 text-sm leading-relaxed">
              We love visitors! Come meet our furry friends at our shelter.
            </p>
            <div className="space-y-2 text-sm font-medium">
              <div className="flex items-center gap-2">
                <FiMapPin />
                <span>123 Puppy Lane, Dhaka</span>
              </div>
              <div className="flex items-center gap-2">
                <FaPhoneAlt />
                <span>+880 123 456 789</span>
              </div>
              <div className="flex items-center gap-2">
                <IoMail />
                <span>hello@warmpaws.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/2 p-8 md:p-12 lg:p-16 bg-white flex flex-col justify-center">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800">
              Let's <span className="text-[#f47726]">Talk</span>
            </h2>
            <p className="text-gray-500 mt-2">
              Questions about adoption? Or just want to say hi? Fill out the
              form below.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-[#f47726] focus:ring-1 focus:ring-[#f47726] outline-none transition-all"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-[#f47726] focus:ring-1 focus:ring-[#f47726] outline-none transition-all"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Message
              </label>
              <textarea
                placeholder="How can we help?"
                rows="4"
                className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-[#f47726] focus:ring-1 focus:ring-[#f47726] outline-none transition-all resize-none"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#f47726] hover:bg-[#d66215] text-white font-bold py-3.5 rounded-xl transition-colors duration-300 shadow-lg shadow-orange-200 transform active:scale-95"
            >
              Send Message 🐾
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
