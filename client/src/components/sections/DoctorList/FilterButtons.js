import React from "react";
import styled from "styled-components";

export default function FilterButtons({ service, setService }) {
  return (
    <Container>
      <Button
        name="all"
        service={service}
        onClick={() => {
          setService("all");
        }}
      >
        All
      </Button>

      <Button
        name="Obst. & Gynaecology"
        service={service}
        onClick={() => {
          setService("Obst. & Gynaecology");
        }}
      >
        Obst. & Gynaecology
      </Button>

      <Button
        name="Orthopedics"
        service={service}
        onClick={() => {
          setService("Orthopedics");
        }}
      >
        Orthopedics
      </Button>
      <Button
        name="Urology"
        service={service}
        onClick={() => {
          setService("Urology");
        }}
      >
        Urology
      </Button>

      <Button
        name="Pathology"
        service={service}
        onClick={() => {
          setService("Pathology");
        }}
      >
        Pathology
      </Button>

      <Button
        name="Radiology"
        service={service}
        onClick={() => {
          setService("Radiology");
        }}
      >
        Radiology
      </Button>

      <Button
        name="Infertility Care"
        service={service}
        onClick={() => {
          setService("Infertility Care");
        }}
      >
        Infertility
      </Button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  gap: 2rem;
  margin: 5rem 0;
`;

const Button = styled.button`
  cursor: pointer;

  padding: 0.5rem 1rem;

  text-transform: uppercase;

  color: ${(props) => {
    if (props.name === props.service) return "#ffffff";
    else return "#505257";
  }};

  background-color: ${(props) => {
    if (props.name === props.service) return "#3d7cc9";
    else return "#ffffff";
  }};

  border: 0.1rem solid #aaaaaa;
  border-radius: 0.5rem;

  transition: 0.5s;
`;
