import React from "react";
import styled from "styled-components";

import { AiFillStar } from "react-icons/ai";
import { IoLocationSharp } from "react-icons/io5";

export default function DoctorCard({ doctorInfo }) {
  return (
    <Container>
      <HeaderContainer>
        <ProfilePhoto src="https://t3.ftcdn.net/jpg/02/33/46/24/360_F_233462402_Fx1yke4ng4GA8TJikJZoiATrkncvW6Ib.jpg"></ProfilePhoto>

        <DoctorInfoContainer>
          <Name>{doctorInfo.name}</Name>
          <Education>{doctorInfo.education}</Education>
          <Experience>
            {doctorInfo.experience + " years of experience overall"}
          </Experience>

          <RatingContainer>
            <AiFillStar style={{ color: "#ff8300", scale: "2.5" }} />
            <Rating>{doctorInfo.rating + "/5"}</Rating>
          </RatingContainer>
        </DoctorInfoContainer>
      </HeaderContainer>

      <DividerLine />

      <AppointmentInfoContainer>
        <InfoContainer id="location-info">
          <IoLocationSharp
            style={{ color: "ff8300", scale: "2.5" }}
          ></IoLocationSharp>
          <InfoText style={{ padding: "0 1rem" }}>
            {doctorInfo.location}
          </InfoText>
        </InfoContainer>

        <InfoContainer id="consultaion-fees-info">
          <InfoText>Consultation Fees : </InfoText>
          <InfoTextBold>{doctorInfo.fees}</InfoTextBold>
        </InfoContainer>

        <InfoContainer id="availibility-info">
          <InfoText>Recent Availibility : </InfoText>
          <InfoTextBold>{"Available " + doctorInfo.availability}</InfoTextBold>
        </InfoContainer>

        <ButtonGroup>
          <ContactClinicButton>Contact Clinic</ContactClinicButton>
          <BookAppointmentButton>Book Appointment</BookAppointmentButton>
        </ButtonGroup>
      </AppointmentInfoContainer>
    </Container>
  );
}

const Container = styled.div`
  height: 80%;
  min-height: 40rem;
  width: 40rem;

  margin: 2rem;
  padding: 1rem;

  display: flex;
  flex-direction: column;

  background: white;
  border-radius: 1rem;
`;

const HeaderContainer = styled.div`
  height: 50%;

  padding: 1rem 0rem;
  display: flex;
`;

const ProfilePhoto = styled.img`
  height: 15rem;
`;

const DoctorInfoContainer = styled.div`
  padding: 0 2rem 0 0;
`;

const Name = styled.div`
  margin: 1rem 0;
  font-size: 2rem;
  font-weight: 500;
`;

const Education = styled.div`
  margin: 1rem 0;
  font-size: 1.2rem;
  font-weight: bold;
`;

const Experience = styled.div`
  margin: 1rem 0;
  font-size: 1.7rem;
  font-weight: normal;
`;

const RatingContainer = styled.div`
  margin: 1rem 0;
  padding: 0 0.5rem;

  display: flex;
  align-items: center;
`;

const Rating = styled.div`
  margin: 0 1rem;
  font-size: 1.7rem;
  font-weight: normal;
`;

const DividerLine = styled.div`
  width: 100%;
  height: 0.2rem;
  background: #c9c9c9;
`;

const AppointmentInfoContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding: 1rem;
`;

const InfoContainer = styled.div`
  display: flex;
  align-items: center;

  margin: 1rem 0;
`;

const InfoText = styled.div`
  font-size: 1.7rem;
`;

const InfoTextBold = styled.div`
  font-size: 1.7rem;
  font-weight: bold;
`;

const ButtonGroup = styled.div`
  width: 100%;
  height: fit-content;

  margin: 1rem 0;

  display: flex;
`;

const ContactClinicButton = styled.button`
  width: fit-content;
  min-width: 45%;
  height: 3rem;

  margin: 0 2.5%;

  font-size: 1.5rem;
  font-weight: bold;

  color: #3d7cc9;
  border: 1px solid #3d7cc9;
  border-radius: 2rem;
  cursor: pointer;
`;

const BookAppointmentButton = styled.button`
  width: fit-content;
  min-width: 45%;
  height: 3rem;

  margin: 0 2.5%;
  padding: 0 1rem;

  font-size: 1.5rem;
  font-weight: bold;

  color: white;
  background-color: #ff8300;

  border: none;
  border-radius: 5rem;
  cursor: pointer;
`;
