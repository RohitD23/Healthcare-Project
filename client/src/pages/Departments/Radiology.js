import React from "react";

import Header from "../../components/sections/Header/Header";
import MainSection from "../../components/sections/MainSection";
import Footer from "../../components/sections/Footer/Footer";

import ServiceInfo from "../../components/sections/Departments/ServiceInfo";

import { radiologyInfo } from "../../models/ServiceInfo";

export default function Radiology() {
  return (
    <div>
      <Header />
      <MainSection title="Best Radiology Labs and Specialities in Pune" />
      <ServiceInfo
        title={"What is Radiology ?"}
        info={radiologyInfo}
        imgSrc={"icons/services-icons/mri.png"}
      />
      <Footer />
    </div>
  );
}
