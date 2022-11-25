import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

import { BsArrowLeftCircleFill as LArrow } from "react-icons/bs";
import { BsArrowRightCircleFill as RArrow } from "react-icons/bs";

import { Doctors } from "../../models/Doctors";
import DoctorCard from "../cards/DoctorCard";

export default function MeetDoctors() {
  const [doctors, setDoctors] = useState([]);
  const [pos, setPos] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    setDoctors(
      Doctors.map((doctor) => (
        <DoctorCard
          key={doctor.name}
          imgSrc={doctor.img}
          name={doctor.name}
          field={doctor.field.toString()}
        />
      ))
    );
  }, []);

  const slide = (shift) => {
    ref.current.scrollLeft += shift;
    setPos(pos + shift);
  };

  return (
    <>
      <Heading>Meet Our Specialists</Heading>
      <HorizontalLine />
      <Container>
        <Button onClick={() => slide(-315)}>
          <LArrow className="arrow" />
        </Button>

        <DocContainer ref={ref}>{doctors}</DocContainer>
        <Button onClick={() => slide(315)}>
          <RArrow className="arrow" />
        </Button>
      </Container>
    </>
  );
}

const Heading = styled.div`
  text-align: center;
  font-weight: 800;
  font-size: 3.2rem;
  color: #505257;
`;

const HorizontalLine = styled.div`
  border-bottom: 0.2rem solid #505257;
  margin: 1rem 50rem;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5rem;
`;

const DocContainer = styled.div`
  display: flex;
  overflow-x: scroll;
  scroll-behavior: smooth;
  width: 60%;
  margin: 0 1rem;

  scrollbar-width: none;

  &::-webkit-scrollbar {
    width: 0px;
  }
`;

const Button = styled.button`
  width: 5rem;
  height: 5rem;

  margin: 0 1rem;

  border: none;
  border-radius: 50%;

  .arrow {
    width: 5rem;
    height: 5rem;
    color: #178066;
  }

  &:hover {
    cursor: pointer;
  }
`;
