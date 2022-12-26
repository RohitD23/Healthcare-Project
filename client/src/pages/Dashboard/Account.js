import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { MdEdit } from "react-icons/md";
import { toast, ToastContainer } from "react-toastify";

import Navbar from "../../components/navbar/Navbar";
import {
  httpGetUserData,
  httpChangePassword,
  httpChangeUserData,
} from "../../utils/request";
import Input from "../../utils/Input";

export default function Account() {
  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  const [user, setUser] = useState({});
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handelChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handelSubmit = async (event) => {
    event.preventDefault();

    if (handelValidation()) {
      const response = await httpChangeUserData(user);
      if (response.ok) toast.success(response.msg, toastOptions);
      else toast.error(response.msg, toastOptions);
    }
  };

  const handleChangePassword = async (event) => {
    event.preventDefault();

    if (handelPassVal()) {
      const response = await httpChangePassword({ password });

      if (response.ok) toast.success(response.msg, toastOptions);
      else toast.error(response.msg, toastOptions);
    }
  };

  const handelValidation = (event) => {
    const { name, gender, age, phoneNumber } = user;

    if (name === "") {
      toast.error("Name Required.", toastOptions);
      return false;
    } else if (gender === "" || (gender !== "male" && gender !== "female")) {
      toast.error("Gender Required.", toastOptions);
      return false;
    } else if (age === "") {
      toast.error("Age Required.", toastOptions);
      return false;
    } else if (phoneNumber === "" || phoneNumber.length !== 10) {
      toast.error("Please Enter Proper Phone Number", toastOptions);
      return false;
    }

    return true;
  };

  const handelPassVal = () => {
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

  useEffect(() => {
    const getUserData = async () => {
      const response = await httpGetUserData();
      setUser(response);
    };

    getUserData();
  }, []);

  return (
    <div>
      <Navbar />
      <Container>
        <form action="" onSubmit={(event) => handelSubmit(event)}>
          <div>
            <Heading>Email</Heading>
            <Info type="text" value={user.email} disabled={true} />
          </div>

          <InfoContainer>
            <div>
              <Heading>Name</Heading>
              <Info
                name="name"
                type="text"
                value={user.name}
                onChange={handelChange}
              />
              <MdEdit />
            </div>

            <div>
              <Heading>Phone Number</Heading>
              <Info
                name="phoneNumber"
                type="number"
                value={user.phoneNumber}
                onChange={handelChange}
              />
              <MdEdit />
            </div>
          </InfoContainer>

          <InfoContainer>
            <div>
              <Heading>Age</Heading>
              <Info
                name="age"
                type="number"
                value={user.age}
                onChange={handelChange}
              />
              <MdEdit />
            </div>

            <div>
              <Heading>Gender</Heading>
              <Info
                name="gender"
                type="text"
                value={user.gender}
                onChange={handelChange}
              />
              <MdEdit />
            </div>
          </InfoContainer>

          <Button type="submit">Save</Button>
        </form>

        <form action="" onSubmit={(event) => handleChangePassword(event)}>
          <Heading>Change Password</Heading>
          <Input
            type="text"
            name="password"
            value={password}
            label="Password"
            handleChange={(event) => setPassword(event.target.value)}
            width={30}
          />

          <Input
            type="text"
            name="confirmPassword"
            value={confirmPassword}
            label="Confirm Password"
            handleChange={(event) => setConfirmPassword(event.target.value)}
            width={30}
          />

          <Button type="submit">Change</Button>
        </form>
      </Container>
      <ToastContainer style={{ fontSize: "1.4rem" }} />
    </div>
  );
}

const Container = styled.div`
  margin-top: 5rem;
  margin-bottom: 5rem;
  margin-left: 45rem;
  padding: 5rem;

  background-color: #e6e6e6;
  width: 60%;

  border-radius: 2rem;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;

    margin-bottom: 5rem;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type="number"] {
    -moz-appearance: textfield;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5rem;
`;

const Heading = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: #505257;
`;

const Info = styled.input`
  border: none;

  margin: 1rem 0;
  width: 25rem;

  background-color: #e6e6e6;

  font-size: 1.6rem;

  &:focus {
    outline: none;
    border-bottom: 0.2rem solid #3d7cc9;
  }
`;

const Button = styled.button`
  padding: 1rem 5.7rem;

  border: none;
  border-radius: 0.4rem;

  font-size: 1.6rem;
  font-weight: 800;

  color: #ffff;
  background-color: #3d7cc9;

  cursor: pointer;
`;
