import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";

export default function DoctorCard({ imgSrc, name, rating, field }) {
  const navigate = useNavigate();

  let stars = [];

  for (let i = 0; i < rating; i++) {
    stars.push(
      <AiFillStar key={i} style={{ color: "#ff8300", scale: "2.5" }} />
    );
  }

  const onClickCard = () => {
    const linkName = name.replace(/\s/g, "");
    console.log(linkName);
    navigate(`/profile/${linkName}`);
  };

  return (
    <Container onClick={onClickCard}>
      <ProfilePhoto src={imgSrc}></ProfilePhoto>

      <Name>Dr. {name}</Name>
      <Field>{field}</Field>

      <RatingContainer>
        {stars}
        <Rating>{rating + "/5"}</Rating>
        <BookAppointmentButton>Book Appointment</BookAppointmentButton>
      </RatingContainer>
    </Container>
  );
}

const Container = styled.div`
  margin: 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  background-color: #e6e6e6;
  border-radius: 1rem;
`;

const ProfilePhoto = styled.img`
  height: 30rem;
  width: 30rem;
  border-radius: 1rem 1rem 0 0;
`;

const Name = styled.div`
  font-size: 2rem;
  font-weight: 800;
  color: #505257;
`;

const Field = styled.div`
  font-size: 1.2rem;
  color: #505257;
`;

const RatingContainer = styled.div`
  padding: 0 0.5rem;
  margin: 1rem 0 1rem 0.5rem;
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

const BookAppointmentButton = styled.button`
  padding: 0.5rem 1rem;

  font-size: 1.2rem;
  font-weight: bold;

  color: #ffffff;
  background-color: #3d7cc9;

  border: none;
  border-radius: 5rem;
  cursor: pointer;
`;
