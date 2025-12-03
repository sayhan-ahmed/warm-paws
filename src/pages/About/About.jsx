import React from "react";
import { Link } from "react-router";

const About = () => {
  return (
    <div className="bg-[#FAF6F3] min-h-screen">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            About <span className="text-[#f47726]">Warmpaws</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Dedicated to bringing warmth and comfort to every pet. We bridge the
            gap between loving owners and the best care services available.
          </p>
        </div>

        {/* Content Section */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
          {/* Image Side */}
          <div className="w-full md:w-1/2">
            <img
              src="https://i.postimg.cc/ydr5Tnh8/photo-1450778869180-41d0601e046e-ixlib-rb-4-0.jpg"
              alt="Happy dog and cat"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>

          {/* Text Side */}
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-3xl font-bold text-gray-800">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              At Warmpaws, we believe that every pet deserves a safe, happy, and
              healthy life. Our platform was created to simplify the process of
              finding reliable pet services, adoption opportunities, and
              community support.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Whether you are looking to adopt a new family member or find the
              best grooming and walking services in your area, we are here to
              make that connection seamless and trustworthy.
            </p>

            <Link to="/contact">
              <button className="btn mt-4 px-6 py-3 bg-[#f47726] hover:bg-gray-800 text-white font-semibold rounded-md border-none uppercase transition-all duration-300">
                Contact Us
              </button>
            </Link>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow">
            <div className="text-[#f47726] text-4xl font-bold mb-2">500+</div>
            <h3 className="text-xl font-semibold text-gray-800">Happy Pets</h3>
            <p className="text-gray-500 mt-2">
              Successfully connected with loving homes and services.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow">
            <div className="text-[#f47726] text-4xl font-bold mb-2">100%</div>
            <h3 className="text-xl font-semibold text-gray-800">
              Verified Quality
            </h3>
            <p className="text-gray-500 mt-2">
              We ensure all listings and services meet our safety standards.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow">
            <div className="text-[#f47726] text-4xl font-bold mb-2">24/7</div>
            <h3 className="text-xl font-semibold text-gray-800">Support</h3>
            <p className="text-gray-500 mt-2">
              Our dedicated team is always here to help you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
