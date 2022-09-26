import React, { useState } from "react";
import styled from "styled-components";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
} from "styled-dropdown-component";
import { RiArrowDropDownLine } from "react-icons/ri";

import AppointmentPopUp from "../AppointmentPopUp";

export default function Header() {
  const [trigger, setTrigger] = useState(false);
  const [gyncDropdown, setgyncDropdown] = useState(true);
  const [uroDropdown, seturoDropdown] = useState(true);
  const [orthoDropdown, setorthoDropdown] = useState(true);

  return (
    <Container>
      <UpperHeader>
        <LogoName>Mamta Hospital</LogoName>
        <AppointmentButton onClick={() => setTrigger(true)}>
          Book Free Appointment
        </AppointmentButton>
        <AppointmentPopUp trigger={trigger} setTrigger={setTrigger} />
      </UpperHeader>
      <LowerHeader>
        <DropDown>
          <DropBtn
            dropdownToggle
            onClick={() => setgyncDropdown(!gyncDropdown)}
          >
            Gynaecology <RiArrowDropDownLine />
          </DropBtn>
          <DropdownMenu
            hidden={gyncDropdown}
            toggle={() => setgyncDropdown(!gyncDropdown)}
          >
            <DiseaseSection>
              <DiseaseHeader>Conditions</DiseaseHeader>
              <HorizontalLine />
            </DiseaseSection>
            <DropItem>Ectopic Pregnancy </DropItem>
            <DropItem>Molar Pregnancy</DropItem>
            <DropItem>Bartholin Cyst </DropItem>
            <DropItem>Miscarriage</DropItem>
            <DropItem>Endometriosis </DropItem>
            <DropItem>Adenomyosis </DropItem>
            <DropItem>Vaginal Cyst </DropItem>
            <DropItem>PCOD/PCOS </DropItem>
            <DropItem>Ovarian Cyst</DropItem>
            <DiseaseSection>
              <DiseaseHeader>Treatments</DiseaseHeader>
              <HorizontalLine />
            </DiseaseSection>
            <DropItem>Hymenoplasty </DropItem>
            <DropItem>Pregnancy Care </DropItem>
            <DropItem>Abortion </DropItem>
            <DropItem>Loose Vagina </DropItem>
            <DropItem>Uterus Removal</DropItem>
            <DropItem>Vaginoplasty </DropItem>
            <DropItem>Labiaplasty</DropItem>
          </DropdownMenu>
        </DropDown>
        <DropDown>
          <DropBtn dropdownToggle onClick={() => seturoDropdown(!uroDropdown)}>
            Urology <RiArrowDropDownLine />
          </DropBtn>
          <DropdownMenu
            hidden={uroDropdown}
            toggle={() => seturoDropdown(!uroDropdown)}
          >
            <DiseaseSection>
              <DiseaseHeader>Conditions</DiseaseHeader>
              <HorizontalLine />
            </DiseaseSection>
            <DropItem>Enlarged Prostate</DropItem>
            <DropItem>Kidney Stones</DropItem>
            <DropItem>Hydrocele</DropItem>
            <DropItem>Phimosis</DropItem>
          </DropdownMenu>
        </DropDown>
        <DropDown>
          <DropBtn
            dropdownToggle
            onClick={() => setorthoDropdown(!orthoDropdown)}
          >
            Orthopedics <RiArrowDropDownLine />
          </DropBtn>
          <DropdownMenu
            hidden={orthoDropdown}
            toggle={() => setorthoDropdown(!orthoDropdown)}
          >
            <DiseaseSection>
              <DiseaseHeader>Conditions</DiseaseHeader>
              <HorizontalLine />
            </DiseaseSection>
            <DropItem>Carpal Tunnel Syndrome</DropItem>
            <DropItem>ACL Tear</DropItem>
            <DiseaseSection>
              <DiseaseHeader>Treatments</DiseaseHeader>
              <HorizontalLine />
            </DiseaseSection>
            <DropItem>Spine Surgery</DropItem>
            <DropItem>Bankart Surgery</DropItem>
            <DropItem>Knee Replacment</DropItem>
            <DropItem>Hip Replacment</DropItem>
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

const LogoName = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1rem;
  font-size: 2.8rem;
  font-weight: 800;
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

const DiseaseSection = styled.div`
  padding: 0.5rem 1.6rem;
`;

const DiseaseHeader = styled.span`
  font-size: 1.4rem;
  font-weight: 800;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.79;
  letter-spacing: normal;
  text-align: left;

  display: block;

  color: #178066;

  cursor: text;
`;

const HorizontalLine = styled.div`
  height: 0;
  border: 0.1rem solid #ddd;
  margin: 0 0.1rem;
`;
