import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { servicesData } from "../../models/service.model/ServicesData";
import { httpCheckUserLoggedIn } from "../../utils/request";

export default function ChooseService() {
  const [services, setServices] = useState([]);
  const [ser, setSer] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    async function checkUserLoggedIn() {
      const response = await httpCheckUserLoggedIn();
      console.log(response);
      if (!response.ok) navigate("/login", { state: { type: "patient" } });
    }

    checkUserLoggedIn();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setServices(
      servicesData.map((service) => (
        <ServiceCard
          key={service.name}
          id={service.name}
          service={ser}
          onClick={() => {
            setSer(service.name);
          }}
        >
          <img src={service.imgSrc} alt={service.name} />
          <p>{service.name}</p>
        </ServiceCard>
      ))
    );
  }, [ser]);

  const checkDisabled = () => {
    return ser === "";
  };

  return (
    <Container>
      <ServicesContainer>{services}</ServicesContainer>
      <Button disabled={checkDisabled()}>CONTINUE</Button>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  background-color: #e6e6e6;
  border-radius: 0 0 1rem 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ServicesContainer = styled.div`
  display: grid;
  grid-template-columns: 10rem 10rem 10rem;
  grid-template-rows: 15rem;
  gap: 5rem 5rem;

  justify-content: center;
  align-items: center;
`;

const ServiceCard = styled.div`
  background-color: #ffff;

  height: 11rem;
  width: 11rem;

  cursor: pointer;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border: solid;
  border-color: ${(props) => {
    return props.id === props.service ? "#3d7cc9" : "white";
  }};
  border-radius: 0.5rem;

  img {
    width: 5rem;
    height: 5rem;
  }

  p {
    font-size: 1.4rem;
    line-height: 2;
    font-weight: 800;
    color: #505257;
  }
`;

const Button = styled.button`
  margin: 2.5rem 0;
  padding: 1rem;

  font-size: 1.8rem;

  border: none;
  border-radius: 1rem;

  color: #ffff;
  background-color: #3d7cc9;

  cursor: pointer;

  &:disabled {
    background-color: grey;
  }
`;
