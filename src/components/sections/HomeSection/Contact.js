import React from "react";
import styled from "styled-components";

import Map from "../../map/Map";
import FeedbackForm from "../../FeedbackForm";

const location = {
  address: "Mamta Hospital",
  lat: 18.3991001,
  lng: 76.5651902,
};

export default function Contact() {
  return (
    <Container id="contactus">
      <Heading>Contact Us</Heading>
      <HorizontalLine />
      <ContactContainer>
        <Map location={location} zoomLevel={17} />
        <ExtraContainer>
          <OptionsContainer>
            <Option href="https://mail.google.com/mail/?view=cm&fs=1&to=feedback@mamtahospital.com">
              <img src="icons/gmail.png" alt="Gmail" /> Mail Us -
              feedback@mamtahospital.com
            </Option>
            <Option href="https://wa.me/9307530213">
              <img src="icons/whatsapp.png" alt="Whatsapp" /> WhatsApp Us -
              9307530213
            </Option>
            <Option href="tel:+919307530213">
              <img src="icons/phone.png" alt="Call" /> Call Us - 02382-243493
            </Option>
          </OptionsContainer>
          <FeedbackForm />
        </ExtraContainer>
      </ContactContainer>
    </Container>
  );
}

const Container = styled.div`
  padding-top: 8rem;
`;

const Heading = styled.div`
  color: #505257;
  font-size: 3.2rem;
  font-weight: 800;
  text-align: center;
`;

const HorizontalLine = styled.div`
  border-bottom: 0.2rem solid #505257;
  margin: 1rem 60rem;
`;

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5rem;
`;

const ExtraContainer = styled.div`
  width: 80%;
  margin-top: 5rem;
  display: flex;
  justify-content: space-around;
`;

const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Option = styled.a`
  text-decoration: none;
  background-color: #178066;
  color: #fff;

  font-size: 1.6rem;
  font-weight: 800;

  display: flex;
  align-items: center;

  padding: 1rem;
  margin: 1rem 0;

  border: 0.1rem solid #fff;
  border-radius: 2.1rem;

  transition: 0.5s;

  img {
    height: 5rem;
    width: 5rem;
    margin-right: 1rem;
  }

  &:hover {
    background-color: #fff;
    color: #178066;
    border: 0.1rem solid #178066;
  }
`;
