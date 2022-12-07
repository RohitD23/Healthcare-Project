import React from "react";
import styled from "styled-components";

export default function Departments({ Heading }) {
  return (
    <Container>
      <Heading>Departments</Heading>
      <Content>
        <a href="/urology">Urology</a>
        <a href="/gynaecology">Obst. & Gynaecology</a>
        <a href="/orthopedics">Orthopedics</a>
        <a href="/pathology">Pathology</a>
        <a href="/radiology">Radiology</a>
        <a href="/infertility">Infertility and IVF</a>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 8rem;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;

  padding-left: 2rem;
  padding-top: 2rem;

  a {
    text-decoration: none;
    font-size: 1.6rem;
    color: #fff;
    padding: 1.5rem 1rem;
  }
`;
