import React, { useEffect, useState } from "react";
import HeroSlider from "../../components/HeroSlider/HeroSlider";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import PetSection from "../../components/PetSection/PetSection";
import TeamSection from "../../components/TeamSection/TeamSection";
import WinterCare from "../../components/WinterCare/WinterCare";

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
        {/* Heading */}
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-center md:text-left font-extrabold text-orange-600">
              Popular Winter Care Services
            </h2>
            <p className="text-gray-600 mt-3 text-center md:text-left">
              Ensure your pets stay warm, comfortable, and well-groomed with our
              specially designed winter care treatments.
            </p>
          </div>
          {/* Explore button */}
          <div className="mb-10 md:mb-0 flex justify-center md:block">
            <button className="border border-gray-300 rounded-full px-6 py-2 text-gray-700 hover:bg-gray-200 transition-all">
              Explore All Services
            </button>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.slice(0, 6).map((service) => (
            <ServiceCard key={service.serviceId} service={service} />
          ))}
        </div>
      </section>

      {/* pet we handle section */}
      <PetSection></PetSection>
      {/* winter care tips section */}
      <WinterCare></WinterCare>
      {/* meet our expert section */}
      <TeamSection></TeamSection>
    </div>
  );
};

export default Home;
