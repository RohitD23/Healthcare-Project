import React from "react";

import Header from "../components/Header";
import MainSection from "../components/MainSection";
import DoctorsList from "../components/DoctorsList";
import FacilitySection from "../components/FacilitySection";
import Specialities from "../components/Specialities";

export default function Home() {
  return (
    <div>
      <Header />
      <MainSection />
      <DoctorsList />
      <FacilitySection />
      <Specialities />
    </div>
  );
}
