import React from "react";
import styled from "styled-components";
import { FiPhoneCall } from "react-icons/fi";

export default function MainSection() {
  return (
    <Container>
      <div className="text-container">
        <h1>Simplifying Surgery Experience in Pune</h1>
        <div className="stats-container">
          <div className="left-stats">
            <div className="stats-number">400+</div>
            <div className="stats-details">DOCTORS</div>
          </div>
          <div className="middle-stats">
            <div className="stats-number">50+</div>
            <div className="stats-details">DISEASE</div>
          </div>
          <div className="right-stats">
            <div className="stats-number">45+</div>
            <div className="stats-details">CITIES</div>
          </div>
        </div>
        <div className="btns-container">
          <button className="btn-style call-container">
            <FiPhoneCall /> Call Us : XXXX-XXX-XXX
          </button>
          <button className="btn-style appointment-container">
            BOOK FREE CONSULTATION
          </button>
        </div>
        <div>
          <div className="banner-heading">
            Book Free Appointments With Our Expert Doctors Near You
          </div>
          <div className="banner-item">
            <img src="free.png" alt="Free Icon" />
            Get free consultation for 50+ diseases across India
          </div>
          <div className="banner-item">
            <img src="doctor.png" alt="Doctor Icon" />
            In-person and online consultation with experienced doctors
          </div>
          <div className="banner-item">
            <img src="healthcare.png" alt="Care Icon" />
            Extensive medical assistance throughout your treatment
          </div>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  background-color: #fcfaf7;
  h1 {
    color: #3d7cc9;
    font-size: 5.2rem;
    line-height: 5.6rem;
    font-weight: 700;
    max-width: 60rem;
    padding: 5.2rem 0 1.6rem 0;
  }
  img {
    widht: 2.5rem;
    height: 2.5rem;
    margin-right: 1rem;
  }
  .text-container {
    margin-left: 12%;
  }
  .stats-container {
    display: flex;
    align-items: center;
    height: 7.3rem;
  }
  .stats-number {
    color: #505257;
    font-size: 3.5rem;
    font-weight: 700;
    text-align: left;
  }
  .stats-details {
    color: #7b7674;
    font-size: 1.5rem;
    text-align: left;
  }
  .left-stats {
    padding-right: 3.2rem;
    border-right: 0.1rem solid rgba(123, 118, 116, 0.5);
  }
  .middle-stats {
    padding: 0 3.2rem;
    border-right: 0.1rem solid rgba(123, 118, 116, 0.5);
  }
  .right-stats {
    padding-left: 3.2rem;
  }
  .btns-container {
    display: flex;
    gap: 0.5rem;
    margin: 3rem 0;
  }
  .btn-style {
    padding: 1.5rem 5rem;
    font-size: 1.6rem;
    font-weight: 800;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    border-radius: 5rem;
    cursor: pointer;
  }
  .call-container {
    background-color: #ff8300;
    border: none;
    color: #fff;
  }
  .appointment-container {
    color: #3d7cc9;
    background-color: #fcfaf7;
    border: 1px solid #3d7cc9;
  }
  .banner-heading {
    color: #505257;
    font-size: 2.2rem;
    font-weight: 900;
    padding-bottom: 2.5rem;
    line-height: 3rem;
    max-width: 55rem;
  }
  .banner-item {
    padding: 0.2rem 0 2rem;
    color: #727983;
    font-size: 1.6rem;
    display: flex;
    align-items: center;
  }
`;
