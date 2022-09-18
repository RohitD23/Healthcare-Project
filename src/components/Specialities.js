import React from "react";
import styled from "styled-components";
import { AiOutlineRight } from "react-icons/ai";

export default function Specialities() {
  return (
    <Container>
      <Heading>Our Specialities</Heading>
      <Speciality>
        <SpecialityContent>
          <Img src="Doctor.png" alt="Gynaecology" />
          <SpeacialityHeading>
            Gynaecology <AiOutlineRight />
          </SpeacialityHeading>
          <SpeacialityDetails>
            Treatment of diseases related to female repro...
          </SpeacialityDetails>
        </SpecialityContent>
        <SpecialityContent>
          <Img src="Doctor.png" alt="Urology" />
          <SpeacialityHeading>
            <div>Urology</div>
            <div>
              <AiOutlineRight />
            </div>
          </SpeacialityHeading>
          <SpeacialityDetails>
            Surgical treatment for urogenital issues in m...
          </SpeacialityDetails>
        </SpecialityContent>
        <SpecialityContent>
          <Img src="Doctor.png" alt="Orthology" />
          <SpeacialityHeading>
            Orthology <AiOutlineRight />
          </SpeacialityHeading>
          <SpeacialityDetails>
            Focuses on injuries and diseases of musculoak...
          </SpeacialityDetails>
        </SpecialityContent>
      </Speciality>
    </Container>
  );
}

const Container = styled.div`
  background-color: #00263e;
`;

const Heading = styled.div`
  font-size: 3rem;
  font-weight: 800;
  color: #fff;
  opacity: 1;
  text-align: center;
  padding-top: 8rem;
  margin-bottom: 8rem;
`;

const Speciality = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding-bottom: 8rem;
  margin: 0 15rem;
`;

const SpecialityContent = styled.div`
  background-color: #fff;
  border-radius: 0.5rem;
  cursor: pointer;
`;

const Img = styled.img`
  width: 25rem;
  height: 25rem;
`;

const SpeacialityHeading = styled.div`
  display: flex;
  justify-content: space-between;

  font-size: 1.8rem;
  font-weight: 700;
  letter-spacing: 0;
  color: #505257;

  padding: 1rem 1.5rem;
`;

const SpeacialityDetails = styled.div`
  font-size: 1.4rem;
  letter-spacing: 0;
  color: #727983;
  opacity: 1;
  max-width: 25rem;
  padding: 0 1.5rem;
  margin-bottom: 1rem;
`;
