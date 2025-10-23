import React from "react";
import Testimonial from "../Testimonial/Testimonial";

const AuthPanel = ({ children }) => {
  return (
    <div className="min-h-screen flex bg-base-300">
      {/* form */}
      <div className="h-full min-w-full sm:min-w-2/3 lg:min-w-1/3 m-auto">
        <div className="flex justify-center items-center gap-2 mt-8">
          <img src="/logo2.png" alt="Warmpaws" className="w-16 h-16" />
          <div className="font-bold text-2xl">
            Warm<span className="text-orange-400">Paws</span>
          </div>
        </div>
        <div className="px-10">
          <div
            className="bg-white rounded-2xl shadow-2xl p-10 mb-8"
            style={{ boxShadow: "0 20px 40px rgba(16,24,40,0.12)" }}
          >
            {children}
          </div>
        </div>
      </div>
      {/* testimonial */}
      <div
        className="hidden lg:flex flex-1 relative items-center justify-center"
        style={{
          backgroundImage: "url('/auth-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="absolute inset-0"
          style={{ background: "rgba(35,56,92,0.75)" }}
        />
        <div className="relative w-full h-full flex items-center justify-center">
          <Testimonial></Testimonial>
        </div>
      </div>
    </div>
  );
};

export default AuthPanel;
