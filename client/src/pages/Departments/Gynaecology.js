import React from "react";

import Header from "../../components/sections/Header/Header";
import Footer from "../../components/sections/Footer/Footer";

import ServiceInfo from "../../components/sections/Departments/ServiceInfo";
import ObstetricsInfo from "../../components/sections/Departments/Gynaecology/ObstetricsInfo";
import GynaecologyInfo from "../../components/sections/Departments/Gynaecology/GynaecologyInfo";

import { gynaecologyInfo } from "../../models/service.model/ServiceInfo";
import DepartmentDoctor from "../../components/sections/Departments/DepartmentDoctors";

export default function Gynaecology() {
  return (
    <div>
      <Header />
      <img
        src="images/Gynaecology.jpeg"
        alt="Department"
        style={{ width: "100%", height: "60rem" }}
      />
      <ServiceInfo
        title={"Obstetrics & Gynaecology Department"}
        info={gynaecologyInfo}
      />
      <ObstetricsInfo />
      <GynaecologyInfo />
      <DepartmentDoctor serviceSelected={"Obst. & Gynaecology"} />
      <Footer />
    </div>
  );
}
