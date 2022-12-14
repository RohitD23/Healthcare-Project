import React from "react";
import styled from "styled-components";

export default function ServiceInfo({ title, info, imgSrc }) {
  return (
    <Container>
      <Content>
        <Heading>{title}</Heading>
        <p>{info}</p>
      </Content>

      <Img>
        <img src={imgSrc} alt="Icon" />
      </Img>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;

  margin-top: 5rem;
  padding-left: 18rem;

  p {
    width: 80%;
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

const Content = styled.div`
  width: 60%;
`;

const Img = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  height: 25rem;
  width: 25rem;
  box-shadow: 1rem 1rem 2rem rgba(0, 0, 0, 0.2);

  img {
    width: 15rem;
    height: 15rem;
  }
`;
