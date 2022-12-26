import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { FaUserCircle as UserIcon } from "react-icons/fa";

import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
} from "styled-dropdown-component";

import PopUp from "../../../utils/PopUp";
import AppointmentForm from "../../forms/AppointmentForm";
import { httpCheckUserLoggedIn, httpLogout } from "../../../utils/request";

export default function UpperHeader() {
  const [trigger, setTrigger] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [dropdown, setDropdown] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    async function checkUserLoggedIn() {
      const response = await httpCheckUserLoggedIn();
      setIsLoggedIn(response.ok);
    }

    checkUserLoggedIn();
  }, []);

  const logout = async () => {
    const response = await httpLogout();
    setIsLoggedIn(response.ok);
  };

  return (
    <Container>
      <LogoName href="/">
        <img src="/images/company-logo.png" alt="logo" />
        Mamta Hospital
      </LogoName>

      <BtnContainer>
        {isLoggedIn ? (
          <Dropdown>
            <DrpBtn
              color={"#ffff"}
              backgroundColor={"#3d7cc9"}
              dropdownToggle
              onClick={() => setDropdown(!dropdown)}
            >
              <UserIcon style={{ width: "3rem", height: "3rem" }} />
            </DrpBtn>

            <DropdownMenu
              hidden={dropdown}
              toggle={() => setDropdown(!dropdown)}
              right={true}
            >
              <DropItem onClick={() => navigate("/dashboard/account")}>
                DashBoard
              </DropItem>
              <DropItem onClick={() => logout()}>Logout</DropItem>
            </DropdownMenu>
          </Dropdown>
        ) : (
          <>
            <Button
              color={"#3d7cc9"}
              backgroundColor={"#ffff"}
              onClick={() =>
                navigate("/login", { state: { type: "employee" } })
              }
            >
              Employee Login
            </Button>

            <Button
              color={"#3d7cc9"}
              backgroundColor={"#ffff"}
              onClick={() => navigate("/login", { state: { type: "patient" } })}
            >
              Patient Login
            </Button>
          </>
        )}
        <Button
          color={"#fff"}
          backgroundColor={"#3d7cc9"}
          onClick={() => setTrigger(true)}
        >
          Book Free Appointment
        </Button>
        <PopUp trigger={trigger} setTrigger={setTrigger}>
          <AppointmentForm />
        </PopUp>
      </BtnContainer>
    </Container>
  );
}

const Container = styled.div`
  background-color: #3d7cc9;

  justify-content: space-between;
  display: flex;
  align-items: center;

  height: 6.6rem;
  padding: 0 6rem;
`;

const LogoName = styled.a`
  display: flex;
  align-items: center;
  margin-left: 1rem;
  font-size: 2.8rem;
  font-weight: 800;
  text-decoration: none;
  color: #fff;

  img {
    height: 5rem;
    width: 5rem;
    margin-right: 1rem;
  }
`;

const BtnContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Button = styled.button`
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};

  border: 0.1rem solid ${(props) => props.color};
  border-radius: 2.1rem;

  padding: 1.4rem 2rem 1.2rem;
  margin: 0 1.5rem;
  line-height: 1.7rem;

  font-weight: 800;
  letter-spacing: 0;

  opacity: 1;
  cursor: pointer;

  transition: 0.5s;

  &:hover {
    background-color: ${(props) => props.color};
    color: ${(props) => props.backgroundColor};
    border-color: ${(props) => props.backgroundColor};
  }
`;

const DrpBtn = styled.button`
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};

  border: 0.1rem solid ${(props) => props.color};
  border-radius: 2.1rem;

  padding: 0;
  margin: 0 1.5rem;
  line-height: 0;

  opacity: 1;
  cursor: pointer;

  transition: 0.5s;

  &:hover {
    background-color: ${(props) => props.color};
    color: ${(props) => props.backgroundColor};
    border-color: ${(props) => props.backgroundColor};
  }
`;

const DropItem = styled(DropdownItem)`
  font-size: 1.4rem;
  font-weight: 400;

  text-decoration: none;
  text-align: left;

  color: #505257;

  padding: 0.8rem 1.6rem;

  cursor: pointer;

  &:hover {
    color: #3d7cc9;
    background-color: #ffffff;
  }
`;
