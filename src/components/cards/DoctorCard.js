import React from "react";
import styled from "styled-components";

export default function DoctorCard({ imgSrc, name }) {
  return (
    <Container>
      <img src={imgSrc} alt={name} />
      <p>{name}</p>
    </Container>
  );
}

const Container = styled.div`
  flex-shrink: 0;
  width: 30rem;
  height: 35rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 25rem;
    height: 30rem;
  }

  p {
    font-size: 1.6rem;
    font-weight: 800;
    color: #505257;
  }
`;
