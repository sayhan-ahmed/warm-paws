import React from "react";
import { FaPaw, FaDog, FaCat, FaFish, FaSnowflake } from "react-icons/fa";
import { MdHealthAndSafety } from "react-icons/md";
const winterTips = [
  {
    id: "01",
    icon: <FaDog className="text-orange-600 text-3xl" />,
    title: "Keep Them Warm",
    description:
      "Ensure your pets have cozy blankets and warm bedding during winter nights.",
  },
  {
    id: "02",
    icon: <MdHealthAndSafety className="text-orange-600 text-3xl" />,
    title: "Boost Their Nutrition",
    description:
      "Provide nutrient-rich food to maintain energy and body temperature.",
  },
  {
    id: "03",
    icon: <FaCat className="text-orange-600 text-3xl" />,
    title: "Limit Outdoor Time",
    description:
      "Avoid long walks during freezing temperatures to prevent frostbite.",
  },
  {
    id: "04",
    icon: <FaFish className="text-orange-600 text-3xl" />,
    title: "Hydration & Grooming",
    description:
      "Keep their water bowl from freezing and maintain clean, dry fur.",
  },
];

const WinterCare = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-20">
      {/* heading for mobile */}
      <div className="block md:hidden">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-4 text-center">
          Winter Care Tips for Pets
        </h2>
        <button className="btn-secondary mx-auto my-5">
          Contact Us <FaPaw />
        </button>
      </div>

      {/* all together */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-8 items-center">
        {/* top-left card */}
        <div className="order-1 md:order-0 md:row-start-1 md:col-start-1">
          <div className="bg-white rounded-2xl shadow-sm p-6 md:h-full">
            <div className="flex justify-between items-start">
              {winterTips[0].icon}
              <span className="text-orange-100 text-4xl font-bold">01</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mt-4">
              {winterTips[0].title}
            </h3>
            <p className="text-gray-500 mt-2">{winterTips[0].description}</p>
          </div>
        </div>

        {/* title and button */}
        <div className="hidden md:block">
          <div className="md:order-2 md:row-start-1 md:col-start-2 flex flex-col items-center">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mt-4 text-center">
              Winter Care Tips for Pets
            </h2>
            <button className="btn-secondary mx-auto mt-10">
              Contact Us <FaPaw />
            </button>
          </div>
        </div>

        {/* top right card */}
        <div className="order-3 md:row-start-2 md:col-start-1">
          <div className="bg-white rounded-2xl shadow-sm p-6 md:h-full">
            <div className="flex justify-between items-start">
              {winterTips[1].icon}
              <span className="text-orange-100 text-4xl font-bold">02</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mt-4">
              {winterTips[1].title}
            </h3>
            <p className="text-gray-500 mt-2">{winterTips[1].description}</p>
          </div>
        </div>

        {/* bottom left card*/}
        <div className="order-4 md:row-start-1 md:col-start-3">
          <div className="bg-white rounded-2xl shadow-sm p-6 md:h-full">
            <div className="flex justify-between items-start">
              {winterTips[2].icon}
              <span className="text-orange-100 text-4xl font-bold">03</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mt-4">
              {winterTips[2].title}
            </h3>
            <p className="text-gray-500 mt-2">{winterTips[2].description}</p>
          </div>
        </div>

        {/* bottom center image */}
        <div className="hidden md:block order-5 md:row-start-2 md:col-start-2 justify-center">
          <div className="rounded-3xl overflow-hidden shadow-md w-full max-w-md">
            <img
              src="https://i.postimg.cc/d157xZv6/pt.jpg"
              alt="Cute winter pet"
              className="w-full h-[190px] object-cover"
            />
          </div>
        </div>

        {/* bottom right card */}
        <div className="order-6 md:row-start-2 md:col-start-3">
          <div className="bg-white rounded-3xl shadow-sm p-6 md:h-full">
            <div className="flex justify-between items-start">
              {winterTips[3].icon}
              <span className="text-orange-100 text-4xl font-bold">04</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mt-4">
              {winterTips[3].title}
            </h3>
            <p className="text-gray-500 mt-2">{winterTips[3].description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WinterCare;
