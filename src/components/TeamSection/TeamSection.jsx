import React, { useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import { MdAddCall } from "react-icons/md";

const teamMembers = [
  {
    id: 1,
    name: "Sophie Turner",
    role: "Pet Sitter",
    image: "https://i.postimg.cc/rm1TD1dN/p1.jpg",
    desc: `Sophie brings warmth and care to every animal she looks after, treating them as if they were her own. With years of hands-on experience, she ensures your pets feel loved, safe, and happy while you’re away.
  
  She believes that small acts—like gentle brushing or quiet cuddles—build strong bonds between humans and their furry friends.`,
  },
  {
    id: 2,
    name: "Liam Brooks",
    role: "Pet Coordinator",
    image: "https://i.postimg.cc/CK0mFbgR/p2.avif",
    desc: `Liam keeps everything running smoothly—from grooming schedules to vet appointments. His calm nature and love for all animals make him a trusted figure for both clients and colleagues.
  
  He’s passionate about improving the day-to-day care experience for every pet and owner through communication and consistency.`,
  },
  {
    id: 3,
    name: "Olivia Chen",
    role: "Veterinarian",
    image: "https://i.postimg.cc/0NNZMPzN/p3.jpg",
    desc: `Dr. Olivia is a compassionate veterinarian who focuses on preventive care and gentle treatment methods. She believes that early attention and education are key to long-term pet wellness. 
  
  Her favorite part of the job is educating pet owners about wellness routines that help pets live longer, happier lives.`,
  },
  {
    id: 4,
    name: "Ethan Rivera",
    role: "Groomer",
    image: "https://i.postimg.cc/FsZjjw5S/p4.jpg",
    desc: `Ethan is an expert groomer with a patient and caring approach. He specializes in breed-specific cuts and soothing grooming experiences that pets actually enjoy.  
    
Ethan’s goal is to make grooming a positive ritual, not a chore. With his calm touch and attention to detail, every pet leaves his care looking.`,
  },
];

const TeamSection = () => {
  const [active, setActive] = useState(teamMembers[0]);

  return (
    <section className="bg-[#f9f6f2] py-16 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between">
          {/* Heading */}
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-center md:text-left font-extrabold text-orange-600">
              Meet Our Experts
            </h2>
            <p className="text-gray-600 mt-3 text-center md:text-left">
              Our team is made up of dedicated individuals who share a common
              love for animals.
            </p>
          </div>
          {/* Explore button */}
          <div className="mb-10 md:mb-0 flex justify-center md:block">
            <button className="border border-gray-300 rounded-full px-6 py-2 text-gray-700 hover:bg-gray-200 transition-all">
              Explore All Groomers
            </button>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Sidebar names */}
          <div className="flex flex-col gap-6 border-l-4 border-orange-500 pl-6 lg:w-1/3">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                onClick={() => setActive(member)}
                className={`flex items-center gap-4 cursor-pointer transition-all duration-200 ${
                  active.id === member.id
                    ? "text-black"
                    : "text-gray-500 hover:text-black"
                }`}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className={`w-20 h-20 rounded-full object-cover border-2 ${
                    active.id === member.id
                      ? "border-orange-500"
                      : "border-transparent"
                  }`}
                />
                <div>
                  <h4 className="font-semibold text-lg">{member.name}</h4>
                  <p className="text-sm">{member.role}</p>
                </div>
              </div>
            ))}
          </div>

          {/* member details */}
          <div
            key={active.id}
            className="bg-white shadow-md rounded-3xl p-8 flex flex-col lg:flex-row items-center gap-8 w-full lg:w-2/3 animate__animated animate__bounceIn"
          >
            <div className="shrink-0">
              <img
                src={active.image}
                alt={active.name}
                className="w-64 h-80 rounded-2xl object-cover"
              />
            </div>

            <div className="flex flex-col justify-between h-full">
              <div>
                <h3 className="text-2xl font-extrabold">{active.name}</h3>
                <p className="text-gray-500 mb-4">{active.role}</p>
                <p className="text-gray-600 whitespace-pre-line leading-relaxed">
                  {active.desc}
                </p>
              </div>

              {/* Contact button + icons */}
              <div className="mt-6 flex flex-col sm:flex-row items-center gap-4">
                <button className="btn-secondary">
                  <span>
                    <MdAddCall />
                  </span>
                  Contact Groomer
                </button>
                <div className="flex gap-4 text-gray-600 text-lg">
                  <FaFacebookF className="social" />
                  <FaTwitter className="social" />
                  <FaYoutube className="social" />
                  <FaLinkedinIn className="social" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
