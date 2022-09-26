import React from "react";
import styled from "styled-components";

export default function Services() {
  return (
    <Container>
      <Heading>Services</Heading>
      <HorizontalLine />
      <ServicesContainer>
        <Service>
          <img src="uterus.png" alt="gynaecology" />
        </Service>
        <Service>
          <img src="urology.png" alt="urology" />
        </Service>
        <Service>
          <img src="orthopedics.png" alt="orthopedics" />
        </Service>
      </ServicesContainer>
    </Container>
  );
}

const Container = styled.div`
  background-color: #178066;
  display: flex;
  flex-direction: column;
  padding: 3.5rem 0;
`;

const Heading = styled.div`
  color: #fff;
  font-weight: 800;
  font-size: 3.2rem;
  text-align: center;
  margin-top: 4.5rem;
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

const Service = styled.div`
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  height: 20rem;
  width: 20rem;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    transform: scale(1.15);
    box-shadow: 1rem 1rem rgba(0, 0, 0, 0.2);
  }
`;
