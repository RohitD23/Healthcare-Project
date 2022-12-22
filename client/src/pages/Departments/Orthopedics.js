import React from "react";

import Header from "../../components/sections/Header/Header";
import Footer from "../../components/sections/Footer/Footer";

import ServiceInfo from "../../components/sections/Departments/ServiceInfo";

import { orthopedicsInfo } from "../../models/service.model/ServiceInfo";
import DepartmentDoctor from "./../../components/sections/Departments/DepartmentDoctors";

export default function Orthopedics() {
  return (
    <div>
      <Header />
      <img
        src="images/Orthopedics.png"
        alt="Department"
        style={{ width: "100%", height: "40rem" }}
      />
      <ServiceInfo title={"Orthopedics Department"} info={orthopedicsInfo} />
      <DepartmentDoctor serviceSelected={"Orthopedics"} />
      <Footer />
    </div>
  );
}
