import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { AiFillStar } from "react-icons/ai";

import Review from "../../components/cards/Review";
import Header from "../../components/sections/Header/Header";

import PopUp from "../../utils/PopUp";
import AppointmentForm from "../../components/forms/AppointmentForm";

import { httpGetDoctorInfo } from "../../utils/request";
import { Reviews } from "../../models/ReviewsData";

const DoctorProfile = () => {
  const { name } = useParams();
  const [doctorInfo, setDoctorsInfo] = useState({});
  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    const getDcotorInfo = async () => {
      const data = await httpGetDoctorInfo(name);
      setDoctorsInfo(data);
      console.log(data);
    };

    getDcotorInfo();
  }, [name]);

  const StarsJSX = [];
  for (let i = 0; i < doctorInfo.rating; i++) {
    StarsJSX.push(
      <AiFillStar
        key={i}
        style={{ color: "#ff8300", scale: "2.5", margin: "0 1rem" }}
      />
    );
  }

  // eslint-disable-next-line eqeqeq
  const reviewsData = Reviews.filter((review) => review.name == name);
  const ReviewsJSX = [];
  for (let i = 0; i < reviewsData.length; i++) {
    ReviewsJSX.push(<Review reviewData={reviewsData[i]}></Review>);
  }

  return (
    <PageContainer>
      <Header />

      <DocContainer>
        <ProfilePhoto src={doctorInfo.imgSrc}></ProfilePhoto>

        <DoctorDetails>
          <DoctorName>{doctorInfo.name}</DoctorName>

          <DoctorField>{doctorInfo.field}</DoctorField>

          <RatingContainer>
            <StarsContainer>{StarsJSX}</StarsContainer>
            <RatingText>{doctorInfo.rating + " / 5"}</RatingText>
          </RatingContainer>

          <BookAppointmentButton onClick={() => setTrigger(true)}>
            Book Appointment
          </BookAppointmentButton>
          <PopUp trigger={trigger} setTrigger={setTrigger}>
            <AppointmentForm name={doctorInfo.name} />
          </PopUp>
        </DoctorDetails>
      </DocContainer>
    </PageContainer>
  );
};

export default DoctorProfile;

const PageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;

  background-color: #ffff;
`;

const DocContainer = styled.div`
  width: 100%;
  height: fit-content;
  padding: 50px 100px;

  display: flex;
  background-color: #3d7cc9;
`;

const ProfilePhoto = styled.img`
  height: 32rem;
  width: 32rem;
  border-radius: 1rem;
`;

const DoctorDetails = styled.div`
  width: fit-content;
  height: 100%;
  margin: 1rem 3rem;

  display: flex;
  flex-direction: column;
`;

const DoctorName = styled.div`
  font-size: 3rem;
  margin: 1rem 0;
`;

const DoctorField = styled.div`
  font-size: 1.5rem;
  margin: 1rem 0;
  color: #f0f0f0;
`;

const RatingContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

const StarsContainer = styled.div`
  width: fit-content;
  height: fit-content;
  min-width: 100px;
  margin: 1rem 0;
  display: inline-flex;
`;

const RatingText = styled.div`
  font-size: 1.5rem;
  margin: 0 1rem;
`;

const BookAppointmentButton = styled.button`
  width: fit-content;
  height: fit-content;
  margin: 1rem 0;
  padding: 1rem 2rem;

  background-color: #3d7cc9;
  border: 1px solid white;
  border-radius: 100px;

  color: #ffff;
  font-size: 1.5rem;
  font-weight: 800;
  cursor: pointer;
  transition: background-color 500ms, color 500ms, scale 150ms;

  &:hover {
    background-color: #ffff;
    color: #3d7cc9;
    transition: background-color 500ms, color 500ms;
  }

  // click animation
  &:active {
    scale: 0.95;
    transition: scale 150ms;
  }
`;
