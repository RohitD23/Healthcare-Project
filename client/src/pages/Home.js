import React from "react";

import Header from "../components/sections/Header/Header";
import ImageShow from "../components/sections/ImageShow";
import Footer from "../components/sections/Footer/Footer";

import Services from "../components/sections/HomeSection/Services";
import AboutUs from "../components/sections/HomeSection/AboutUs";
import MeetDoctors from "../components/sections/HomeSection/MeetDoctors";
import Contact from "../components/sections/HomeSection/Contact";

export default function Home() {
  return (
    <div>
      <Header />
      <ImageShow />
      <Services />
      <AboutUs />
      <MeetDoctors serviceSelected={"all"} />
      <Contact />
      <Footer />
    </div>
  );
}
