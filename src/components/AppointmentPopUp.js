import React from "react";
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";

import TextInput from "./TextInput";

export default function AppointmentPopUp({ trigger, setTrigger }) {
  const handleSubmit = async (event) => {
    event.preventDefault();
  };

  return trigger ? (
    <Container>
      <PopUp>
        <TopContainer>
          <CloseButton onClick={() => setTrigger(false)}>
            <AiOutlineClose
              style={{ width: "2.5rem", height: "2.5rem", color: "#fff" }}
            />
          </CloseButton>
        </TopContainer>
        <FormContainer action="" onSubmit={(event) => handleSubmit(event)}>
          <TextInput label="Patient Name" />
          <TextInput label="Enter 10 Digit Number" />
          <Select>
            <option value="" disabled selected>
              Select Disease
            </option>
            <option value="gynaecology">Gynaecology</option>
            <option value="urology">Urology</option>
            <option value="orthopedics">Orthopedics</option>
          </Select>
          <Button type="submit">Book Appointment</Button>
        </FormContainer>
      </PopUp>
    </Container>
  ) : (
    ""
  );
}

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);

  display: flex;
  justify-content: center;
  align-items: center;
`;

const PopUp = styled.div`
  position: relative;
  width: 100%;
  max-width: 64rem;
  border-radius: 1rem;
  background-color: #fff;
`;

const TopContainer = styled.div`
  height: 5.5rem;
  width: 100%;
  background-color: #1361ed;

  border-radius: 1rem 1rem 0 0;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1.6rem;
  right: 1.6rem;

  border: none;
  background: none;

  margin: 0;
  padding: 0;

  cursor: pointer;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 3rem 5rem;
`;

const Select = styled.select`
  height: 6rem;
  border: none;
  outline: none;
  font-size: 1.4rem;
  padding: 0rem 1.5rem;
  border-radius: 0.4rem;
  background-color: #fff;
  box-shadow: 0 0 0 0.1rem #6f81a5;
`;

const Button = styled.button`
  height: 6rem;
  border: none;
  outline: none;
  font-size: 2rem;
  font-weight: 800;
  border-radius: 0.4rem;
  color: #fff;
  background-color: #ff430d;
  cursor: pointer;
`;
