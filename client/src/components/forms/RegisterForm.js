/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Input from "../../utils/Input";
import { httpAddNewUser } from "../../utils/request";

export default function RegisterForm() {
  const navigate = useNavigate();

  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  const [values, setValues] = useState({
    name: "",
    gender: "male",
    age: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const toLogin = () => {
    navigate("/login", { state: { type: "patient" } });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(values);
    if (handleValidation()) {
      setIsLoading(true);

      const { name, gender, age, email, phoneNumber, password } = values;
      const response = await httpAddNewUser({
        name,
        gender,
        age,
        email,
        phoneNumber,
        password,
      });

      if (response.ok === false) {
        toast.error(response.msg, toastOptions);
      } else {
        navigate("/");
      }

      setIsLoading(false);
    }
  };

  const handleChange = (event) => {
    console.log(event);
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleValidation = () => {
    const { name, gender, age, email, phoneNumber, password, confirmPassword } =
      values;

    if (name === "") {
      toast.error("Last Name Required.", toastOptions);
      return false;
    } else if (gender === "") {
      toast.error("Gender Required.", toastOptions);
      return false;
    } else if (age === "") {
      toast.error("Age Required.", toastOptions);
      return false;
    } else if (email === "") {
      toast.error("Email Required.", toastOptions);
      return false;
    } else if (phoneNumber === "" || phoneNumber.length !== 10) {
      toast.error("Please Enter Proper Phone Number", toastOptions);
      return false;
    } else if (password.length < 8) {
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
    <div>
      <Form action="" onSubmit={(event) => handleSubmit(event)}>
        <Brand href="/">
          <img src="images/company-logo.png" alt="Logo" />
          <h1>mamta hospital</h1>
        </Brand>

        <Input
          width={35}
          type="text"
          label="Name"
          name="name"
          value={values.name}
          handleChange={handleChange}
        />

        <Select name="gender" onChange={handleChange}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </Select>

        <Input
          width={35}
          type="number"
          label="Age"
          name="age"
          value={values.age}
          handleChange={handleChange}
        />

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
          type="number"
          label="Phone Number"
          name="phoneNumber"
          value={values.phoneNumber}
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

        <Input
          width={35}
          type="password"
          label="ConfirmPassword"
          name="confirmPassword"
          value={values.confirmPassword}
          handleChange={handleChange}
        />

        <Button type="submit">{isLoading ? <Loader /> : "Create User"}</Button>

        <span>
          Already have an account ?{" "}
          <a
            onClick={() => {
              toLogin();
            }}
          >
            Login.
          </a>
        </span>
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
  }

  h1 {
    color: #505257;
    text-transform: uppercase;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;

  gap: 1.5rem;

  background-color: #ffffff;

  border-radius: 2rem;
  padding: 3rem 5rem;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #3d7cc9;
  color: #ffffff;

  padding: 1rem 2rem;
  margin: 0 0.5rem;

  font-weight: 800;

  cursor: pointer;

  border: none;
  border-radius: 0.4rem;

  font-size: 1.8rem;
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

const Select = styled.select`
  background-color: #ffff;
  border: 0.1rem solid #6f81a5;
  border-radius: 0.4rem;

  margin: 0 0.5rem;
  padding: 1.5rem 2rem;
`;
