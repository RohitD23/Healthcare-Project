import React from "react";
import styled from "styled-components";

import Input from "./Input";

export default function FeedbackForm() {
  return (
    <Form>
      <Heading>Feedback</Heading>
      <Name>
        <Input type={"text"} label={"First Name"} />
        <Input type={"text"} label={"Last Name"} />
      </Name>
      <Input type={"email"} label={"E-mail"} />
      <Input type={"text"} label={"Feedback"} height={10} />
      <Button>Submit</Button>
    </Form>
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Heading = styled.div`
  font-size: 2.4rem;
  font-weight: 800;
  color: #fff;
`;

const Name = styled.div`
  display: flex;
  flex-direction: row;
`;

const Button = styled.div`
  background-color: #178066;
  color: #fff;

  border: 0.1rem solid #fff;
  border-radius: 2.1rem;

  padding: 1rem;
  margin: 1rem;

  text-align: center;
  font-size: 2rem;
  font-weight: 800;
  letter-spacing: 0;

  opacity: 1;
  cursor: pointer;

  transition: 0.5s;

  &:hover {
    background-color: #fff;
    color: #178066;
    border-color: #178066;
  }
`;
