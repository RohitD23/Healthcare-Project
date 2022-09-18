import React, { useState } from "react";
import styled from "styled-components";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
} from "styled-dropdown-component";
import { RiArrowDropDownLine } from "react-icons/ri";

export default function Header() {
  const [patientsDropdown, setpatientsDropdown] = useState(true);
  const [companyDropdown, setcompanyDropdown] = useState(true);
  const [gyncDropdown, setgyncDropdown] = useState(true);
  const [uroDropdown, seturoDropdown] = useState(true);
  const [orthoDropdown, setorthoDropdown] = useState(true);

  return (
    <Container>
      <UpperHeader>
        <Logo>
          <LogoImg src="logo192.png" alt="Pristyn Care" />
          <LogoName>Pristyn Care</LogoName>
        </Logo>
        <div>
          <DropDown>
            <DropBtn
              dropdownToggle
              onClick={() => setpatientsDropdown(!patientsDropdown)}
              className="upperBtn"
            >
              For Patients <RiArrowDropDownLine />
            </DropBtn>
            <DropdownMenu
              hidden={patientsDropdown}
              toggle={() => setpatientsDropdown(!patientsDropdown)}
            >
              <DropItem>FAQs</DropItem>
              <DropItem>Videos</DropItem>
              <DropItem>CoWin</DropItem>
              <DropItem>Patient Help</DropItem>
              <DropItem>Our Doctors</DropItem>
              <DropItem>English Blog</DropItem>
              <DropItem>Hindi Blog</DropItem>
              <DropItem>Our Reviews</DropItem>
              <DropItem>No Cost EMI</DropItem>
              <DropItem>Create ABHA</DropItem>
              <DropItem>Period Tracker</DropItem>
            </DropdownMenu>
          </DropDown>
          <DropDown>
            <DropBtn
              dropdownToggle
              onClick={() => setcompanyDropdown(!companyDropdown)}
              className="upperBtn"
            >
              Our Company <RiArrowDropDownLine />
            </DropBtn>
            <DropdownMenu
              hidden={companyDropdown}
              toggle={() => setcompanyDropdown(!companyDropdown)}
            >
              <DropItem>Partner with us</DropItem>
              <DropItem>Media Coverage</DropItem>
              <DropItem>About Us</DropItem>
              <DropItem>Careers</DropItem>
            </DropdownMenu>
          </DropDown>
          <AppointmentButton>Book Free Appointment</AppointmentButton>
        </div>
      </UpperHeader>
      <LowerHeader>
        <DropDown>
          <DropBtn
            dropdownToggle
            onClick={() => setgyncDropdown(!gyncDropdown)}
            className="lowerBtn"
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
          <DropBtn
            dropdownToggle
            onClick={() => seturoDropdown(!uroDropdown)}
            className="lowerBtn"
          >
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
            className="lowerBtn"
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
  position: relative;
  z-index: 1;
  .upperBtn {
    color: #fff;

    &:hover {
      color: #ff8300;
    }
  }
  .lowerBtn {
    &:hover {
      color: #006491;
    }
  }
`;

const UpperHeader = styled.div`
  background: #00263e;

  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 6.6rem;
  padding: 0 6rem;
`;

const LowerHeader = styled.div`
  padding: 0 6rem;
  box-shadow: 0 0 1.5rem rgba(0, 0, 0, 0.2);
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImg = styled.img`
  width: 4.5rem;
  height: 4.5rem;
`;

const LogoName = styled.h2`
  margin-left: 1rem;
  font-size: 2.4rem;
  color: #fff;
`;

const DropDown = styled(Dropdown)`
  margin: 1.5rem;
`;

const DropBtn = styled.button`
  background: none;

  margin: 0;
  padding: 0;

  font-size: 1.5rem;

  border: none;
  cursor: pointer;

  display: flex;
  align-items: center;
`;

const DropItem = styled(DropdownItem)`
  font-size: 1.4rem;
  font-weight: 400;
  text-decoration: none;
  text-align: left;

  padding: 0.8rem 1.6rem;
`;

const AppointmentButton = styled.button`
  background-color: #ff8300;
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

  color: #ff8300;

  cursor: text;
`;

const HorizontalLine = styled.div`
  height: 0;
  border: 0.1rem solid #ddd;
  margin: 0 0.1rem;
`;
