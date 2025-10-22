import React from "react";
import logo from "/logo.png";
import { RiSendPlaneFill } from "react-icons/ri";
import "./Footer.css";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaXTwitter } from "react-icons/fa6";
import { IoCall, IoMailUnread } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="bg-gray-800">
      {/* upper side */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between py-10">
        {/* logo side */}
        <div className="w-full px-4 md:px-0 md:w-1/4 mb-10 md:mb-0">
          <div className="flex flex-col lg:flex-row items-center justify-center md:justify-start">
            <img
              src={logo}
              alt="website-logo"
              className="w-16 h-16 md:w-24 md:h-24 ml-0 md:ml-4 lg:ml-8"
            />
            <span className="text-white text-base md:text-2xl uppercase font-bold">
              Warm<span className="text-[#f47726]">paws</span>
            </span>
          </div>
          <p className="text-white ml-0 md:ml-7 lg:ml-11 p-4 md:p-0">
            We’re here to care for your pets and answer all your questions!
            Whether you’re a new pet parent or want to schedule an appointment.
          </p>
          <div className="ml-0 md:ml-4 lg:ml-11 mt-3 mb-5 relative">
            <input
              type="email"
              name=""
              id=""
              placeholder="Enter your email"
              className="border border-gray-600 w-full rounded-full py-3 pl-4 text-gray-500 text-sm"
            />
            <RiSendPlaneFill className="text-white text-2xl absolute right-4 top-1/4 cursor-pointer hover:text-[#f47726]" />
          </div>
          <div className="flex items-center justify-center md:justify-start gap-3 text-gray-400 text-sm ml-0 md:ml-4 lg:ml-11">
            <IoCall />
            <p>+880 1519610964</p>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-3 text-gray-400 text-sm ml-0 md:ml-4 lg:ml-11">
            <IoMailUnread />
            <p>sayanahmed228@gmail.com</p>
          </div>
        </div>
        {/* service */}
        <div className="text-white mt-2 md:mt-0 md:ml-10 px-8 md:p-0">
          <h3 className="footer-title">Our Service</h3>
          <ul className="ml-4">
            <li className="footer-link">Winter Paw & Skin Protection</li>
            <li className="footer-link">Cold-Weather Health Checkups</li>
            <li className="footer-link">Winter Dental Care for Pets</li>
            <li className="footer-link">Puppy Seasonal Wellness Program</li>
            <li className="footer-link">Essential Winter Surgical Services</li>
            <li className="footer-link">Skin and Ear Cytology</li>
          </ul>
        </div>
        {/* opening hours */}
        <div className="text-white mt-10 md:mt-0 md:mr-10 px-8 md:p-0">
          <h3 className="footer-title">Opening hours</h3>
          <ul class="opening-hours">
            <li>
              <span>Monday</span>
              <span>8:00 - 21:00</span>
            </li>
            <li>
              <span>Tuesday</span>
              <span>8:00 - 21:00</span>
            </li>
            <li>
              <span>Thursday</span>
              <span>8:00 - 21:00</span>
            </li>
            <li>
              <span>Friday</span>
              <span>8:00 - 21:00</span>
            </li>
            <li>
              <span>Saturday</span>
              <span>9:00 - 20:00</span>
            </li>
            <li>
              <span>Sunday</span>
              <span>Emergency Only</span>
            </li>
          </ul>
        </div>
      </div>
      {/* bottom */}
      <div className="border-t border-gray-500 flex flex-col md:flex-row justify-between items-center mx-4 md:mx-10 py-7 gap-4 md:gap-0">
        <div>
          <p className="text-gray-200 text-sm text-center">
            © Copyright 2024. All rights reserved.
            <strong className="text-[#f47726]"> Warmpaws</strong>
          </p>
        </div>
        {/* footer-link bottom */}
        <div>
          <ul className="flex gap-6 pr-0 md:pr-20 text-gray-400 text-sm">
            <li className="footer-link2">Help Center</li>
            <li className="footer-link2">Privacy Policy</li>
            <li className="footer-link2">Terms & Conditions</li>
          </ul>
        </div>
        {/* footer social */}
        <div className="flex gap-4 text-white text-2xl">
          <FaFacebook className="social" />
          <PiInstagramLogoFill className="social" />
          <FaXTwitter className="social" />
          <FaLinkedin className="social" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
