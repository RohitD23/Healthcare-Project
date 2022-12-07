import React from "react";

import Header from "../../components/sections/Header/Header";
import MainSection from "../../components/sections/MainSection";
import Footer from "../../components/sections/Footer/Footer";

import ServiceInfo from "../../components/sections/Departments/ServiceInfo";

export default function Radiology() {
  const info = `Radiology, also called diagnostic imaging, 
                is a series of different tests that take pictures 
                or images of various parts of the body.  Many of 
                these tests are unique in that they allow doctors 
                to see inside the body.  A number of different imaging 
                exams can be used to provide this view, including X-ray,
                MRI, ultrasound, CT scan and PET scan. Radiologists 
                interpret a broad spectrum of diagnostic tests 
                including x-rays, ultrasound, bone mineral densitometry, 
                fluoroscopy, mammography, nuclear medicine, CT and MRI.
                Radiology is essential to the diagnosis of many diseases, 
                particularly cancer. Early diagnosis saves lives. 
                Without diagnosis there can be no treatment, there can be no cure.`;

  return (
    <div>
      <Header />
      <MainSection title="Best Radiology Labs and Specialities in Pune" />
      <ServiceInfo
        title={"What is Radiology ?"}
        info={info}
        imgSrc={"icons/services-icons/mri.png"}
      />
      <Footer />
    </div>
  );
}
