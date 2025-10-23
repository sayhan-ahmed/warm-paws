import React from "react";
import AuthPanel from "../../components/AuthPanel/AuthPanel";
import { Link } from "react-router";

const Login = () => {
  return (
    <AuthPanel>
      <div className="w-full">
        <h2 className="text-2xl font-semibold text-gray-800 mb-1">
          Welcome Back
        </h2>
        <p className="text-sm text-gray-500 mb-6">
          Log in to continue to Warmpaws
        </p>
        <form className="w-full">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email address
              </label>
              <input
                type="email"
                placeholder="Enter email"
                className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-orange-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter password"
                className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-orange-500"
              />
            </div>

            <div className="flex justify-between items-center">
              <label className="flex items-center gap-2 text-sm text-gray-600">
                <input type="checkbox" className="w-4 h-4" /> Remember me
              </label>
              <Link
                to="/auth/reset"
                className="text-sm text-orange-600 hover:underline"
              >
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full mt-2 py-3 rounded-full bg-orange-500 text-white font-semibold shadow-lg cursor-pointer transform transition-all ease-in-out duration-300 hover:scale-95"
            >
              Login
            </button>
          </div>
        </form>

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

export default Login;
