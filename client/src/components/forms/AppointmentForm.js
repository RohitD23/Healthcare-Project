import React from "react";
import styled from "styled-components";

import Input from "../../utils/Input";

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
