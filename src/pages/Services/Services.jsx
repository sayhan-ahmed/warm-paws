import React, { useEffect, useState } from "react";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import TeamSection from "../../components/TeamSection/TeamSection";
import { FaSearch, FaSortAmountDown, FaSortAmountUp } from "react-icons/fa";

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    fetch("/petCare.json")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load data:", err);
        setLoading(false);
      });
  }, []);

  const processedServices = services
    .filter((service) =>
      service.serviceName.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOrder === "asc") {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-[#FAF6F3]">
        <span className="loading loading-spinner loading-lg text-[#f47726]"></span>
      </div>
    );
  }

  return (
    <div className="bg-[#FAF6F3] min-h-screen pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">
            All Winter <span className="text-[#f47726]">Services</span>
          </h2>
          <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
            Browse our complete list of services designed to keep your pets
            happy and healthy.
          </p>
        </div>

        {/* Filter & Sort Controls */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-10 bg-white p-4 rounded-xl shadow-sm">
          {/* Search Filter */}
          <div className="relative w-full md:w-1/2 lg:w-1/3">
            <input
              type="text"
              placeholder="Search services (e.g., Grooming)..."
              className="input input-bordered w-full pl-10 focus:outline-none focus:border-[#f47726]"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-3 w-full md:w-auto">
            <span className="text-gray-600 font-medium hidden sm:block">
              Sort by Price:
            </span>
            <select
              className="select select-bordered w-full md:w-auto focus:outline-none focus:border-[#f47726]"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="asc">Price: Low to High</option>
              <option value="desc">Price: High to Low</option>
            </select>
            <div className="text-[#f47726] text-xl">
              {sortOrder === "asc" ? <FaSortAmountUp /> : <FaSortAmountDown />}
            </div>
          </div>
        </div>

        {/* Services Grid */}
        {processedServices.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {processedServices.map((service) => (
              <ServiceCard
                key={service.serviceId}
                service={service}
                accentColor="#f47726"
              />
            ))}
          </div>
        ) : (
          /* No Results Found State */
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-700">
              No services found
            </h3>
            <p className="text-gray-500">Try adjusting your search criteria.</p>
          </div>
        )}
      </div>
      <div className="pt-16">
        <TeamSection />
      </div>
    </div>
  );
};

export default Services;
