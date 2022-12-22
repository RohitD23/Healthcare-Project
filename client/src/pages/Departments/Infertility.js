import React from "react";

import Header from "../../components/sections/Header/Header";
import Footer from "../../components/sections/Footer/Footer";

import ServiceInfo from "../../components/sections/Departments/ServiceInfo";
import InfertilityInfo from "../../components/sections/Departments/Infertility/InfertilityInfo";

import { infertilityInfo } from "../../models/service.model/ServiceInfo";
import DepartmentDoctor from "../../components/sections/Departments/DepartmentDoctors";

export default function Infertility() {
  return (
    <div>
      <Header />
      <img
        src="images/Infertility.jpg"
        alt="Department"
        style={{ width: "100%", height: "40rem" }}
      />
      <ServiceInfo
        title={"Infertility Department"}
        info={infertilityInfo}
        imgSrc={"icons/services-icons/infertility.png"}
      />
      <InfertilityInfo />
      <DepartmentDoctor serviceSelected={"Infertility Care"} />
      <Footer />
    </div>
  );
}
