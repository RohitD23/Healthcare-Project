import React from "react";
import styled from "styled-components";

import Departments from "./Departments";
import Schedule from "./Schedule";

export default function Footer() {
  return (
    <Container>
      <Logo href="/">
        <img src="images/company-logo.png" alt="logo" />
        <Heading>Mamta Hospital</Heading>
      </Logo>

      <Departments Heading={Heading} />

      <Schedule Heading={Heading} />
    </Container>
  );
}

const Container = styled.div`
  background-color: #3d7cc9;
  margin-top: 5rem;
  padding-bottom: 8rem;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const Logo = styled.a`
  display: flex;
  align-items: center;

  height: 10vh;
  margin-top: 6rem;

  text-decoration: none;

  img {
    width: 7rem;
    height: 7rem;
  }
`;

const Heading = styled.div`
  font-size: 2.6rem;
  font-weight: 800;
  color: #fff;
`;
