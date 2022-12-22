import React from "react";
import styled from "styled-components";

export default function ServiceInfo({ title, info }) {
  return (
    <Container>
      <Heading>{title}</Heading>
      <p>{info}</p>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;

  margin: 10rem 15%;
  padding: 4rem;
  background-color: #fafafa;

  box-shadow: 0 0.4rem 0.8rem 0 rgba(0, 0, 0, 0.2);

  p {
    font-size: 1.6rem;
    line-height: 3rem;
    color: #505257;
  }
`;

const Heading = styled.div`
  font-size: 3.2rem;
  font-weight: 800;
  margin-bottom: 2rem;
  color: #505257;
`;
