import React from "react";

import Header from "../../components/sections/Header/Header";
import MainSection from "../../components/sections/MainSection";
import Footer from "../../components/sections/Footer/Footer";

import ServiceInfo from "../../components/sections/Departments/ServiceInfo";

import { pathologyInfo } from "../../models/ServiceInfo";

export default function Pathology() {
  return (
    <div>
      <Header />
      <MainSection title="Best Radiology Labs and Specialities in Pune" />
      <ServiceInfo
        title={"What is Pathology ?"}
        info={pathologyInfo}
        imgSrc={"icons/services-icons/urology.png"}
      />
      <Footer />
    </div>
  );
}
