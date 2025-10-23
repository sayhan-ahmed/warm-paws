import React from "react";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { IoPaw } from "react-icons/io5";
import Snowfall from "react-snowfall";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const HeroSlider = () => {
  const slides = [
    {
      title: "Snuggle Season for Your Furry Friend",
      subtitle: "Welcome to WarmPaws Winter",
      rating: "4.8",
      customers: "25,000+",
      image: "https://i.postimg.cc/J4m5sv45/slide1.png",
    },
    {
      title: "Warm Hearts, Fluffy Sweaters, Happy Pets",
      subtitle: "Winter Comfort Collection",
      rating: "4.9",
      customers: "30,000+",
      image: "https://i.postimg.cc/0Q0dn0VW/slide6.jpg",
    },
    {
      title: "Snowy Walks, Cozy Blankets, Endless Love",
      subtitle: "Because Every Pet Deserves Warmth",
      rating: "4.7",
      customers: "22,000+",
      image: "https://i.postimg.cc/sg3z0jfG/slide5.jpg",
    },
    {
      title: "Furry Sweater Days & Snowy Paws",
      subtitle: "Wrap Your Pet in Warmth",
      rating: "4.8",
      customers: "28,000+",
      image: "https://i.postimg.cc/yxN657yX/slide3.png",
    },
    {
      title: "Blankets, Hot Cocoa, and Paw Prints in the Snow",
      subtitle: "Winter Stories Begin with Them",
      rating: "4.5",
      customers: "19,000+",
      image: "https://i.postimg.cc/XqTM8WH9/slide4.avif",
    },
    {
      title: "Cozy Evenings & Wagging Tails by the Hearth",
      subtitle: "Because Love Looks Like This",
      rating: "4.9",
      customers: "32,000+",
      image: "https://i.postimg.cc/sXjZjdJ2/slide7.png",
    },
  ];

  return (
    <div className="relative w-full h-screen bg-gray-100 overflow-hidden pt-10 md:pt-0">
      <Snowfall
        snowflakeCount={140}
        color="#0FC6F2"
        radius={[3, 6]}
        speed={[0.8, 2.5]}
        wind={[-0.5, 1]}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          zIndex: 2,
          mixBlendMode: "screen",
        }}
      />
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
        className="h-full relative z-10"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col md:flex-row items-center justify-between h-full px-10 md:px-20">
              {/* Left text area */}
              <div className="text-center md:text-left space-y-6 md:w-1/2">
                <span className="bg-orange-100 text-orange-600 px-4 py-1 rounded-full text-sm font-semibold">
                  {slide.subtitle}
                </span>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-extrabold text-gray-800 leading-tight">
                  {slide.title}
                </h1>
                <button className="btn-secondary mx-auto md:mx-0">
                  Contact Us{" "}
                  <span>
                    <IoPaw />
                  </span>
                </button>
                {/* rating and trusted by */}
                <div className="mt-4 flex items-center justify-center md:justify-start gap-3">
                  <div className="flex items-center">
                    {Array.from({ length: 5 }).map((_, i) => {
                      const ratingValue = parseFloat(slide.rating);
                      if (ratingValue >= i + 1) {
                        return (
                          <FaStar key={i} className="text-yellow-500 text-lg" />
                        );
                      } else if (ratingValue >= i + 0.5) {
                        return (
                          <FaStarHalfAlt
                            key={i}
                            className="text-yellow-500 text-lg"
                          />
                        );
                      } else {
                        return (
                          <FaRegStar
                            key={i}
                            className="text-gray-300 text-lg"
                          />
                        );
                      }
                    })}
                  </div>
                  <p className="text-gray-500 text-sm">
                    Trusted by {slide.customers} Customers
                  </p>
                </div>
              </div>

              {/* Right image area */}
              <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center">
                <img
                  src={slide.image}
                  alt="Pet"
                  className="rounded-3xl shadow-2xl object-cover w-96 h-96 md:w-[500px] md:h-[500px]"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
