import React, { useEffect } from "react";
import styled from "styled-components";
import { ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

import RegisterForm from "../../components/forms/RegisterForm";
import { httpCheckUserLoggedIn } from "../../utils/request";

export default function Register() {
  const navigate = useNavigate();

  useEffect(() => {
    async function checkUserLoggedIn() {
      const response = await httpCheckUserLoggedIn();
      if (response.ok) navigate("/");
    }

    checkUserLoggedIn();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
