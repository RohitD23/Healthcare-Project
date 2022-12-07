import React from "react";

import Header from "../../components/sections/Header/Header";
import MainSection from "../../components/sections/MainSection";
import Footer from "../../components/sections/Footer/Footer";

import ServiceInfo from "../../components/sections/Departments/ServiceInfo";

export default function Infertility() {
  const info = `Infertility is a disease of the male or female 
                reproductive system defined by the failure to 
                achieve a pregnancy after 12 months or more of 
                regular unprotected sexual intercourse. In the 
                male reproductive system, infertility is most 
                commonly caused by problems in the ejection of semen,
                absence or low levels of sperm, or abnormal shape 
                (morphology) and movement (motility) of the sperm. 
                In the female reproductive system, infertility may 
                be caused by a range of abnormalities of the ovaries, 
                uterus, fallopian tubes, and the endocrine system, among others.
                Infertility can be primary or secondary. Primary infertility 
                is when a pregnancy has never been achieved by a person, and 
                secondary infertility is when at least one prior pregnancy has been achieved.`;

  return (
    <div>
      <Header />
      <MainSection title="Best Infertility Care for Male and Female in Pune" />
      <ServiceInfo
        title={"What is Infertility ?"}
        info={info}
        imgSrc={"icons/services-icons/infertility.png"}
      />
      <Footer />
    </div>
  );
}
