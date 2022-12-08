import React from "react";

import Header from "../../components/sections/Header/Header";
import MainSection from "../../components/sections/MainSection";
import Footer from "../../components/sections/Footer/Footer";

import ServiceInfo from "../../components/sections/Departments/ServiceInfo";
import InfertilityInfo from "../../components/sections/Departments/InfertilityInfo";

import { infertilityInfo } from "../../models/ServiceInfo";

export default function Infertility() {
  return (
    <div>
      <Header />
      <MainSection title="Best Infertility Care for Male and Female in Pune" />
      <ServiceInfo
        title={"What is Infertility ?"}
        info={infertilityInfo}
        imgSrc={"icons/services-icons/infertility.png"}
      />
      <InfertilityInfo />
      <Footer />
    </div>
  );
}
