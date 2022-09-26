import React from "react";

import Header from "../components/sections/Header";
import MainSection from "../components/sections/MainSection";
import Services from "../components/sections/Services";
import FacilitySection from "../components/sections/FacilitySection";

export default function Home() {
  return (
    <div>
      <Header />
      <MainSection />
      <Services />
      <FacilitySection />
    </div>
  );
}
