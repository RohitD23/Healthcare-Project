import React from "react";
import styled from "styled-components";

export default function AboutUs() {
  return (
    <Container id="aboutus">
      <Img src="images/ownerImage.jpg" alt="Owner" />

      <Info>
        <h1>About Us</h1>
        <HorizontalLine />
        <p>
          Mamta hospital was started by Dr. Maya & Dr. Madhukar Kulkarni in
          1976, as a small nursing home to serve the rural population of Latur
          and surrounding areas. Their son, Dr. Vishvas, followed in their
          footsteps and started a well-equipped urology department in the
          hospital. Later Dr. Anuja introduced laparoscopic gynecological
          surgeries and other minimally invasive surgeries. With a firm
          commitment to provide improved healthcare facilities, Mamta hospital
          expanded its infrastructure by amalgamating high levels of skill with
          modern technologies under one roof. The orthopedics department was
          started by Dr. Mahesh after he returned from the UK. The hospital is
          now a multi-specialty institution with a large team of full-time and
          visiting consultants in obstetrics, gynecology, infertility, urology,
          orthopedics, pediatrics, medicine, and oncosurgery.
        </p>
        <p>
          Mamta Hospital is manned by a team of well qualified, skilled and
          experienced doctors. We provide effective medical and surgical
          services with excellence and compassionate care. We have a spacious
          and modern hospital building with well planned architecture. We always
          try to give the best available treatment to our patients by adapting
          to the newest of technologies. We are aware of our social obligations
          and help our needy patients whenever possible.
        </p>
        <h2>Mission</h2>
        <p>
          To provide best possible and appropriate medical services to all with
          empathy.
        </p>
        <h2>Vision</h2>
        <p>
          The hospital will adopt and update the best of available medical
          technologies and will provide the medical services at a reasonable
          cost.The hospital will try to avail specialist consultants in
          different medical specialties, and also will train the hospital
          personnel for better patient care.The hospital will always be involved
          in social causes and will try to build harmony and faith between the
          care providers and patients.
        </p>
      </Info>
    </Container>
  );
}

const Container = styled.div`
  display: flex;

  padding: 10rem 20rem;

  color: #505257;
`;

const Img = styled.img`
  height: 72rem;
  width: 45rem;
`;

const Info = styled.div`
  margin-left: 5rem;

  h1 {
    font-size: 3.2rem;
  }

  h2 {
    font-size: 2rem;
  }

  p {
    width: 90%;
    font-size: 1.5rem;
    font-weight: 400;
    margin-bottom: 2rem;
  }
`;

const HorizontalLine = styled.div`
  border-bottom: 0.2rem solid #505257;
  margin: 1rem 0;
  margin-right: 45rem;
  margin-bottom: 5rem;
`;
