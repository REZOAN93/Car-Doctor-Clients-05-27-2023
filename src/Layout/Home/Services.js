import React, { useEffect, useState } from "react";
import ServiceItem from "./ServiceItem";

const Services = () => {
  const [service, setServices] = useState([]);

  useEffect(() => {
    fetch("service.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <div className="text-center">
        <p className="text-2xl font-bold text-orange-600 mb-5">Service</p>
        <p className="text-5xl font-bold mb-5">Our Service Area</p>
        <p className="text-xl text-zinc-500">
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which don't look even slightly
          believable.{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 mt-5 md:grid-cols-2 lg:grid-cols-3">
        {service.map((item) => (
          <ServiceItem key={item._id} item={item}></ServiceItem>
        ))}
      </div>
      <div className="text-center mt-8">
      <button className="btn btn-outline btn-secondary">More Services</button>
      </div>
    </div>
  );
};

export default Services;
