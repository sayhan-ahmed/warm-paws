import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer/Footer";
import Loader from "../components/Loader/Loader";

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
