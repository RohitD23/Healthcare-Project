import React from "react";

import Header from "../../components/sections/Header/Header";
import MainSection from "../../components/sections/MainSection";
import Footer from "../../components/sections/Footer/Footer";

import ServiceInfo from "../../components/sections/Departments/ServiceInfo";

export default function Pathology() {
  const info = `Pathology is the medical discipline that 
                provides diagnostic information to patients 
                and clinicians. It impacts nearly all aspects 
                of patient care, from diagnosing cancer to managing 
                chronic diseases through accurate laboratory testing. 
                Although pathologists are fundamental to patient care, 
                medical students are often unaware of the pathologist's 
                role and pathology as a career. Our video and supplemental 
                interview with pathology educator Dr. Husain Sattar bring 
                to light about what pathology is and the role of pathologists.`;

  return (
    <div>
      <Header />
      <MainSection title="Best Radiology Labs and Specialities in Pune" />
      <ServiceInfo
        title={"What is Pathology ?"}
        info={info}
        imgSrc={"icons/services-icons/urology.png"}
      />
      <Footer />
    </div>
  );
}
