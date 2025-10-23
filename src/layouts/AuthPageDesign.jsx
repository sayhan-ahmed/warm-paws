import React from "react";
import AuthPanel from "../components/AuthPanel/AuthPanel";
import { FaUserTie } from "react-icons/fa";
import { Link } from "react-router";

const AuthPageDesign = () => {
  return (
    <AuthPanel>
      <div className="w-full">
        <div className="flex justify-center">
          <FaUserTie
            size={80}
            className="bg-orange-100 rounded-full p-4 text-orange-600 mb-5"
          />
        </div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-1 text-center">
          You are Logged Out
        </h2>
        <p className="text-sm text-gray-500 mb-6 text-center">
          Thank you for being with us
        </p>
        <Link
          to="/auth/login"
          className="block w-full mt-2 py-3 rounded-full bg-orange-500 text-white text-lg text-center font-semibold shadow-lg cursor-pointer transform transition-all ease-in-out duration-300 hover:scale-95"
        >
          Log In Now!
        </Link>
        <div className="mt-6 border-t pt-6 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <Link
              to="/auth/register"
              className="text-orange-600 font-semibold hover:underline"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </AuthPanel>
  );
};

export default AuthPageDesign;
