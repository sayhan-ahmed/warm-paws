import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa6";
import { Link } from "react-router";

const ServiceCard = ({ service, accentColor = "#f47726" }) => {
  const { serviceId, serviceName, image, description, rating, price } = service;

  return (
    <div className="pt-10 h-full">
      <div
        className="relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 px-6 pt-12 pb-6 w-full h-full flex flex-col"
        style={{ borderTop: `4px solid ${accentColor}` }}
      >
        {/* Avatar Circle */}
        <div
          className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-1 shadow-md"
          style={{ border: `3px solid ${accentColor}` }}
        >
          <div className="w-24 h-24 rounded-full overflow-hidden flex items-center justify-center bg-gray-50">
            <img
              src={image}
              alt={serviceName}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div className="text-center mt-6 grow flex flex-col">
          <h3 className="text-xl font-bold text-gray-800 mb-2">
            {serviceName}
          </h3>
          <div className="w-10 h-1 bg-gray-100 mx-auto mb-4 rounded-full"></div>

          <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 mb-4 flex-grow">
            {description}
          </p>

          <div className="flex justify-between items-center border-t border-gray-100 pt-4 mt-auto">
            {/* Rating */}
            <div className="flex items-center gap-1 text-orange-400">
              {Array.from({ length: 5 }).map((_, i) => {
                const ratingValue = parseFloat(rating);
                if (ratingValue >= i + 1) {
                  return <FaStar key={i} className="text-sm" />;
                } else if (ratingValue >= i + 0.5) {
                  return <FaStarHalfAlt key={i} className="text-sm" />;
                } else {
                  return (
                    <FaRegStar key={i} className="text-gray-200 text-sm" />
                  );
                }
              })}
              <span className="text-xs text-gray-400 ml-1 font-medium">
                ({rating})
              </span>
            </div>
            <p className="text-[#f47726] text-lg font-bold">${price}</p>
          </div>
        </div>

        {/* Button */}
        <div className="flex items-center justify-between mt-6">
          <Link
            to={`/service-details/${serviceId}`}
            className="bg-[#f47726] hover:bg-gray-800 text-white text-sm font-bold py-2 px-6 rounded-full transition-colors duration-300 shadow-lg shadow-orange-100"
          >
            View Details
          </Link>

          <div
            className="p-2 rounded-full"
            style={{
              backgroundColor: `${accentColor}20`,
              color: `${accentColor}90`,
            }}
          >
            <FaQuoteRight size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
