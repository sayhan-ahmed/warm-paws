import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const ShowPassword = ({
  name = "password",
  placeholder = "Enter password",
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative">
      <input
        type={showPassword ? "text" : "password"}
        name={name}
        placeholder={placeholder}
        required
        className="w-full border border-gray-200 rounded-lg px-4 py-3 pr-10 focus:outline-none focus:ring-1 focus:ring-orange-500"
      />
      <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-orange-500"
      >
        {showPassword ? <FaEyeSlash /> : <FaEye />}
      </button>
    </div>
  );
};

export default ShowPassword;
