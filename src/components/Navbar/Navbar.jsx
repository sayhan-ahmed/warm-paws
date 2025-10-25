import React, { use } from "react";
import { Link, NavLink } from "react-router";
import logo from "/logo2.png";
import "./Navbar.css";
import { AuthContext } from "../../provider/AuthContext";
import toast from "react-hot-toast";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "My Profile", path: "/profile" },
];
const Navbar = () => {
  const { user, logOut } = use(AuthContext);

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
    } else {
      toast("Logout cancelled", {
        icon: "❌",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    }
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
      <div className="navbar-end flex items-center gap-3 relative">
        {/* user image */}
        <div className="relative flex items-center group">
          <Link to="/profile" className="overflow-hidden rounded-full">
            <img
              src={
                user?.photoURL || "https://i.postimg.cc/ZRWLcnw5/6780628.png"
              }
              alt="Profile"
              className="w-10 h-10 rounded-full object-cover cursor-pointer transform transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* hover Name */}
          {user && (
            <span className="absolute right-12 bg-gray-800 text-white text-sm font-medium py-1 px-3 rounded-full opacity-0 translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap">
              {user.displayName || "User"}
            </span>
          )}
        </div>
        {/* Login/Logout button */}
        <div>
          {user ? (
            <button
              onClick={handleLogOut}
              className="btn mr-0 lg:mr-12 p-3 md:px-5 uppercase font-semibold text-white bg-[#f47726] hover:bg-gray-800 text-[13px]"
            >
              Log Out
            </button>
          ) : (
            <Link
              to="/auth/login"
              className="btn mr-0 lg:mr-12 p-3 md:px-5 uppercase font-semibold text-white bg-[#f47726] hover:bg-gray-800 text-[13px]"
            >
              Login <span className="hidden sm:block">/ Register</span>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
