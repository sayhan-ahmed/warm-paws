import React, { useRef } from "react";
import { FaStar } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { FaRegCalendarAlt, FaShieldAlt } from "react-icons/fa";
import toast from "react-hot-toast";

const ServiceDetailsCard = ({ service }) => {
  const {
    image,
    serviceName,
    providerName,
    rating,
    price,
    slotsAvailable,
    description,
    category,
  } = service || {};

  const formRef = useRef(null);
  const handleScrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleBookNow = (e) => {
    e.preventDefault();
    toast.success("Your booking request has been sent!");
    e.target.reset();
  };

  return (
    <section className="max-w-6xl mx-auto px-4 md:px-8 py-12">
      {/* head part */}
      <div className="flex flex-col md:flex-row justify-between gap-8">
        {/* left profile info */}
        <div>
          <div className="flex items-center gap-6">
            <img
              src={image}
              alt={serviceName}
              className="w-24 h-24 md:w-36 md:h-36 object-cover rounded-full border border-orange-500 bg-orange-50/40 shadow-lg"
            />
            <div>
              <h2 className="text-lg sm:text-2xl lg:text-3xl font-semibold text-gray-900">
                {serviceName}
              </h2>
              <p className="text-orange-600">{providerName}</p>
              <div className="flex items-center gap-2 my-1">
                <FaStar className="text-yellow-500" />
                <span className="font-medium">{rating}</span>
              </div>
              <div className="flex items-center text-sm sm:text-base gap-5 text-gray-700 font-semibold">
                <p>
                  Charge: <span className="text-green-600">${price}</span>
                </p>
                <p>
                  Slots: <span className="text-red-600">{slotsAvailable}</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* right box */}
        <div className="shadow-lg rounded-xl p-5 w-full md:w-72 bg-white border-t-2 border-orange-600">
          <div className="space-y-4 text-gray-700">
            <div className="flex items-start gap-3">
              <IoLocationSharp className="text-orange-600 text-xl mt-0.5" />
              <p>Available Online & Offline</p>
            </div>
            <div className="flex items-start gap-3">
              <FaRegCalendarAlt className="text-orange-600 text-xl mt-0.5" />
              <p>Open: Mon - Sat</p>
            </div>
            <div className="flex items-start gap-3">
              <FaShieldAlt className="text-orange-600 text-xl mt-0.5" />
              <p>Service Category: {category}</p>
            </div>
          </div>

          <button
            onClick={handleScrollToForm}
            className="mt-6 w-full bg-orange-400 text-white font-semibold py-3 rounded-lg hover:bg-orange-500 cursor-pointer transform transition-all ease-in-out duration-300 hover:scale-105"
          >
            Book Now
          </button>
        </div>
      </div>

      {/* about section */}
      <div className="border-b border-gray-400 mt-12">
        <button className="border-b-3 border-orange-500 text-orange-600 text-xl md:text-2xl font-semibold pb-2 px-3">
          About
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        {/* left cards */}
        <div className="md:col-span-1 space-y-6">
          {/* service info card */}
          <div className="border-t-2 border-orange-600 rounded-xl p-5 shadow-lg">
            <h3 className="font-semibold text-lg sm:text-xl mb-3">
              Service and Provider Info
            </h3>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Provided by{" "}
              <span className="font-semibold text-orange-600">
                {providerName}
              </span>
              . A trusted studio offering quality services for pet owners with
              care and professionalism.
            </p>
          </div>

          {/* Policies */}
          <div className="border-t-2 border-orange-600 rounded-xl p-5 shadow-lg">
            <h3 className="font-semibold text-lg sm:text-xl mb-3">Policies</h3>
            <ul className="space-y-2 text-sm sm:text-base text-gray-700">
              <li>🐾 Appointments required in advance</li>
              <li>🕒 Late arrivals shorten session time</li>
              <li>🎟️ Cancellations accepted 24h prior</li>
              <li>🌨️ Reschedules allowed for bad weather</li>
              <li>📷 Photos used only with permission</li>
              <li className="text-blue-600 font-medium mt-2">
                ✅ Satisfaction guaranteed
              </li>
            </ul>
          </div>
        </div>

        {/* Right Column */}
        <div className="md:col-span-2 border-t-2 border-orange-600 rounded-xl p-9 pt-5 shadow-xl">
          <h3 className="font-semibold text-lg sm:text-xl mb-3">
            Service Details
          </h3>
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base whitespace-pre-line">
            {description}
          </p>
        </div>
      </div>

      {/* booking form */}
      <div
        ref={formRef}
        className="border border-gray-200 bg-orange-50 rounded-2xl shadow-inner p-8 md:p-10 mt-20"
      >
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-800 mb-4 text-center">
          Book This Service
        </h3>
        <p className="text-gray-600 text-sm sm:text-base text-center mb-6">
          Fill out the form below to request a booking for{" "}
          <span className="font-semibold text-orange-600">{serviceName}</span>.
        </p>

        <form
          onSubmit={handleBookNow}
          className="max-w-md mx-auto flex flex-col gap-4"
        >
          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-1 focus:ring-orange-500 outline-none"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Your Email"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-1 focus:ring-orange-500 outline-none"
          />
          <button
            type="submit"
            className="w-full py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg cursor-pointer transform transition-all ease-in-out duration-300 hover:scale-105"
          >
            Book Now
          </button>
        </form>
      </div>
    </section>
  );
};

export default ServiceDetailsCard;
