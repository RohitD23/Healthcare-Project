import React from "react";

import Header from "../../components/sections/Header/Header";
import MainSection from "../../components/sections/MainSection";
import Footer from "../../components/sections/Footer/Footer";

import ServiceInfo from "../../components/sections/Departments/ServiceInfo";

export default function Urology() {
  const info = `Urology is a medical specialty that focuses 
                on the diagnosis and treatment of diseases 
                and disorders of the male and female urinary 
                system, along with medical conditions of the male 
                reproductive system. Some common urological disorders 
                are urinary tract infections (UTIs), urinary incontinence, etc.
                You should visit a urologist if you have any pain, 
                discomfort, or difficulty while urinating, as that may be a 
                sign of dysfunction of the bladder, kidneys, ureters, or urethra. 
                If you are experiencing any of these issues, you should consult 
                an expert urologist near you.`;

  return (
    <div>
      <Header />
      <MainSection title="Best Urology Treatment in Pune" />
      <ServiceInfo
        title={"What is Urology ?"}
        info={info}
        imgSrc={"icons/services-icons/urology.png"}
      />
      <Footer />
    </div>
  );
}
