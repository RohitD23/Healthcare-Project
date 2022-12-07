import React from "react";

import Header from "../../components/sections/Header/Header";
import MainSection from "../../components/sections/MainSection";
import Footer from "../../components/sections/Footer/Footer";

import ServiceInfo from "../../components/sections/Departments/ServiceInfo";

export default function Gynaecology() {
  const info = `Gynecology, in the simplest sense, 
                is the science of women.It is the branch 
                of medical sciences that specializes in 
                the study of female reproductive organs, 
                such as breasts, uterus, fallopian tubes, 
                ovaries, and vagina. The doctors specializing 
                in this branch are called gynecologists and are 
                experts in treating various gynecological conditions 
                such as irregular periods, vaginal/ urinary infections, 
                pregnancy, abortion, ovarian cysts, uterine health 
                conditions, and pelvic organ prolapse.`;

  return (
    <div>
      <Header />
      <MainSection title="Best Obstetrician and Gynaecologist in Pune" />
      <ServiceInfo
        title={"What is Gynaecology ?"}
        info={info}
        imgSrc={"icons/services-icons/uterus.png"}
      />
      <Footer />
    </div>
  );
}
