import React from "react";

import Header from "../../components/sections/Header/Header";
import Footer from "../../components/sections/Footer/Footer";

import ServiceInfo from "../../components/sections/Departments/ServiceInfo";

import { radiologyInfo } from "../../models/service.model/ServiceInfo";
import DepartmentDoctor from "./../../components/sections/Departments/DepartmentDoctors";

export default function Radiology() {
  return (
    <div>
      <Header />
      <img
        src="images/Radiology.jpg"
        alt="Department"
        style={{ width: "100%", height: "60rem" }}
      />
      <ServiceInfo title={"Radiology Department"} info={radiologyInfo} />
      <DepartmentDoctor serviceSelected={"Radiology"} />
      <Footer />
    </div>
  );
}
