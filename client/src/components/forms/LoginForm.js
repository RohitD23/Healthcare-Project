/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { toast } from "react-toastify";

import Input from "../../utils/Input";
import { httpLogIn } from "../../utils/request";

export default function LoginForm() {
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
  const [password, setPassword] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (handleValidation()) {
      setIsLoading(true);

      let response;
      if (type === "patient")
        response = await httpLogIn({ email, password, type });
      else response = await httpLogIn({ username, password, type });

      setIsLoading(false);

      if (response.ok === false) {
        toast.error(response.msg, toastOptions);
      } else {
        navigate("/");
      }
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

    if (password === "") {
      toast.error("Password required.", toastOptions);
      return false;
    }

    return true;
  };
  return (
    <div>
      <Form action="" onSubmit={(event) => handleSubmit(event)}>
        <Brand href="/">
          <img src="images/company-logo.png" alt="Logo" />
          <h1>Mamta Hospital</h1>
        </Brand>

        {type === "employee" && (
          <Input
            width={30}
            type="username"
            label="Username"
            name="username"
            value={username}
            handleChange={(event) => setUsername(event.target.value)}
          />
        )}

        {type === "patient" && (
          <Input
            width={30}
            type="email"
            label="E-mail"
            name="email"
            value={email}
            handleChange={(event) => setEmail(event.target.value)}
          />
        )}

        <div>
          <Input
            width={30}
            type="password"
            label="Password"
            name="password"
            value={password}
            handleChange={(event) => setPassword(event.target.value)}
          />
          <a
            onClick={() =>
              navigate("/forgotPassword", { state: { type: type } })
            }
          >
            forgot password?
          </a>
        </div>

        <Button type="submit" disabled={isLoading}>
          {isLoading ? <Loader /> : "Login"}
        </Button>

        {type === "patient" && (
          <span>
            Dont't have an account ? <Link to="/register">Register.</Link>
          </span>
        )}
      </Form>
    </div>
  );
}

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

  div {
    a {
      display: flex;
      justify-content: flex-end;
      margin-right: 1rem;

      font-size: 1.2rem;
      text-decoration: underline;

      color: #3d7cc9;
      cursor: pointer;
    }
  }
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
