import React from "react";
import styled from "styled-components";

export default function DoctorCard({ name, imgSrc, field }) {
  return (
    <Container>
      <img src={imgSrc} alt={name} />
      <h1>{name}</h1>
      <p>{field}</p>
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
  justify-content: space-around;

  img {
    width: 25rem;
    height: 30rem;
  }

  h1 {
    font-size: 1.8rem;
    font-weight: 800;
    color: #fff;
  }

  p {
    font-size: 1.2rem;
    color: #fff;
  }
`;
