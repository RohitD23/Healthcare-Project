import React from "react";
import styled from "styled-components";

import Map from "../map/Map";

const location = {
  address: "Mamta Hospital",
  lat: 18.3991001,
  lng: 76.5651902,
};

export default function Contact() {
  return (
    <Container>
      <Heading>Contact Us</Heading>
      <HorizontalLine />
      <ContactContainer>
        <Map location={location} zoomLevel={17} />
      </ContactContainer>
    </Container>
  );
}

const Container = styled.div`
  background-color: #178066;
  margin-top: 10rem;
  padding-top: 5rem;
`;

const Heading = styled.div`
  color: #fff;
  font-size: 3.2rem;
  font-weight: 800;
  text-align: center;
`;

const HorizontalLine = styled.div`
  border-bottom: 0.2rem solid #fff;
  margin: 1rem 60rem;
`;

const ContactContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5rem;
`;
