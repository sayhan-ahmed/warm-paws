import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header>
        <Navbar></Navbar>
      </header>
      <main className="flex-1 relative">
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default AuthLayout;
