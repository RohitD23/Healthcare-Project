import React from "react";
import styled from "styled-components";

import Input from "../utils/Input";

const handleSubmit = async (event) => {
  event.preventDefault();
};

export default function AppointmentForm(props) {
  return (
    <FormContainer
      action=""
      onSubmit={(event) => handleSubmit(event)}
      width={props.width}
    >
      <Input label="First Name" />
      <Input label="Last Name" />
      <Input label="Enter 10 Digit Number" />
      <Input label="Email" />
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
  );
}

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 3rem 5rem;
  width: ${(props) => props.width || 0}%;
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
  background-color: #178066;
  cursor: pointer;
`;
