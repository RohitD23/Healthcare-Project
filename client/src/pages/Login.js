import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Input from "../utils/Input";
import { httpLogIn } from "../utils/request";

export default function Login() {
  const navigate = useNavigate();

  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  const { state } = useLocation();
  const { type } = state;
  const [values, setValues] = useState({
    email: "",
    password: "",
    type: type,
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (handleValidation()) {
      const response = await httpLogIn(values);
      if (response.ok === false) {
        toast.error(response.error, toastOptions);
      } else {
        navigate("/");
      }
    }
  };

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleValidation = () => {
    const { email, password } = values;

    if (email === "") {
      toast.error("Email required.", toastOptions);
      return false;
    } else if (password === "") {
      toast.error("Password required.", toastOptions);
      return false;
    }

    return true;
  };

  return (
    <>
      <FormContainer>
        <Form action="" onSubmit={(event) => handleSubmit(event)}>
          <Brand>
            <img src="images/company-logo.png" alt="Logo" />
            <h1>Mamta Hospital</h1>
          </Brand>
          <Input
            width={35}
            type="email"
            label="E-mail"
            name="email"
            value={values.email}
            handleChange={handleChange}
          />
          <Input
            width={35}
            type="password"
            label="Password"
            name="password"
            value={values.password}
            handleChange={handleChange}
          />
          <Button type="submit">Login</Button>
          {type === "patient" && (
            <span>
              Dont't have an account ? <Link to="/register">Register.</Link>
            </span>
          )}
        </Form>
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

const Brand = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 1rem;

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
  background-color: #3d7cc9;
  color: #ffffff;

  padding: 1rem 2rem;
  margin: 0 0.5rem;

  border: none;
  border-radius: 0.4rem;

  font-size: 1.4rem;
  font-weight: 800;

  cursor: pointer;
  text-transform: uppercase;

  &:hover {
    background-color: #2d5d96;
  }
`;
