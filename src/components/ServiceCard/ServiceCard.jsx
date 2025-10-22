import React from "react";
import { FaStar } from "react-icons/fa";

const ServiceCard = ({ service }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <div className="text-center">
        <img
          src={service.image}
          alt={service.serviceName}
          className="h-80 w-auto object-cover mx-auto"
        />
        <h3 className="text-lg font-bold mt-2">{service.serviceName}</h3>
        <p className="text-gray-600 my-2 line-clamp-2">{service.description}</p>
        <div className="flex items-center justify-between px-1">
          <div className="flex items-center gap-1 text-[#F47726] bg-[#f4782629] px-2 py-1 rounded-sm">
            <FaStar />
            <p className="text-lg font-semibold">{service.rating}</p>
          </div>
          <p className="text-lg font-semibold text-green-700 bg-[#26f44529] px-3 py-1 rounded-sm">
            $ {service.price}
          </p>
        </div>
      </div>
      <button className="btn-primary rounded-tl-2xl rounded-br-2xl mt-4 md:mt-6 cursor-pointer">
        View Details
      </button>
    </div>
  );
};

export default ServiceCard;
