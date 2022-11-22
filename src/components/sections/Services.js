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
          <p>Gynaecology</p>
        </Service>
        <Service>
          <img src="urology.png" alt="urology" />
          <p>Urology</p>
        </Service>
        <Service>
          <img src="orthopedics.png" alt="orthopedics" />
          <p>Orthopedics</p>
        </Service>
        <Service>
          <img src="infertility.png" alt="infertility" />
          <p>Infertility Care</p>
        </Service>
        <Service>
          <img src="microscope.png" alt="pathology" />
          <p>Pathology</p>
        </Service>
        <Service>
          <img src="mri.png" alt="radiology" />
          <p>Radiology</p>
        </Service>
      </ServicesContainer>
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

const Service = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
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

  p {
    font-size: 1.4rem;
    line-height: 2;
    font-weight: 800;
    color: #505257;
  }
`;
