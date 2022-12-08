import React from "react";

import Header from "../../components/sections/Header/Header";
import MainSection from "../../components/sections/MainSection";
import Footer from "../../components/sections/Footer/Footer";

import ServiceInfo from "../../components/sections/Departments/ServiceInfo";

import { orthopedicsInfo } from "../../models/ServiceInfo";

export default function Orthopedics() {
  return (
    <div>
      <Header />
      <MainSection title="Best Orthopedics Treatment in Pune" />
      <ServiceInfo
        title={"What is Orthopedics ?"}
        info={orthopedicsInfo}
        imgSrc={"icons/services-icons/orthopedics.png"}
      />
      <Footer />
    </div>
  );
}
