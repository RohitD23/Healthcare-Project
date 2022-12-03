import React from "react";
import styled from "styled-components";
import { BsCheckCircle } from "react-icons/bs";

export default function Footer() {
  return (
    <Container>
      <Logo>
        <img src="images/company-logo.png" alt="logo" />
        <Heading>Mamta Hospital</Heading>
      </Logo>
      <DepContainer>
        <Heading>Departments</Heading>
        <Departments>
          <div>Urology</div>
          <div>Obst. & Gynaecology</div>
          <div>Orthopedics</div>
          <div>Pathology</div>
          <div>Radiology</div>
          <div>Infertility and IVF</div>
        </Departments>
      </DepContainer>
      <TimeConatainer>
        <Heading>We're Available On:</Heading>
        <SchContainer>
          <Schedule>
            <Day>Monday</Day>
            <div>11:00 AM to 4:00 PM</div>
          </Schedule>
          <HorizontalLine />
          <Schedule>
            <Day>Tuesday</Day>
            <div>11:00 AM to 4:00 PM</div>
          </Schedule>
          <HorizontalLine />
          <Schedule>
            <Day>Wednesday</Day>
            <div>11:00 AM to 4:00 PM</div>
          </Schedule>
          <HorizontalLine />
          <Schedule>
            <Day>Thursday</Day>
            <div>11:00 AM to 4:00 PM</div>
          </Schedule>
          <HorizontalLine />
          <Schedule>
            <Day>Friday</Day>
            <div>11:00 AM to 4:00 PM</div>
          </Schedule>
          <HorizontalLine />
          <Schedule>
            <Day>Saturday</Day>
            <div>11:00 AM to 4:00 PM</div>
          </Schedule>
          <HorizontalLine />
          <Schedule style={{ color: "red" }}>
            <Day>Sunday</Day>
            <div>Emergency only</div>
          </Schedule>
          <HorizontalLine style={{ borderColor: "red" }} />
          <Button>
            Schedule Appointment
            <BsCheckCircle style={{ marginLeft: "0.38rem" }} />
          </Button>
        </SchContainer>
      </TimeConatainer>
    </Container>
  );
}

const Container = styled.div`
  background-color: #178066;
  margin-top: 5rem;
  padding-bottom: 8rem;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;

  height: 10vh;
  margin-top: 6rem;

  img {
    width: 7rem;
    height: 7rem;
  }
`;

const Heading = styled.div`
  font-size: 2.6rem;
  font-weight: 800;
  color: #fff;
`;

const DepContainer = styled.div`
  margin-top: 8rem;
`;

const Departments = styled.div`
  padding-left: 2rem;
  padding-top: 2rem;

  div {
    font-size: 1.6rem;
    color: #fff;
    padding: 1rem;
  }
`;

const TimeConatainer = styled.div`
  margin-top: 8rem;
`;

const SchContainer = styled.div`
  position: relative;
  background-color: #fff;

  padding: 2rem;
  border-radius: 1.5rem;
`;

const Schedule = styled.div`
  display: flex;
  justify-content: space-between;

  font-size: 1.4rem;
  font-weight: 800;
  color: #178066;
`;

const Day = styled.div`
  margin-right: 5rem;
`;

const HorizontalLine = styled.div`
  border-bottom: 0.2rem solid #0e4d3d;
  margin-bottom: 2rem;
`;

const Button = styled.button`
  position: absolute;
  left: 4rem;
  bottom: -2.5rem;

  background-color: #178066;
  border-color: #0e4d3d;
  color: #ffffff;

  display: flex;
  align-items: center;

  font-size: 1.8rem;

  padding: 1rem;

  border-radius: 1rem;
  cursor: pointer;
`;
