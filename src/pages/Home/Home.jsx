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
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-8 text-orange-600">
          Popular Winter Care Services
        </h2>
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
