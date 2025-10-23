import React from "react";
import { ImSpinner8 } from "react-icons/im";

const GlobalLoader = () => (
  <div
    className="fixed inset-0 flex items-center justify-center bg-white/70 backdrop-blur-sm 
  z-9999"
  >
    <ImSpinner8 className="animate-spin text-orange-500" size={50} />
  </div>
);

export default GlobalLoader;
