import React from "react";
import styled from "styled-components";
import { RiArrowDropDownLine } from "react-icons/ri";

export default function Header() {
  return (
    <Container>
      <div className="upper-header">
        <div className="logo-name">
          <img src="logo192.png" alt="Pristyn Care" />
          <h2 className="white-color">Pristyn Care</h2>
        </div>
        <div>
          <div className="dropdown spacing">
            <button className="dropbtn hover-orange white-color">
              For Patients <RiArrowDropDownLine />
              <div className="dropdown-content">
                <a href="#">FAQs</a>
                <a href="#">Videos</a>
                <a href="#">CoWin</a>
                <a href="#">Patient Help</a>
                <a href="#">Our Doctors</a>
                <a href="#">English Blog</a>
                <a href="#">Hindi Blog</a>
                <a href="#">Our Reviews</a>
                <a href="#">No Cost EMI</a>
                <a href="#">Create ABHA</a>
                <a href="#">Period Tracker</a>
              </div>
            </button>
          </div>
          <div className="dropdown spacing">
            <button className="dropbtn hover-orange white-color">
              Our Company <RiArrowDropDownLine />
              <div className="dropdown-content">
                <a href="#">Partner with us</a>
                <a href="#">Media Coverage</a>
                <a href="#">About Us</a>
                <a href="#">Careers</a>
              </div>
            </button>
          </div>
          <button className="book-appointment white-color spacing">
            Book Free Appointment
          </button>
        </div>
      </div>
      <div className="lower-header">
        <div className="dropdown spacing">
          <button className="dropbtn hover-blue">
            Gynaecology <RiArrowDropDownLine />
            <div className="dropdown-content">
              <div className="disease-section">
                <span>Conditions</span>
              </div>
              <div className="horizontal-line"></div>
              <a href="#">Ectopic Pregnancy </a>
              <a href="#">Molar Pregnancy</a>
              <a href="#">Bartholin Cyst </a>
              <a href="#">Miscarriage</a>
              <a href="#">Endometriosis </a>
              <a href="#">Adenomyosis </a>
              <a href="#">Vaginal Cyst </a>
              <a href="#">PCOD/PCOS </a>
              <a href="#">Ovarian Cyst</a>
              <div className="disease-section">
                <span>Treatments</span>
              </div>
              <div className="horizontal-line"></div>
              <a href="#">Hymenoplasty </a>
              <a href="#">Pregnancy Care </a>
              <a href="#">Abortion </a>
              <a href="#">Loose Vagina </a>
              <a href="#">Uterus Removal</a>
              <a href="#">Vaginoplasty </a>
              <a href="#">Labiaplasty</a>
            </div>
          </button>
        </div>
        <div className="dropdown spacing">
          <button className="dropbtn hover-blue">
            Urology <RiArrowDropDownLine />
            <div className="dropdown-content">
              <div className="disease-section">
                <span>Conditions</span>
              </div>
              <div className="horizontal-line"></div>
              <a href="#">Enlarged Prostate</a>
              <a href="#">Kidney Stones</a>
              <a href="#">Hydrocele</a>
              <a href="#">Phimosis</a>
            </div>
          </button>
        </div>
        <div className="dropdown spacing">
          <button className="dropbtn hover-blue">
            Orthopedics <RiArrowDropDownLine />
            <div className="dropdown-content">
              <div className="disease-section">
                <span>Conditions</span>
              </div>
              <div className="horizontal-line"></div>
              <a href="#">Carpal Tunnel Syndrome</a>
              <a href="#">ACL Tear</a>
              <div className="disease-section">
                <span>Treatments</span>
              </div>
              <div className="horizontal-line"></div>
              <a href="#">Spine Surgery</a>
              <a href="#">Bankart Surgery</a>
              <a href="#">Knee Replacment</a>
              <a href="#">Hip Replacment</a>
            </div>
          </button>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  z-index: 1;
  img {
    width: 4.5rem;
    height: 4.5rem;
  }
  h2 {
    margin-left: 1rem;
    font-size: 2.4rem;
  }
  span {
    font-size: 1.4rem;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.79;
    letter-spacing: normal;
    display: block;
    text-align: left;
    color: #ff8300;
    cursor: text;
  }
  .upper-header {
    background: #00263e;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 6.6rem;
    padding: 0 6rem;
  }
  .lower-header {
    padding: 0 6rem;
    box-shadow: 0 0 1.5rem rgba(0, 0, 0, 0.2);
  }
  .logo-name {
    display: flex;
    align-items: center;
  }
  .disease-section {
    padding: 0.5rem 1.6rem;
  }
  .spacing {
    margin: 1.5rem;
  }
  .dropdown {
    position: relative;
    display: inline-block;
  }
  .dropbtn {
    background: none;
    margin: 0;
    padding: 0;
    font-size: 1.5rem;
    border: none;
    cursor: pointer;
  }
  .hover-orange:hover {
    color: #ff8300;
  }
  .hover-blue:hover {
    color: #006491;
  }
  .white-color {
    color: #fff;
  }
  .dropdown-content {
    display: none;
    position: absolute;
    right: 1;
    background-color: #fff;
    font-size: 1.4rem;
    min-width: 16rem;
    font-weight: 400;
    box-shadow: 0 0.8rem 1.6rem 0 rgba(0, 0, 0, 0.2);
    z-index: 1;
    border-radius: 0.5rem;
  }
  .dropdown-content a {
    color: black;
    padding: 0.8rem 1.6rem;
    text-decoration: none;
    text-align: left;
    display: block;
  }
  .dropdown-content a:hover {
    color: #006491;
  }
  .dropdown:hover .dropdown-content {
    display: block;
  }
  .book-appointment {
    background-color: #ff8300;
    border: 0.1rem solid #fff;
    padding: 1.4rem 2rem 1.2rem;
    border-radius: 2.1rem;
    font-weight: 600;
    line-height: 1.7rem;
    letter-spacing: 0;
    opacity: 1;
    cursor: pointer;
  }
  .horizontal-line {
    height: 0;
    border: 0.1rem solid #ddd;
    margin: 0 0.1rem;
  }
`;
