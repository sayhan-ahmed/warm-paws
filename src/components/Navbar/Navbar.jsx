import React, { use } from "react";
import { Link, NavLink } from "react-router";
import logo from "/logo2.png";
import "./Navbar.css";
import { AuthContext } from "../../provider/AuthContext";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Support", path: "/support" },
  ];

  const handleLogOut = () => {
    if (window.confirm("Are you sure you want to log out?")) {
      toast.promise(
        logOut()
          .then(() => {
            console.log("Logged out");
          })
          .catch((err) => {
            throw new Error(`Logout failed: ${err.code}`);
          }),
        {
          loading: "Logging out...",
          success: <b>Logged out successfully!</b>,
          error: (err) => <b>{err.message}</b>,
        }
      );
    }
  };

  return (
    <nav className="bg-[#FAF6F3] fixed top-0 left-0 w-full z-50 shadow-sm">
      <div className="navbar max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navbar Start */}
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden pl-0"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
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
              {user && (
                <li>
                  <NavLink
                    to="/profile"
                    className={({ isActive }) =>
                      `nav-link ${isActive ? "active" : ""}`
                    }
                  >
                    My Profile
                  </NavLink>
                </li>
              )}
            </ul>
          </div>

          <Link className="flex items-center cursor-pointer gap-2" to="/">
            <img
              className="w-10 h-10 md:w-12 md:h-12"
              src={logo}
              alt="site-logo"
            />
            <span className="site-title text-xl md:text-2xl uppercase font-bold">
              Warm<span className="text-[#f47726]">paws</span>
            </span>
          </Link>
        </div>

        {/* Navbar Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-4">
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

        {/* Navbar End */}
        <div className="navbar-end flex items-center gap-3 relative">
          {user && (
            <div className="relative flex items-center group mr-2">
              <Link
                to="/profile"
                className="overflow-hidden rounded-full border-2 border-[#f47726]"
              >
                <img
                  src={
                    user?.photoURL ||
                    "https://i.postimg.cc/ZRWLcnw5/6780628.png"
                  }
                  alt="Profile"
                  className="w-9 h-9 rounded-full object-cover cursor-pointer transform transition-transform duration-300 group-hover:scale-105"
                />
              </Link>

              <span className="absolute right-12 bg-gray-700 text-white text-xs font-medium py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10 pointer-events-none">
                {user.displayName || "User"}
              </span>
            </div>
          )}

          {/* Login/Logout Button */}
          <div>
            {user ? (
              <button
                onClick={handleLogOut}
                className="btn min-h-10 h-10 px-4 uppercase font-semibold text-white bg-[#f47726] hover:bg-gray-800 text-xs md:text-sm border-none"
              >
                Log Out
              </button>
            ) : (
              <Link
                to="/auth/login"
                className="btn min-h-10 h-10 px-4 uppercase font-semibold text-white bg-[#f47726] hover:bg-gray-800 text-xs md:text-sm border-none"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
