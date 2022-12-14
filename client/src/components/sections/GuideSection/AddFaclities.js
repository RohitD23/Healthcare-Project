import React from "react";
import styled from "styled-components";

export default function AddFacilities() {
  return (
    <div>
      <Heading>Additional Facilities</Heading>
      <Container>
        <div>
          <Img src="icons/guide-icons/cleaning.png" alt="Icon" />
          <Heading2>Maintainance / HouseKeeping </Heading2>
          <Para>
            Hygienic environment is essential to ensure good health and we have
            a dedicated section of staff to provide the same.
          </Para>
        </div>

        <div>
          <Img src="icons/guide-icons/surgery-room.png" alt="Icon" />
          <Heading2>Theatre facilities</Heading2>
          <Para>
            The operation theatre has been designed according to international
            guidelines to ensure a sterile set-up during surgery.
          </Para>
        </div>

        <div>
          <Img src="icons/guide-icons/hall.png" alt="Icon" />
          <Heading2>Conference hal</Heading2>
          <Para>
            The conference hall is regularly used to host clinical workshops and
            seminars.
          </Para>
        </div>
      </Container>
    </div>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 30rem 30rem 30rem;
  grid-template-rows: 15rem;
  gap: 10rem;

  justify-content: center;

  padding-top: 5rem;
`;

const Heading = styled.div`
  font-size: 3.2rem;
  font-weight: 800;

  color: #505257;

  text-align: center;

  margin-top: 5rem;
`;

const Img = styled.img`
  height: 5rem;
`;

const Para = styled.div`
  font-size: 1.6rem;
  color: #505257;
  max-width: 100%;
`;

const Heading2 = styled.div`
  font-size: 2rem;
  font-weight: 800;
  color: #505257;

  margin-top: 1rem;
`;
