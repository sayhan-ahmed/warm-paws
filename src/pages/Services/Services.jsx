import React, { useEffect, useState } from "react";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import TeamSection from "../../components/TeamSection/TeamSection";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("/petCare.json")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.error("Failed to load data:", err));
  }, []);

  return (
    <div className="bg-base-200">
      <div className="w-4/5 mx-auto">
        <div className="p-10 pb-20">
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-center font-extrabold text-orange-600">
            Popular Winter Care Services
          </h2>
          <p className="text-gray-600 mt-3 text-center">
            Ensure your pets stay warm, comfortable, and well-groomed with our
            specially designed winter care treatments.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-20">
          {services.map((service) => (
            <ServiceCard key={service.serviceId} service={service} />
          ))}
        </div>
      </div>
      <TeamSection></TeamSection>
    </div>
  );
};

export default Services;
