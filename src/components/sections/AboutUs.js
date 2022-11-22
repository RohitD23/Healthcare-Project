import React from "react";
import styled from "styled-components";

export default function AboutUs() {
  return (
    <Container>
      <Img src="images/ownerImage.jpg" alt="Owner" />
      <Info>
        <h1>About Us</h1>
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
  height: 55rem;
  width: 40rem;
`;

const Info = styled.div`
  margin-left: 5rem;

  h1 {
    font-size: 3.2rem;
    margin-bottom: 5rem;
  }

  p {
    width: 90%;
    font-size: 1.8rem;
    font-weight: 400;
  }
`;
