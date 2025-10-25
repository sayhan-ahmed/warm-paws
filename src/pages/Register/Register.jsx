import React, { use, useState } from "react";
import AuthPanel from "../../components/AuthPanel/AuthPanel";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../provider/AuthContext";
import toast from "react-hot-toast";
import { updateProfile } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import ShowPassword from "../../components/ShowPassword/ShowPassword";

const Register = () => {
  const { createUser, setUser, googleSignIn } = use(AuthContext);
  const navigate = useNavigate();
  const [passwordError, setPasswordError] = useState("");
  const [nameError, setNameError] = useState("");

  // register handle
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

    // name validation
    if (name.length < 5) {
      setNameError("Name Should be more than 5 characters");
      return;
    } else {
      setNameError("");
    }
    // password validation
    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long.");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setPasswordError("Password must contain at least one uppercase letter.");
      return;
    } else if (!/[a-z]/.test(password)) {
      setPasswordError("Password must contain at least one lowercase letter.");
      return;
    } else {
      setPasswordError("");
    }
    // create user
    toast.promise(
      createUser(email, password)
        .then((result) => {
          const user = result.user;
          form.reset();
          navigate("/");
          return updateProfile(user, {
            displayName: name,
            photoURL: photo,
          }).then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
          });
        })
        .catch((error) => {
          throw new Error(`Failed to register.\nReason: ${error.code}`);
        }),
      {
        loading: "Creating your account...",
        success: <b>Account created successfully!</b>,
        error: (err) => <b>{err.message}</b>,
      }
    );
  };

  // google Signup handle
  const handleGoogleSignup = () => {
    toast.promise(
      googleSignIn()
        .then((result) => {
          const user = result.user;
          setUser(user);
          navigate("/");
        })
        .catch((error) => {
          throw new Error(`Google Signup failed.\nReason: ${error.code}`);
        }),
      {
        loading: "Connecting to Google...",
        success: <b>Welcome to Warmpaws!</b>,
        error: (err) => <b>{err.message}</b>,
      }
    );
  };

  return (
    <AuthPanel>
      <div className="w-full">
        <h2 className="text-2xl font-semibold text-gray-800 mb-1 text-center">
          Create Account
        </h2>
        <p className="text-sm text-gray-500 mb-6 text-center">
          Register to continue to{" "}
          <span className="text-orange-500 font-bold">Warmpaws</span>
        </p>

        <form onSubmit={handleRegister} className="w-full">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <input
                required
                name="name"
                type="text"
                placeholder="Enter your full name"
                className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-orange-500"
              />
              {nameError && (
                <p className="text-red-500 text-xs mt-1">{nameError}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email address
              </label>
              <input
                required
                name="email"
                type="email"
                placeholder="Enter email"
                className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-orange-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Image URL
              </label>
              <input
                required
                name="photo"
                type="text"
                placeholder="Provide avatar URL"
                className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-orange-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <ShowPassword name="password" placeholder="Enter password" />
              {passwordError && (
                <p className="text-red-500 text-xs mt-1">{passwordError}</p>
              )}
            </div>
            <div>
              <label className="flex items-center gap-2 text-sm text-gray-600">
                <input required type="checkbox" className="w-4 h-4" /> Accept
                Terms & Conditions
              </label>
            </div>

            <button
              type="submit"
              className="w-full mt-2 py-3 rounded-full bg-orange-500 text-white font-semibold shadow-lg cursor-pointer transform transition-all ease-in-out duration-300 hover:scale-95"
            >
              Register
            </button>
            <div>
              <p className="text-sm text-gray-400 text-center p-3">
                Other option
              </p>
              <button
                onClick={handleGoogleSignup}
                className="flex items-center justify-center gap-2 py-3 w-full border-0 font-semibold bg-gray-100 hover:ring-1 ring-orange-500 cursor-pointer"
              >
                <FcGoogle size={25} /> Login with Google
              </button>
            </div>
          </div>
        </form>

        <div className="mt-6 border-t pt-6 text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <Link
              to="/auth/login"
              className="text-orange-600 font-semibold hover:underline"
            >
              Log in
            </Link>
          </p>
        </div>
      </div>
    </AuthPanel>
  );
};

export default Register;
