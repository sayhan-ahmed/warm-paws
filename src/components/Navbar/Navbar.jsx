import React, { use } from "react";
import { Link, NavLink } from "react-router";
import logo from "/logo2.png";
import "./Navbar.css";
import { FaUserTie } from "react-icons/fa";
import { AuthContext } from "../../provider/AuthProvider";
import toast from "react-hot-toast";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "My Profile", path: "/profile" },
];
const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  const handleLogOut = () => {
    const loadingToast = toast.loading("Logging out...");
    logOut()
      .then(() => {
        setTimeout(() => {
          toast.dismiss(loadingToast);
          toast.success("Successfully logged out!");
        }, 800);
      })
      .catch(() => {
        toast.dismiss(loadingToast);
        toast.error("Logout failed. Please try again.");
      });
  };
  return (
    <nav className="navbar bg-[#FAF6F3] shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-md dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navLinks.map(({ name, path }) => (
              <li key={path}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active" : ""}`
                  }
                >
                  {name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <Link className="flex items-center cursor-pointer" to="/">
            <img
              className="w-10 h-10 md:w-16 md:h-16 ml-0 md:ml-4 lg:ml-12"
              src={logo}
              alt="site-logo"
            />
            <span className="site-title text-base md:text-2xl uppercase font-bold">
              Warm<span className="text-[#f47726]">paws</span>
            </span>
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-2">
          {navLinks.map(({ name, path }) => (
            <li key={path}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end flex gap-2">
        <div>
          {user && (
            <div className="flex items-center gap-3">
              <div className="hidden sm:flex justify-center">
                <FaUserTie
                  size={50}
                  className="bg-orange-100 rounded-full p-4 text-orange-600"
                />
              </div>
            </div>
          )}
        </div>
        {user ? (
          <button
            onClick={handleLogOut}
            className="btn mr-0 lg:mr-12 px-3 md:px-5 uppercase font-semibold text-white bg-[#f47726] hover:bg-gray-800 text-[13px]"
          >
            Log Out
          </button>
        ) : (
          <Link
            to="/auth"
            className="btn mr-0 lg:mr-12 px-3 md:px-5 uppercase font-semibold text-white bg-[#f47726] hover:bg-gray-800 text-[13px]"
          >
            Login / Register
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
