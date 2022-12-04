import React, { useState } from "react";
import styled from "styled-components";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Input from "../utils/Input";
import { httpSubmitFeedback } from "../utils/request";

export default function FeedbackForm() {
  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    feedback: "",
  });

  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (handleValidation()) {
      const response = await httpSubmitFeedback(data);
    }
  };

  const handleValidation = () => {
    if (data.firstName === "") {
      toast.error("First Name required.", toastOptions);
      return false;
    }
    if (data.lastName === "") {
      toast.error("Last Name required.", toastOptions);
      return false;
    }
    if (data.email === "") {
      toast.error("Email required.", toastOptions);
      return false;
    }
    if (data.feedback === "") {
      toast.error("Feedback required.", toastOptions);
      return false;
    }

    return true;
  };

  return (
    <Container>
      <Form action="" onSubmit={(event) => handleSubmit(event)}>
        <Heading>Feedback</Heading>
        <Name>
          <Input
            value={data.firstName}
            handleChange={handleChange}
            name={"firstName"}
            type={"text"}
            label={"First Name"}
          />
          <Input
            value={data.lastName}
            handleChange={handleChange}
            name={"lastName"}
            type={"text"}
            label={"Last Name"}
          />
        </Name>
        <Input
          value={data.email}
          handleChange={handleChange}
          name={"email"}
          type={"email"}
          label={"E-mail"}
        />
        <Input
          value={data.feedback}
          handleChange={handleChange}
          name={"feedback"}
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
  background-color: #3d7cc9;
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
    color: #3d7cc9;
    border: 0.1rem solid #3d7cc9;
  }
`;
