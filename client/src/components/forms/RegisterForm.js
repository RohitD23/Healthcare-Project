/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Input from "../../utils/Input";

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
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  const toLogin = () => {
    navigate("/login", { state: { type: "patient" } });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (handleValidation()) {
      //const { email, username, password } = values;
      //   const response = await httpAddNewUser({ email, username, password });
      //   if (response.ok === false) {
      //     toast.error(response.error, toastOptions);
      //   } else {
      //     navigate("/setAvatar");
      //   }
    }
  };

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleValidation = () => {
    const {
      firstname,
      lastname,
      email,
      phonenumber,
      password,
      confirmPassword,
    } = values;

    if (firstname === "") {
      toast.error("First Name required.", toastOptions);
      return false;
    } else if (lastname === "") {
      toast.error("Last Name required.", toastOptions);
      return false;
    } else if (email === "") {
      toast.error("Email required.", toastOptions);
      return false;
    } else if (phonenumber === "" || phonenumber.length < 10) {
      toast.error("Please enter proper Phone Number", toastOptions);
      return false;
    } else if (!passwordStrength(password)) {
      toast.error(
        "Password should contain UpperCase, LowerCase, Numbers and Symbols",
        toastOptions
      );
      return false;
    } else if (password !== confirmPassword) {
      toast.error(
        "Password and confirm password should be same.",
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
        <Brand>
          <img src="images/company-logo.png" alt="Logo" />
          <h1>mamta hospital</h1>
        </Brand>
        <Input
          width={35}
          type="text"
          label="First Name"
          name="firstname"
          value={values.firstname}
          handleChange={handleChange}
        />
        <Input
          width={35}
          type="text"
          label="Last Name"
          name="lastname"
          value={values.lastname}
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
          name="phonenumber"
          value={values.phonenumber}
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
        <Button type="submit">Create User</Button>
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

const Brand = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 1rem;

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
  background-color: #3d7cc9;
  color: #ffffff;

  padding: 1rem 2rem;
  margin: 0 0.5rem;

  font-weight: 800;

  cursor: pointer;

  border: none;
  border-radius: 0.4rem;

  font-size: 1.4rem;
  text-transform: uppercase;

  &:hover {
    background-color: #2d5d96;
  }
`;
