import React from "react";
import styled from "styled-components";
import { BsCheckCircle } from "react-icons/bs";

export default function Schedule({ Heading }) {
  return (
    <Container>
      <Heading>We're Available On:</Heading>

      <SchContainer>
        <Time>
          <Day>Monday</Day>
          <div>11:00 AM to 4:00 PM</div>
        </Time>
        <HorizontalLine />
        <Time>
          <Day>Tuesday</Day>
          <div>11:00 AM to 4:00 PM</div>
        </Time>
        <HorizontalLine />
        <Time>
          <Day>Wednesday</Day>
          <div>11:00 AM to 4:00 PM</div>
        </Time>
        <HorizontalLine />
        <Time>
          <Day>Thursday</Day>
          <div>11:00 AM to 4:00 PM</div>
        </Time>
        <HorizontalLine />
        <Time>
          <Day>Friday</Day>
          <div>11:00 AM to 4:00 PM</div>
        </Time>
        <HorizontalLine />
        <Time>
          <Day>Saturday</Day>
          <div>11:00 AM to 4:00 PM</div>
        </Time>
        <HorizontalLine />
        <Time style={{ color: "red" }}>
          <Day>Sunday</Day>
          <div>Emergency only</div>
        </Time>

        <HorizontalLine style={{ borderColor: "red" }} />

        <Button>
          Schedule Appointment
          <BsCheckCircle style={{ marginLeft: "0.38rem" }} />
        </Button>
      </SchContainer>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 8rem;
`;

const SchContainer = styled.div`
  position: relative;
  background-color: #fff;

  padding: 2rem;
  border-radius: 1.5rem;
`;

const Time = styled.div`
  display: flex;
  justify-content: space-between;

  font-size: 1.4rem;
  font-weight: 800;
  color: #3d7cc9;
`;

const Day = styled.div`
  margin-right: 5rem;
`;

const HorizontalLine = styled.div`
  border-bottom: 0.2rem solid #2d5d96;
  margin-bottom: 2rem;
`;

const Button = styled.button`
  position: absolute;
  left: 4rem;
  bottom: -2.5rem;

  background-color: #3d7cc9;
  border-color: #2d5d96;
  color: #ffffff;

  display: flex;
  align-items: center;

  font-size: 1.8rem;

  padding: 1rem;

  border-radius: 1rem;
  cursor: pointer;
`;
