import React from "react";
import styled from "styled-components";

export default function FacilitySection() {
  return (
    <Container>
      <Heading>Why Pristyn Care?</Heading>
      <Facilties>
        <Facility>
          <Img src="protection.png" alt="covid icon" />
          <FacilityContent>
            <FaciltyHeading>Pristyn Care is COVID-19 safe</FaciltyHeading>
            <FacilityDetails>
              Your safety is taken care of by thermal screening, social
              distancing, sanitized clinics and hospital rooms, sterilized
              surgical equipment and mandatory PPE kits during surgery.
            </FacilityDetails>
          </FacilityContent>
        </Facility>
        <Facility>
          <Img src="nurse.png" alt="nurse icon" />
          <FacilityContent>
            <FaciltyHeading>Assisted Surgery Experience</FaciltyHeading>
            <FacilityDetails>
              A dedicated Medical Coordinator assists you throughout the surgery
              journey from insurance paperwork, to free commute from home to
              hospital & back and admission-discharge process at the hospital.
            </FacilityDetails>
          </FacilityContent>
        </Facility>
        <Facility>
          <Img src="pulse.png" alt="monitor icon" />
          <FacilityContent>
            <FaciltyHeading>Medical Expertise With Technology</FaciltyHeading>
            <FacilityDetails>
              Our surgeons spend a lot of time with you to diagnose your
              condition. You are assisted in all pre-surgery medical
              diagnostics. We offer advanced laser and laparoscopic surgical
              treatment. Our procedures are USFDA approved.
            </FacilityDetails>
          </FacilityContent>
        </Facility>
        <Facility>
          <Img src="care.png" alt="care icon" />
          <FacilityContent>
            <FaciltyHeading>Post Surgery Care</FaciltyHeading>
            <FacilityDetails>
              We offer free follow-up consultations and instructions including
              dietary tips as well as exercises to every patient to ensure they
              have a smooth recovery to their daily routines.
            </FacilityDetails>
          </FacilityContent>
        </Facility>
      </Facilties>
    </Container>
  );
}

const Container = styled.div``;

const Heading = styled.div`
  font-size: 3.5rem;
  font-weight: 800;
  color: #505257;
  opacity: 1;
  text-align: center;
  margin: 4.5rem 0;
`;

const Facilties = styled.div`
  display: grid;
  grid-template-columns: 60rem 60rem;
  grid-template-rows: 10rem 20rem;
  gap: 10rem 10rem;
  justify-content: center;
`;

const Facility = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 2rem;
`;

const Img = styled.img`
  height: 6rem;
  width: 6rem;
  margin: 1rem 3rem;
`;

const FacilityContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const FaciltyHeading = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: #505257;
  opacity: 1;
`;

const FacilityDetails = styled.div`
  color: #767c86;
  font-weight: 300;
  font-size: 1.6rem;
  max-width: 50rem;
  margin: 1.5rem 0;
`;
