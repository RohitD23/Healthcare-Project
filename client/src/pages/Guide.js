import React from "react";

import Header from "../components/sections/Header/Header";
import MainSection from "../components/sections/MainSection";
import Footer from "../components/sections/Footer/Footer";

import GuideInfo from "../components/sections/GuideSection/GuideInfo";
import AddFacilities from "../components/sections/GuideSection/AddFaclities";
import TPA from "../components/sections/GuideSection/TPA";
import Stats from "../components/sections/GuideSection/Stats";

export default function Guide() {
  return (
    <>
      <Header />
      <MainSection title="Simplified guide for our patients" />
      <GuideInfo />
      <AddFacilities />
      <TPA />
      <Stats />
      <Footer />
    </>
  );
}
