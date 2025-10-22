import React from "react";
import { useNavigate } from "react-router";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <section className="flex flex-col items-center justify-center text-center min-h-screen bg-white px-6 py-16">
      <h1 className="text-5xl md:text-6xl font-extrabold text-orange-500 mb-6">
        404 Error..!
      </h1>
      <img
        src="https://i.postimg.cc/W3RyD8y2/404.png"
        alt="Funny dog"
        className="w-full max-w-md mx-auto object-contain"
      />

      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
        Uh-oh<span className="text-orange-600">,</span> page not found
        <span className="text-orange-600"> !!</span>
      </h2>

      <p className="text-gray-500 max-w-xl mx-auto leading-relaxed mb-8">
        It seems the page you're looking for slipped out of its leash! No
        worries— head back to the{" "}
        <a href="/" className="text-orange-500 underline hover:text-orange-600">
          home page
        </a>{" "}
        or fetch what you need from the menu. We're here to help if you’re
        feeling a little lost!
      </p>

      <button onClick={() => navigate(-1)} className="btn-secondary">
        Go Back
      </button>
    </section>
  );
};

export default ErrorPage;
