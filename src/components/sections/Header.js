import React, { useState } from "react";
import styled from "styled-components";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
} from "styled-dropdown-component";
import { RiArrowDropDownLine } from "react-icons/ri";

import PopUp from "../PopUp";
import AppointmentForm from "./../AppointmentForm";

export default function Header() {
  const [trigger, setTrigger] = useState(false);
  const [dropdown, setDropdown] = useState(true);

  return (
    <Container>
      <UpperHeader>
        <LogoName href="/">Mamta Hospital</LogoName>
        <AppointmentButton onClick={() => setTrigger(true)}>
          Book Free Appointment
        </AppointmentButton>
        <PopUp trigger={trigger} setTrigger={setTrigger}>
          <AppointmentForm width={100} />
        </PopUp>
      </UpperHeader>
      <LowerHeader>
        <DropDown>
          <DropBtn
            dropdownToggle
            onMouseOver={() => setDropdown(false)}
            onMouseOut={() => setDropdown(true)}
          >
            Departments <RiArrowDropDownLine />
          </DropBtn>
          <DropdownMenu hidden={dropdown} toggle={() => setDropdown(!dropdown)}>
            <DropItem>Gynaecology </DropItem>
            <DropItem>Urology</DropItem>
            <DropItem>Orthopedics</DropItem>
            <DropItem>Infertility Care</DropItem>
            <DropItem>Pathology</DropItem>
            <DropItem>Radiology</DropItem>
          </DropdownMenu>
        </DropDown>
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
  background-color: #178066;

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
`;

const LogoName = styled.a`
  display: flex;
  align-items: center;
  margin-left: 1rem;
  font-size: 2.8rem;
  font-weight: 800;
  text-decoration: none;
  color: #fff;
`;

const AppointmentButton = styled.button`
  background-color: #178066;
  color: #fff;

  border: 0.1rem solid #fff;
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
    background-color: #fff;
    color: #178066;
    border-color: #178066;
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
    color: #178066;
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
