import React from "react";

import Header from "../../components/sections/Header/Header";
import Footer from "../../components/sections/Footer/Footer";

import ServiceInfo from "../../components/sections/Departments/ServiceInfo";

import { pathologyInfo } from "../../models/service.model/ServiceInfo";
import DepartmentDoctor from "./../../components/sections/Departments/DepartmentDoctors";

export default function Pathology() {
  return (
    <div>
      <Header />
      <img
        src="images/Pathology.jpg"
        alt="Department"
        style={{ width: "100%", height: "50rem" }}
      />
      <ServiceInfo title={"Pathology Department"} info={pathologyInfo} />
      <DepartmentDoctor serviceSelected={"Pathology"} />
      <Footer />
    </div>
  );
}
