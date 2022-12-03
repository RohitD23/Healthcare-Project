import React, { useState } from "react";
import styled from "styled-components";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Input from "../utils/Input";

export default function FeedbackForm() {
  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");

  function handleFirstName(e) {
    setFirstName(e.target.value);
  }
  function handleLastName(e) {
    setLastName(e.target.value);
  }
  function handleEmail(e) {
    setEmail(e.target.value);
  }
  function handleFeedback(e) {
    setFeedback(e.target.value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (handleValidation()) {
    }
  };

  const handleValidation = () => {
    if (firstName === "") {
      toast.error("First Name required.", toastOptions);
      return false;
    }
  };

  return (
    <Container>
      <Form action="" onSubmit={(event) => handleSubmit(event)}>
        <Heading>Feedback</Heading>
        <Name>
          <Input
            value={firstName}
            handleChange={handleFirstName}
            type={"text"}
            label={"First Name"}
          />
          <Input
            value={lastName}
            handleChange={handleLastName}
            type={"text"}
            label={"Last Name"}
          />
        </Name>
        <Input
          value={email}
          handleChange={handleEmail}
          type={"email"}
          label={"E-mail"}
        />
        <Input
          value={feedback}
          handleChange={handleFeedback}
          type={"text"}
          label={"Feedback"}
        />
        <Button type="submit">Submit</Button>
      </Form>
      <ToastContainer />
    </Container>
  );
}

const Container = styled.div``;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Heading = styled.div`
  font-size: 2.4rem;
  font-weight: 800;
  color: #505257;
`;

const Name = styled.div`
  display: flex;
  flex-direction: row;
`;

const Button = styled.button`
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
    border: 0.1rem solid #178066;
  }
`;
