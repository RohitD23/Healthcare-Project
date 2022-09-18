import React from "react";
import styled from "styled-components";
import { FiPhoneCall } from "react-icons/fi";

export default function MainSection() {
  return (
    <Container>
      <TextContainer>
        <Heading>Simplifying Surgery Experience in Pune</Heading>
        <StatsContainer>
          <LeftStats>
            <StatsNumber>400+</StatsNumber>
            <StatsDetails>DOCTORS</StatsDetails>
          </LeftStats>
          <MiddleStats>
            <StatsNumber>50+</StatsNumber>
            <StatsDetails>DISEASE</StatsDetails>
          </MiddleStats>
          <RightStats>
            <StatsNumber>45+</StatsNumber>
            <StatsDetails>CITIES</StatsDetails>
          </RightStats>
        </StatsContainer>
        <BtnsContainer>
          <CallButton>
            <FiPhoneCall /> Call Us : XXXX-XXX-XXX
          </CallButton>
          <AppointmentButton>BOOK FREE CONSULTATION</AppointmentButton>
        </BtnsContainer>
        <BannerHeading>
          Book Free Appointments With Our Expert Doctors Near You
        </BannerHeading>
        <BannerItem>
          <Img src="free.png" alt="Free Icon" />
          Get free consultation for 50+ diseases across India
        </BannerItem>
        <BannerItem>
          <Img src="doctor.png" alt="Doctor Icon" />
          In-person and online consultation with experienced doctors
        </BannerItem>
        <BannerItem>
          <Img src="healthcare.png" alt="Care Icon" />
          Extensive medical assistance throughout your treatment
        </BannerItem>
      </TextContainer>
    </Container>
  );
}

const Container = styled.div`
  background-color: #fcfaf7;
`;

const TextContainer = styled.div`
  margin-left: 12%;
`;

const Heading = styled.h1`
  color: #3d7cc9;
  font-size: 5.2rem;
  line-height: 5.6rem;
  font-weight: 800;
  max-width: 60rem;
  padding: 5.2rem 0 1.6rem 0;
`;

const StatsContainer = styled.div`
  display: flex;
  align-items: center;
  height: 7.3rem;
`;

const StatsNumber = styled.div`
  color: #505257;
  font-size: 3.5rem;
  font-weight: 800;
  text-align: left;
`;

const StatsDetails = styled.div`
  color: #7b7674;
  font-size: 1.5rem;
  text-align: left;
`;

const LeftStats = styled.div`
  padding-right: 3.2rem;
  border-right: 0.1rem solid rgba(123, 118, 116, 0.5);
`;
const MiddleStats = styled.div`
  padding: 0 3.2rem;
  border-right: 0.1rem solid rgba(123, 118, 116, 0.5);
`;

const RightStats = styled.div`
  padding-left: 3.2rem;
`;

const BtnsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin: 3rem 0;
`;

const CallButton = styled.button`
  padding: 1.5rem 5rem;
  gap: 0.5rem;

  font-size: 1.6rem;
  font-weight: 800;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 5rem;
  border: none;
  cursor: pointer;

  background-color: #ff8300;

  color: #fff;
`;

const AppointmentButton = styled.button`
  padding: 1.5rem 5rem;
  gap: 0.5rem;

  font-size: 1.6rem;
  font-weight: 800;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 5rem;
  border: 1px solid #3d7cc9;
  cursor: pointer;

  color: #3d7cc9;
  background-color: #fcfaf7;
`;

const BannerHeading = styled.div`
  color: #505257;
  font-size: 2.2rem;
  font-weight: 800;
  padding-bottom: 2.5rem;
  line-height: 3rem;
  max-width: 55rem;
`;

const BannerItem = styled.div`
  padding: 0.2rem 0 2rem;
  color: #727983;
  font-size: 1.6rem;
  display: flex;
  align-items: center;
`;

const Img = styled.img`
  widht: 2.5rem;
  height: 2.5rem;
  margin-right: 1rem;
`;
