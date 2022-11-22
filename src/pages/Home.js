import React from "react";

import Header from "../components/sections/Header";
import MainSection from "../components/sections/MainSection";
import Services from "../components/sections/Services";
import Contact from "../components/sections/Contact";
import AboutUs from "../components/sections/AboutUs";

export default function Home() {
  return (
    <div>
      <Header />
      <MainSection />
      <Services />
      <AboutUs />
      <Contact />
    </div>
  );
}
