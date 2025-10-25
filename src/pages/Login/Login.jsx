import React, { use } from "react";
import AuthPanel from "../../components/AuthPanel/AuthPanel";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../provider/AuthContext";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const { logIn, googleSignIn, setUser } = use(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  // login handle
  const handleLogIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log({ email, password });
    toast.promise(
      logIn(email, password)
        .then((result) => {
          const user = result.user;
          console.log(user);
          form.reset();
          navigate(`${location.state ? location.state : "/"}`);
        })
        .catch((error) => {
          throw new Error(`Failed to register.\nReason: ${error.code}`);
        }),
      {
        loading: "Logging you in...",
        success: <b>Welcome back!</b>,
        error: (err) => <b>{err.message}</b>,
      }
    );
  };

  // google login handle
  const handleGoogleLogin = () => {
    toast.promise(
      googleSignIn()
        .then((result) => {
          const user = result.user;
          setUser(user);
          navigate("/");
        })
        .catch((error) => {
          throw new Error(`Google Login failed.\nReason: ${error.code}`);
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
          Welcome Back
        </h2>
        <p className="text-sm text-gray-500 mb-6 text-center">
          Log in to continue to{" "}
          <span className="text-orange-500 font-bold">Warmpaws</span>
        </p>

        <form onSubmit={handleLogIn} className="w-full">
          <div className="space-y-4">
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
                Password
              </label>
              <input
                required
                name="password"
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
            <div>
              <p className="text-sm text-gray-400 text-center p-3">
                Other option
              </p>
              <button
                onClick={handleGoogleLogin}
                className="flex items-center justify-center gap-2 py-3 w-full border-0 font-semibold bg-gray-100 hover:ring-1 ring-orange-500 cursor-pointer"
              >
                <FcGoogle size={25} /> Login with Google
              </button>
            </div>
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
