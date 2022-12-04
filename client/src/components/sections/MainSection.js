import React, { useState } from "react";
import styled from "styled-components";
import { FiPhoneCall } from "react-icons/fi";

import PopUp from "../PopUp";
import AppointmentForm from "../AppointmentForm";

export default function MainSection({ title }) {
  const [trigger, setTrigger] = useState(false);

  return (
    <Container>
      <TextContainer>
        <Heading>{title}</Heading>
        <BtnsContainer>
          <CallButton>
            <a href="tel:+919307530213">
              <FiPhoneCall /> Call Us : 02382-243493
            </a>
          </CallButton>
          <AppointmentButton onClick={() => setTrigger(true)}>
            BOOK FREE CONSULTATION
          </AppointmentButton>
          <PopUp trigger={trigger} setTrigger={setTrigger}>
            <AppointmentForm width={100} />
          </PopUp>
        </BtnsContainer>
        <BannerHeading>
          Book Free Appointments With Our Expert Doctors
        </BannerHeading>
        <BannerItem>
          <Img src="icons/main-section/free.png" alt="Free Icon" />
          Get free consultation for 50+ diseases
        </BannerItem>
        <BannerItem>
          <Img src="icons/main-section/doctor.png" alt="Doctor Icon" />
          In-person and online consultation with experienced doctors
        </BannerItem>
        <BannerItem>
          <Img src="icons/main-section/healthcare.png" alt="Care Icon" />
          Extensive medical assistance throughout your treatment
        </BannerItem>
      </TextContainer>
    </Container>
  );
}

const Container = styled.div`
  padding: 6.4rem 0;
  background-image: url("images/banner.png");
  background-size: 100%;
  height: 65rem;
`;

const TextContainer = styled.div`
  margin-left: 12%;
`;

const Heading = styled.div`
  color: #505257;
  font-size: 5.2rem;
  line-height: 5.6rem;
  font-weight: 800;
  max-width: 60rem;
  padding-top: 5.2rem;
`;

const BtnsContainer = styled.div`
  display: flex;
  gap: 2rem;
  margin: 5rem 0;
`;

const CallButton = styled.button`
  padding: 1.5rem 6rem;
  gap: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 5rem;
  border: none;
  cursor: pointer;

  background-color: #3d7cc9;

  transition: 0.5s;

  a {
    color: #fff;
    font-weight: 800;
    font-size: 1.4rem;
    text-decoration: none;
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: 0.25rem 0.25rem rgba(0, 0, 0, 0.3);
  }
`;

const AppointmentButton = styled.button`
  padding: 1.5rem 6rem;
  gap: 0.5rem;

  font-size: 1.4rem;
  font-weight: 800;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 5rem;
  border: 0.1rem solid #3d7cc9;
  cursor: pointer;

  color: #3d7cc9;
  background-color: #fcfaf7;

  transition: 0.5s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0.25rem 0.25rem rgba(0, 0, 0, 0.3);
  }
`;

const BannerHeading = styled.div`
  color: #505257;
  font-size: 2.4rem;
  font-weight: 800;
  padding-bottom: 2.5rem;
  line-height: 3rem;
  max-width: 60rem;
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
