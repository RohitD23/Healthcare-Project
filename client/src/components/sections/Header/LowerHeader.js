import React, { useState } from "react";
import styled from "styled-components";

import { useNavigate } from "react-router-dom";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
} from "styled-dropdown-component";
import { RiArrowDropDownLine } from "react-icons/ri";

export default function LowerHeader() {
  const [dropdown, setDropdown] = useState(true);
  const navigate = useNavigate();

  return (
    <Container>
      <DropDown>
        <DropBtn dropdownToggle onClick={() => setDropdown(!dropdown)}>
          Departments <RiArrowDropDownLine />
        </DropBtn>
        <DropdownMenu hidden={dropdown} toggle={() => setDropdown(!dropdown)}>
          <DropItem onClick={() => navigate("/gynaecology")}>
            Obst. & Gynaecology
          </DropItem>
          <DropItem onClick={() => navigate("/urology")}>Urology</DropItem>
          <DropItem onClick={() => navigate("/orthopedics")}>
            Orthopedics
          </DropItem>
          <DropItem onClick={() => navigate("/infertility")}>
            Infertility Care
          </DropItem>
          <DropItem onClick={() => navigate("/pathology")}>Pathology</DropItem>
          <DropItem onClick={() => navigate("/radiology")}>Radiology</DropItem>
        </DropdownMenu>
      </DropDown>
      <a href="/facilities">Patient Guide</a>
      <a href="/#aboutus">About Us</a>
      <a href="/doctorlist">Doctors</a>
      <a href="/#contactus">Contact Us</a>
    </Container>
  );
}

const Container = styled.div`
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

  cursor: pointer;

  &:hover {
    color: #3d7cc9;
    background-color: #ffffff;
  }
`;
