import React from "react";
import styled from "styled-components";

export default function ServiceCard({ name, imgSrc }) {
  return (
    <Card>
      <img src={imgSrc} alt={name} />
      <p>{name}</p>
    </Card>
  );
}

const Card = styled.li`
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
