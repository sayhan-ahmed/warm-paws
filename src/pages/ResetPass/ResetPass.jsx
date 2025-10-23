import React from "react";
import { Link } from "react-router";
import AuthPanel from "../../components/AuthPanel/AuthPanel";
import { FaUserLock } from "react-icons/fa";

const ResetPass = () => {
  return (
    <AuthPanel>
      <div className="w-full">
        <div className="flex justify-center">
          <FaUserLock
            size={80}
            className="bg-orange-100 rounded-full p-4 text-orange-600 mb-5"
          />
        </div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-1 text-center">
          Lost Your Password?
        </h2>
        <p className="text-sm text-gray-500 mb-6 text-center">
          Recover it now!
        </p>

        <form className="w-full">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email address
              </label>
              <input
                required
                type="email"
                placeholder="Enter email"
                className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-orange-500"
              />
            </div>

            <button
              type="submit"
              className="w-full mt-2 py-3 rounded-full bg-orange-500 text-white font-semibold shadow-lg cursor-pointer transform transition-all ease-in-out duration-300 hover:scale-95"
            >
              Get OTP
            </button>
          </div>
        </form>
      </div>
    </AuthPanel>
  );
};

export default ResetPass;
