import React from "react";

import Header from "../../components/sections/Header/Header";
import MainSection from "../../components/sections/MainSection";
import Footer from "../../components/sections/Footer/Footer";

import ServiceInfo from "../../components/sections/Departments/ServiceInfo";

export default function Orthopedics() {
  const info = `Orthopedics is the medical field that focuses 
                on the diagnosis and treatment of the human body's 
                musculoskeletal system. An orthopedic doctor treats 
                patients who suffer from diseases and disorders of 
                the joints, bones, muscles and associated structures 
                including the ligaments, tendons, nerves and bones. 
                Orthopedic surgeons diagnose and treat a wide range of 
                problems associated with the bone and skeletal. An orthopedic 
                surgeon can perform minor surgeries like treating a broken 
                toe to major surgeries like performing a knee or hip replacement surgery.`;

  return (
    <div>
      <Header />
      <MainSection title="Best Orthopedics Treatment in Pune" />
      <ServiceInfo
        title={"What is Orthopedics ?"}
        info={info}
        imgSrc={"icons/services-icons/orthopedics.png"}
      />
      <Footer />
    </div>
  );
}
