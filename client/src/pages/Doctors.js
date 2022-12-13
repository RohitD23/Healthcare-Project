import React from "react";

import Header from "../components/sections/Header/Header";
import Footer from "../components/sections/Footer/Footer";
import DoctorList from "./../components/sections/DoctorList/DoctorList";

export default function Doctors() {
  return (
    <div>
      <Header />
      <DoctorList />
      <Footer />
    </div>
  );
}
