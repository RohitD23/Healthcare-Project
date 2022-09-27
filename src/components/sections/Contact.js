import React from "react";
import styled from "styled-components";

import Map from "../map/Map";
import AppointmentForm from "../AppointmentForm";

const location = {
  address: "Mamta Hospital",
  lat: 18.3991001,
  lng: 76.5651902,
};

export default function Contact() {
  return (
    <Container>
      <AppointmentForm width={40} />
      <Block />
      {/* <Map location={location} zoomLevel={17} /> */}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Block = styled.div`
  width: 35%;
  height: 50vh;
  padding: 0;
  margin: 0;
  background-color: #178066;
`;
