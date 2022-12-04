import React from "react";
import styled from "styled-components";

import { VscFeedback } from "react-icons/vsc";

export default function GuideInfo() {
  return (
    <Container>
      <div>
        <Img src="icons/guide-icons/pencil.png" alt="Icon" />
        <Heading>Registration</Heading>
        <Para>
          The registration and billing counter is situated on the ground floor.
          After registration, you will receive a permanent ID number which can
          be used to access your reports on the website at any time.
        </Para>
      </div>
      <div>
        <Img src="icons/guide-icons/appointment.png" alt="Icon" />
        <Heading>Appointments</Heading>
        <Para>
          To book an appointment, please contact 02382-243493, 9960643493 or
          feedback@mamtahospital.com.
        </Para>
      </div>
      <div>
        <Img src="icons/guide-icons/surgery-room.png" alt="Icon" />
        <Heading>Diagnostics</Heading>
        <Para>
          Round-the-clock diagnostic services povide accurate and precise
          reports.
        </Para>
      </div>
      <div>
        <Img src="icons/guide-icons/medical-symbol.png" alt="Icon" />
        <Heading>Medical Service</Heading>
        <Para>
          All medical facilities are available 24x7 to cater to the needs of the
          patients.
        </Para>
      </div>
      <div>
        <Img src="icons/guide-icons/bed.png" alt="Icon" />
        <Heading>IPD</Heading>
        <Para>
          Though we try our best to accommodate you as per your request,
          allotment of rooms is subject to availability.
        </Para>
      </div>
      <div>
        <Img src="icons/guide-icons/hand-gesture.png" alt="Icon" />
        <Heading>TPA & Cashless Facilities</Heading>
        <Para>
          We offer cashless transactions, and patients can also use third-party
          health policies.
        </Para>
      </div>
      <div>
        <VscFeedback className="style-icon" />
        <Heading>Feedback</Heading>
        <Para>
          Your feedback helps us serve you better. Please spare some time to
          provide it.
        </Para>
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 30rem 30rem 30rem;
  grid-template-rows: 15rem 15rem 15rem;
  gap: 10rem 10rem;

  justify-content: center;

  padding-top: 10rem;

  .style-icon {
    color: #3d7cc9;
    height: 5rem;
    width: 5rem;
  }
`;

const Img = styled.img`
  height: 5rem;
`;

const Heading = styled.div`
  font-size: 2rem;
  font-weight: 800;
  color: #505257;

  margin-top: 1rem;
`;

const Para = styled.div`
  font-size: 1.6rem;
  color: #505257;
  max-width: 100%;
`;
