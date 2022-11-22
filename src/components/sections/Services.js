import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { servicesData } from "../../models/ServicesData";
import ServiceCard from "./../cards/ServiceCard";

export default function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    setServices(
      servicesData.map((service) => (
        <ServiceCard name={service.name} imgSrc={service.imgSrc} />
      ))
    );
  }, []);

  return (
    <Container>
      <Heading>Services</Heading>
      <HorizontalLine />
      <ServicesContainer>{services}</ServicesContainer>
    </Container>
  );
}

const Container = styled.div`
  background-color: #178066;
  display: flex;
  flex-direction: column;
  padding: 10rem 0;
`;

const Heading = styled.div`
  color: #fff;
  font-weight: 800;
  font-size: 3.2rem;
  text-align: center;
`;

const HorizontalLine = styled.div`
  border-bottom: 0.2rem solid #fff;
  margin: 1rem 60rem;
`;

const ServicesContainer = styled.div`
  display: grid;
  grid-template-columns: 20rem 20rem 20rem;
  grid-template-rows: 30rem;
  gap: 5rem 5rem;
  justify-content: space-evenly;
  align-items: center;
`;
