import React from "react";
import styled from "styled-components";

import { AiFillStar } from "react-icons/ai";

export default function DoctorCard({ imgSrc, name, rating, field }) {
  let stars = [];

  for (let i = 0; i < rating; i++) {
    stars.push(<AiFillStar style={{ color: "#ff8300", scale: "2.5" }} />);
  }

  return (
    <Container>
      <ProfilePhoto src={imgSrc}></ProfilePhoto>

      <Name>{name}</Name>
      <Field>{field}</Field>

      <RatingContainer>
        {stars}
        <Rating>{rating + "/5"}</Rating>
      </RatingContainer>
    </Container>
  );
}

const Container = styled.div`
  margin: 2rem;

  display: flex;
  flex-direction: column;

  background: #ffffff;
  border-radius: 1rem;
`;

const ProfilePhoto = styled.img`
  height: 30rem;
  width: 28rem;
  border-radius: 1rem 1rem 0 0;
`;

const Name = styled.div`
  font-size: 2rem;
  font-weight: 800;
  text-align: center;
  color: #505257;
`;

const Field = styled.div`
  font-size: 1.2rem;
  color: #505257;
  text-align: center;
`;

const RatingContainer = styled.div`
  padding: 0 0.5rem;
  margin: 1rem 0;
  gap: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Rating = styled.div`
  font-size: 1.4rem;
  color: #505257;
  font-weight: 800;
`;
