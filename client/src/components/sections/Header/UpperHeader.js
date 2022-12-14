import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import PopUp from "../../../utils/PopUp";

export default function UpperHeader() {
  const [trigger, setTrigger] = useState(false);
  const navigate = useNavigate();

  return (
    <Container>
      <LogoName href="/">
        <img src="images/company-logo.png" alt="logo" />
        Mamta Hospital
      </LogoName>

      <div>
        <Button
          color={"#3d7cc9"}
          backgroundColor={"#ffff"}
          onClick={() => navigate("/login", { state: { type: "employee" } })}
        >
          Employee Login
        </Button>

        <Button
          color={"#3d7cc9"}
          backgroundColor={"#ffff"}
          onClick={() => navigate("/login", { state: { type: "patient" } })}
        >
          Patient Login
        </Button>

        <Button
          color={"#fff"}
          backgroundColor={"#3d7cc9"}
          onClick={() => setTrigger(true)}
        >
          Book Free Appointment
        </Button>
        <PopUp trigger={trigger} setTrigger={setTrigger} />
      </div>
    </Container>
  );
}

const Container = styled.div`
  background-color: #3d7cc9;

  justify-content: space-between;
  display: flex;
  align-items: center;

  height: 6.6rem;
  padding: 0 6rem;
`;

const LogoName = styled.a`
  display: flex;
  align-items: center;
  margin-left: 1rem;
  font-size: 2.8rem;
  font-weight: 800;
  text-decoration: none;
  color: #fff;

  img {
    height: 5rem;
    width: 5rem;
    margin-right: 1rem;
  }
`;

const Button = styled.button`
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};

  border: 0.1rem solid ${(props) => props.color};
  border-radius: 2.1rem;

  padding: 1.4rem 2rem 1.2rem;
  margin: 1.5rem;
  line-height: 1.7rem;

  font-weight: 800;
  letter-spacing: 0;

  opacity: 1;
  cursor: pointer;

  transition: 0.5s;

  &:hover {
    background-color: ${(props) => props.color};
    color: ${(props) => props.backgroundColor};
    border-color: ${(props) => props.backgroundColor};
  }
`;
