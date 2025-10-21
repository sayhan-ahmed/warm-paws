import React from "react";
import { Link, NavLink } from "react-router";
import logo from "/logo2.png";
import "./Navbar.css";
import { IoPaw } from "react-icons/io5";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "My Profile", path: "/profile" },
];
const Navbar = () => {
  return (
    <nav className="navbar bg-base-100 shadow-sm">
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
      <div className="navbar-end flex">
        <button className="btn mr-0 lg:mr-12 px-2 md:px-5 uppercase font-semibold text-white bg-[#f47726] rounded-4xl hover:bg-gray-800 text-[13px]">
          <IoPaw className="text-base md:text-xl mb-1" />
          Login / Register
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
