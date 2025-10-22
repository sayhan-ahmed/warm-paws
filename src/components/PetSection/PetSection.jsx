import React from "react";

const PetSection = () => {
  const pets = [
    {
      name: "Cats",
      image: "https://i.postimg.cc/6qhKSjHn/ragdoll-cath5-Shutterstock-1.jpg",
    },
    {
      name: "Dogs",
      image: "https://i.postimg.cc/qRWFB8FX/istockphoto-474486193-612x612.jpg",
    },
    {
      name: "Rabbits",
      image: "https://i.postimg.cc/zGSYdPct/rabbit.png",
    },
    {
      name: "Hamsters",
      image: "https://i.postimg.cc/m2j0CF1Z/hamster.avif",
    },
    {
      name: "Birds",
      image: "https://i.postimg.cc/VvdbgtsT/bird.jpg",
    },
    {
      name: "Guinea Pig",
      image: "https://i.postimg.cc/9QMQs76X/guinea-pig.png",
    },
  ];

  return (
    <section className="bg-[#111] py-16 text-center text-white">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold mb-4">
          Pets
          <span className="border-b-4 border-orange-500 inline-block pb-2 px-4">
            we
          </span>
          handle
          <span className="text-orange-500">.</span>
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          We help save lives of your beloved pets. Our expert pet trainers are
          always here to help your pet in need.
        </p>

        {/* pet cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-6 gap-6 justify-center">
          {pets.map((pet, index) => (
            <div
              key={index}
              className="bg-[#1b1b1b] rounded-xl p-10 
             hover:bg-[#222] hover:ring-1 hover:ring-orange-500 
             hover:shadow-lg hover:shadow-orange-500/50
             transition transform hover:-translate-y-1 duration-300 cursor-pointer"
            >
              <div className="flex justify-center mb-3">
                <img
                  src={pet.image}
                  alt={pet.name}
                  className="rounded-full w-28 h-28 object-cover"
                />
              </div>
              <h4 className="font-semibold text-xl pt-5">{pet.name}</h4>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-6 mt-12">
          <button className="bg-white text-black font-semibold py-3 px-6 rounded-full hover:bg-gray-200 transition transform hover:-translate-y-1 duration-300 cursor-pointer">
            Find Out More
          </button>
          <button className="bg-orange-500 text-white font-semibold py-3 px-6 rounded-full hover:bg-orange-600 transition transform hover:-translate-y-1 duration-300 cursor-pointer">
            Purchase
          </button>
        </div>
      </div>
    </section>
  );
};

export default PetSection;
