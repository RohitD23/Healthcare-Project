import React, { useState } from "react";
import styled from "styled-components";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
} from "styled-dropdown-component";
import { RiArrowDropDownLine } from "react-icons/ri";

export default function Header() {
  const [dropdown, setDropdown] = useState(true);

  return (
    <Container>
      <UpperHeader>
        <LogoName href="/">
          <img src="images/company-logo.png" alt="logo" />
          Mamta Hospital
        </LogoName>
        <div>
          <Button color={"#3d7cc9"} backgroundColor={"#ffff"}>
            Employee Login
          </Button>
          <Button color={"#3d7cc9"} backgroundColor={"#ffff"}>
            Patient Login
          </Button>
          <Button color={"#fff"} backgroundColor={"#3d7cc9"}>
            Book Free Appointment
          </Button>
        </div>
      </UpperHeader>
      <LowerHeader>
        <DropDown>
          <DropBtn dropdownToggle onClick={() => setDropdown(!dropdown)}>
            Departments <RiArrowDropDownLine />
          </DropBtn>
          <DropdownMenu hidden={dropdown} toggle={() => setDropdown(!dropdown)}>
            <DropItem>Obst. & Gynaecology </DropItem>
            <DropItem>Urology</DropItem>
            <DropItem>Orthopedics</DropItem>
            <DropItem>Infertility Care</DropItem>
            <DropItem>Pathology</DropItem>
            <DropItem>Radiology</DropItem>
          </DropdownMenu>
        </DropDown>
        <a href="/facilities">Patient Guide</a>
        <a href="/#aboutus">About Us</a>
        <a href="/doctors">Doctors</a>
        <a href="/#contactus">Contact Us</a>
      </LowerHeader>
    </Container>
  );
}

const Container = styled.div`
  position: sticky;
  top: 0;
  z-index: 999;
`;

const UpperHeader = styled.div`
  background-color: #3d7cc9;

  justify-content: space-between;
  display: flex;
  align-items: center;

  height: 6.6rem;
  padding: 0 6rem;
`;

const LowerHeader = styled.div`
  padding: 0 6rem;
  box-shadow: 0 2rem 1rem -1.5rem rgba(0, 0, 0, 0.2);
  background-color: white;

  a {
    text-decoration: none;
    font-size: 1.4rem;
    color: #505257;
    margin: 1rem;

    &:hover {
      color: #3d7cc9;
    }
  }
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

const Button = styled.button`
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};

  border: 0.1rem solid ${(props) => props.color};
  border-radius: 2.1rem;

  padding: 1.4rem 2rem 1.2rem;
  margin: 1.5rem;
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

const DropDown = styled(Dropdown)`
  margin: 1.5rem;
`;

const DropBtn = styled.button`
  background: none;

  margin: 0;
  padding: 0;

  font-size: 1.4rem;

  border: none;
  cursor: pointer;

  display: flex;
  align-items: center;

  color: #505257;

  &:hover {
    color: #3d7cc9;
  }
`;

const DropItem = styled(DropdownItem)`
  font-size: 1.4rem;
  font-weight: 400;
  text-decoration: none;
  text-align: left;
  color: #505257;
  padding: 0.8rem 1.6rem;
`;
