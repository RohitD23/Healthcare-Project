import React, { useState } from "react";
import styled from "styled-components";
import { toast, ToastContainer } from "react-toastify";
import { useSearchParams } from "react-router-dom";

import Input from "../../utils/Input";
import { httpResetPassword } from "../../utils/request";

export default function ResetPassword() {
  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  const [searchParams] = useSearchParams();

  const [values, setValues] = useState({
    password: "",
    confirmPassword: "",
    type: searchParams.get("type"),
    token: searchParams.get("token"),
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (handleValidation()) {
      setIsLoading(true);

      const { password, token, type } = values;
      const response = await httpResetPassword({ password, token, type });

      setIsLoading(false);

      if (!response.ok) toast.error(response.msg, toastOptions);
      else {
        toast.success(response.msg, toastOptions);
      }
    }
  };

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleValidation = () => {
    const { password, confirmPassword } = values;

    if (password.length < 8) {
      toast.error("Password Length Should Be Greater Than 8", toastOptions);
      return false;
    } else if (!passwordStrength(password)) {
      toast.error(
        "Password Should Contain UpperCase, LowerCase, Numbers and Symbols",
        toastOptions
      );
      return false;
    } else if (password !== confirmPassword) {
      toast.error(
        "Password And Confirm Password Should Be Same.",
        toastOptions
      );
      return false;
    }

    return true;
  };

  const passwordStrength = (password) => {
    const lower = /[a-z]/g;
    const upper = /[A-Z]/g;
    const nums = /[0-9]/g;
    const symbols = /[^0-9a-zA-Z\s]/g;

    let matches = password.match(lower) || [];
    if (matches.length === 0) return false;

    matches = password.match(upper) || [];
    if (matches.length === 0) return false;

    matches = password.match(nums) || [];
    if (matches.length === 0) return false;

    matches = password.match(symbols) || [];
    if (matches.length === 0) return false;

    return true;
  };

  return (
    <FormContainer>
      <Form action="" onSubmit={(event) => handleSubmit(event)}>
        <Brand href="/">
          <img src="/images/company-logo.png" alt="Logo" />
          <h1>Mamta Hospital</h1>
        </Brand>

        <span>
          Password should be greater than 8 characters. Should contain,
          Uppercase, Lowercase, Digits, Symbols
        </span>

        <Input
          width={35}
          type="password"
          label="Password"
          name="password"
          value={values.password}
          handleChange={handleChange}
        />

        <Input
          width={35}
          type="password"
          label="Confirm Password"
          name="confirmPassword"
          value={values.confirmPassword}
          handleChange={handleChange}
        />

        <Button type="submit" disabled={isLoading}>
          {isLoading ? <Loader /> : "Reset Password"}
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
    max-width: 35rem;
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

  font-size: 1.6rem;
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
