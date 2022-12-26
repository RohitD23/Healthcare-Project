import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

import Input from "../../utils/Input";
import { httpForgotPassword } from "../../utils/request";

export default function ForgotPassword() {
  const navigate = useNavigate();

  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  const { state } = useLocation();

  useEffect(() => {
    if (state === null) navigate("/");
    else setType(state.type);
  }, [state, navigate]);

  const [type, setType] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (handleValidation()) {
      setIsLoading(true);

      let response;

      if (type === "patient")
        response = await httpForgotPassword({ email, type });
      else response = await httpForgotPassword({ username, type });

      setIsLoading(false);

      if (response.ok === false) toast.error(response.msg, toastOptions);
      else toast.success(response.msg, toastOptions);
    }
  };

  const handleValidation = () => {
    if (type === "patient" && email === "") {
      toast.error("Email required.", toastOptions);
      return false;
    }

    if (type === "employee" && username === "") {
      toast.error("Username required.", toastOptions);
      return false;
    }

    return true;
  };

  return (
    <FormContainer>
      <Form action="" onSubmit={(event) => handleSubmit(event)}>
        <Brand href="/">
          <img src="images/company-logo.png" alt="Logo" />
          <h1>Mamta Hospital</h1>
        </Brand>

        <div>
          <span>Please enter your email address to reset the password</span>
          {type === "patient" && (
            <Input
              width={35}
              type="email"
              label="E-mail"
              name="email"
              value={email}
              handleChange={(event) => setEmail(event.target.value)}
            />
          )}

          {type === "employee" && (
            <Input
              width={35}
              type="username"
              label="Username"
              name="username"
              value={username}
              handleChange={(event) => setUsername(event.target.value)}
            />
          )}
        </div>

        <Button type="submit" disabled={isLoading}>
          {isLoading ? <Loader /> : "Submit"}
        </Button>
      </Form>
      <ToastContainer style={{ fontSize: "1.4rem" }} />
    </FormContainer>
  );
}

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
    font-size: 1.4rem;
    margin-left: 0.5rem;
  }
`;

const Brand = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 1rem;

  text-decoration: none;

  img {
    height: 7rem;
    width: 7rem;
  }

  h1 {
    color: #505257;
    text-transform: uppercase;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;

  gap: 2rem;
  padding: 3rem 5rem;

  border-radius: 2rem;

  background-color: #ffffff;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #3d7cc9;
  color: #ffffff;

  padding: 1rem 2rem;
  margin: 0 0.5rem;

  border: none;
  border-radius: 0.4rem;

  font-size: 1.8rem;
  font-weight: 800;

  cursor: pointer;
  text-transform: uppercase;

  &:hover {
    background-color: #2d5d96;
  }
`;

const Loader = styled.div`
  border: 0.5rem solid #3d7cc9;
  border-radius: 50%;
  border-top: 0.5rem solid #ffffff;
  border-bottom: 0.5rem solid #ffffff;

  width: 2.5rem;
  height: 2.5rem;

  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
