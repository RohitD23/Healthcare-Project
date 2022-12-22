import React from "react";

import Header from "../../components/sections/Header/Header";
import Footer from "../../components/sections/Footer/Footer";

import ServiceInfo from "../../components/sections/Departments/ServiceInfo";
import UrologyInfo from "../../components/sections/Departments/Urology/UrologyInfo";

import { urologyInfo } from "../../models/service.model/ServiceInfo";
import DepartmentDoctor from "../../components/sections/Departments/DepartmentDoctors";

export default function Urology() {
  return (
    <div>
      <Header />
      <img
        src="images/Urology.jpeg"
        alt="Department"
        style={{ width: "100%", height: "60rem" }}
      />
      <ServiceInfo title={"Urology Department"} info={urologyInfo} />
      <UrologyInfo />
      <DepartmentDoctor serviceSelected={"Urology"} />
      <Footer />
    </div>
  );
}
