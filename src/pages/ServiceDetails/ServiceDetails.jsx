import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import ServiceDetailsCard from "../../components/ServiceDetailsCard/ServiceDetailsCard";
import { useLoaderData, useParams } from "react-router";

const ServiceDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const [service, setService] = useState({});
  //   console.log(data, id, service);

  useEffect(() => {
    const serviceDetails = data.find(
      (singleService) => singleService.serviceId == id
    );
    setService(serviceDetails);
  }, [data, id]);

  return (
    <div>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <ServiceDetailsCard service={service}></ServiceDetailsCard>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default ServiceDetails;
