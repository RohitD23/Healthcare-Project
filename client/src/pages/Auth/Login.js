import React from "react";
import styled from "styled-components";
import { ToastContainer } from "react-toastify";

import LoginForm from "../../components/forms/LoginForm";

export default function Login() {
  return (
    <>
      <FormContainer>
        <LoginForm />
      </FormContainer>
      <ToastContainer style={{ fontSize: "1.4rem" }} />
    </>
  );
}

//Form Style
const FormContainer = styled.div`
  height: 100vh;
  width: 100vw;
  gap: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #3d7cc9;
  span {
    color: #505257;
    text-transform: uppercase;
    text-align: center;
    font-size: 1.2rem;

    a {
      color: #3d7cc9;
      text-decoration: none;
      font-weight: 800;
    }
  }
`;
