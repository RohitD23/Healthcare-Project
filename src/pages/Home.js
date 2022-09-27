import React from "react";

import Header from "../components/sections/Header";
import MainSection from "../components/sections/MainSection";
import Services from "../components/sections/Services";
import FacilitySection from "../components/sections/FacilitySection";
import Contact from "../components/sections/Contact";

export default function Home() {
  return (
    <div>
      <Header />
      <MainSection />
      <Services />
      <FacilitySection />
      <Contact />
    </div>
  );
}
