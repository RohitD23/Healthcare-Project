import React from "react";

import Header from "../../components/sections/Header/Header";
import MainSection from "../../components/sections/MainSection";
import Footer from "../../components/sections/Footer/Footer";

import ServiceInfo from "../../components/sections/Departments/ServiceInfo";
import Obstetrics from "../../components/sections/Departments/Gynaecology/Obstetrics";
import GynaecologyInfo from "../../components/sections/Departments/Gynaecology/GynaecologyInfo";

import { gynaecologyInfo } from "../../models/ServiceInfo";

export default function Gynaecology() {
  return (
    <div>
      <Header />
      <MainSection title="Best Obstetrician and Gynaecologist in Pune" />
      <ServiceInfo
        title={"What is Gynaecology ?"}
        info={gynaecologyInfo}
        imgSrc={"icons/services-icons/uterus.png"}
      />
      <Obstetrics />
      <GynaecologyInfo />
      <Footer />
    </div>
  );
}
