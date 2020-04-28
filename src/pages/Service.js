import React from "react";
import Navigation from "../components/common/Navigation";
import ServiceContainer from "../containers/ServiceContainer";


const Service = () => {
  return (
    <div>
      <Navigation />
      <h2>서비스</h2>
      <ServiceContainer/>
    </div>
  );
};

export default Service;
