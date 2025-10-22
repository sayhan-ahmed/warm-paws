import React, { useEffect, useState } from "react";
import HeroSlider from "../../components/HeroSlider/HeroSlider";
import ServiceCard from "../../components/ServiceCard/ServiceCard";

const Home = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("/petCare.json")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.error("Failed to load data:", err));
  }, []);

  return (
    <div>
      {/* slider section */}
      <HeroSlider></HeroSlider>

      {/* service section */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-8 text-[#f06b13]">
          Popular Winter Care Services
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.slice(0, 6).map((service) => (
            <ServiceCard key={service.serviceId} service={service} />
          ))}
        </div>
      </section>
      {/* winter care tips section */}
      {/* meet our expert section */}
    </div>
  );
};

export default Home;
