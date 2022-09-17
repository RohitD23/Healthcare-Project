import React from "react";

import Header from "../components/Header";
import MainSection from "../components/MainSection";
import DoctorsList from "../components/DoctorsList";

export default function Home() {
  return (
    <div>
      <Header />
      <MainSection />
      <DoctorsList/>
    </div>
  );
}
