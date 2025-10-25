import React, { useContext } from "react";
import AuthPanel from "../../components/AuthPanel/AuthPanel";
import { FaUserLock } from "react-icons/fa";
import { useLocation } from "react-router";
import { AuthContext } from "../../provider/AuthContext";
import toast from "react-hot-toast";

const ResetPass = () => {
  const { resetPass } = useContext(AuthContext);
  const location = useLocation();
  const emailFromLogin = location.state?.email || "";

  const handleReset = (e) => {
    e.preventDefault();
    const email = e.target.email.value;

    toast.promise(
      resetPass(email)
        .then(() => {
          setTimeout(() => {
            window.open("https://mail.google.com", "_blank");
          }, 1500);
        })
        .catch((error) => {
          throw new Error(`Failed to send reset email.\nReason: ${error.code}`);
        }),
      {
        loading: "Sending reset link...",
        success: <b>Password reset link sent! Check your Gmail!</b>,
        error: (err) => <b>{err.message}</b>,
      }
    );
  };

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

        <form onSubmit={handleReset} className="w-full">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email address
              </label>
              <input
                required
                type="email"
                name="email"
                defaultValue={emailFromLogin}
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
