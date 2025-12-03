import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import { Outlet, useLocation } from "react-router";
import Footer from "../components/Footer/Footer";
import Loader from "../components/Loader/Loader";

const Root = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timeout);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      {loading && <Loader />}
      <header>
        <Navbar></Navbar>
      </header>
      <main className="pt-16">
        <Outlet></Outlet>{" "}
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Root;
