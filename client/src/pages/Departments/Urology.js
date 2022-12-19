import React from "react";

import Header from "../../components/sections/Header/Header";
import MainSection from "../../components/sections/MainSection";
import Footer from "../../components/sections/Footer/Footer";

import ServiceInfo from "../../components/sections/Departments/ServiceInfo";

import { urologyInfo } from "../../models/ServiceInfo";

export default function Urology() {
  return (
    <div>
      <Header />
      <MainSection title="Best Urology Treatment in Pune" />
      <ServiceInfo
        title={"What is Urology ?"}
        info={urologyInfo}
        imgSrc={"icons/services-icons/urology.png"}
      />
      <Footer />
    </div>
  );
}
