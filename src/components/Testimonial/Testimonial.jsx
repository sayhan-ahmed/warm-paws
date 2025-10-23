import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

const testimonials = [
  {
    name: "Sophia Reynolds",
    role: "Dog Owner",
    image: "https://i.postimg.cc/Kv9Q6NF9/user1.avif",
    quote:
      "I booked the winter care package for my Labrador, Max, and it was fantastic! The grooming and warm baths kept him cozy and his coat shiny throughout the season.",
  },
  {
    name: "Ethan Walker",
    role: "Cat Owner",
    image: "https://i.postimg.cc/25JnGcQC/user2.jpg",
    quote:
      "Their winter grooming service was a lifesaver. My cat usually gets dry skin in cold weather, but after their treatment, she’s been soft and happy all winter long.",
  },
  {
    name: "Ava Mitchell",
    role: "Rabbit Owner",
    image: "https://i.postimg.cc/k49pJgHf/user3.jpg",
    quote:
      "The team was so gentle and caring with my rabbit, Luna. They made sure she stayed warm and comfortable — it really put my mind at ease during the chilly days.",
  },
];

const Testimonial = () => {
  return (
    <div className="w-full h-full flex items-center justify-center px-8 relative z-10">
      <div className="max-w-2xl text-center text-white">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          loop
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <div className="px-6 md:px-0">
                <div className="flex items-center justify-center space-x-4 pb-5">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-20 h-20 rounded-full border-2 border-white shadow-md"
                  />
                  <div className="text-left">
                    <div className="text-white font-semibold text-lg">
                      {t.name}
                    </div>
                    <div className="text-teal-300 text-sm">{t.role}</div>
                  </div>
                </div>
                <p className="text-lg md:text-xl lg:text-2xl leading-relaxed mb-8">
                  “{t.quote}”
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
