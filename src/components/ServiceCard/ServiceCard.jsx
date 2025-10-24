import React from "react";
import { FaStar, FaQuoteRight, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { Link } from "react-router";

const ServiceCard = ({ service, accentColor = "#4A4645" }) => {
  const { serviceId, serviceName, image, description, rating, price } = service;
  return (
    <div
      className="relative bg-white rounded-2xl shadow-md px-6 pt-12 pb-6 w-full max-w-sm mx-auto transition hover:shadow-lg mt-16"
      style={{ borderTop: `4px solid ${accentColor}` }}
    >
      {/* Avatar Circle */}
      <div
        className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-1 shadow-md"
        style={{ border: `3px solid ${accentColor}` }}
      >
        <div
          className="w-28 h-28 rounded-full overflow-hidden flex items-center justify-center"
          style={{ backgroundColor: `${accentColor}20` }}
        >
          <img
            src={image}
            alt={serviceName}
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </div>

      {/* Content */}
      <div className="text-center mt-12">
        <h3 className="text-lg font-extrabold" style={{ color: accentColor }}>
          {serviceName}
        </h3>
        <hr className="my-3 border-gray-200" />
        <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
          {description}
        </p>

        <div className="flex justify-between items-center mt-5">
          {/* Rating */}
          <div className="flex items-center gap-1 text-orange-400">
            {Array.from({ length: 5 }).map((_, i) => {
              const ratingValue = parseFloat(rating);
              if (ratingValue >= i + 1) {
                return <FaStar key={i} className="text-sm" />;
              } else if (ratingValue >= i + 0.5) {
                return <FaStarHalfAlt key={i} className="text-sm" />;
              } else {
                return <FaRegStar key={i} className="text-gray-300 text-sm" />;
              }
            })}
            <span className="ml-1">{rating}</span>
          </div>
          <p className="text-green-600 text-lg font-semibold mt-1">${price}</p>
        </div>
        {/* Bottom Section */}
        <div className="flex items-center justify-between mt-5">
          <Link
            to={`/service-details/${serviceId}`}
            className="btn-primary rounded-tl-2xl rounded-br-2xl cursor-pointer"
          >
            View Details
          </Link>

          {/* Quote Icon */}
          <div
            className="p-2 rounded-full"
            style={{ backgroundColor: `${accentColor}20`, color: accentColor }}
          >
            <FaQuoteRight size={30} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
