import React from "react";
import styled from "styled-components";
import { ToastContainer } from "react-toastify";

import RegisterForm from "../../components/forms/RegisterForm";

export default function Register() {
  return (
    <>
      <FormContainer>
        <RegisterForm />
      </FormContainer>
      <ToastContainer style={{ fontSize: "1.4rem" }} />
    </>
  );
}

//Form Style
const FormContainer = styled.div`
  height: 100vh;
  widht: 100vw;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 1rem;

  background-color: #3d7cc9;

  span {
    color: #505257;
    text-transform: uppercase;

    font-size: 1.2rem;
    text-align: center;

    a {
      color: #3d7cc9;
      cursor: pointer;
      text-decoration: none;
      font-weight: bold;
    }
  }
`;
