import React from "react";
import styled from "styled-components";

import Facility from "../Facility";

import { gynaecology } from "../../../../models/ServicesData";

export default function GynaecologyInfo() {
  return (
    <Container>
      <Heading>Gynaecology Facilities</Heading>
      <Facility
        key={gynaecology.firstData.title}
        title={gynaecology.firstData.title}
        info={gynaecology.firstData.info}
      />
      <Facility
        key={gynaecology.secondData.title}
        title={gynaecology.secondData.title}
        info={gynaecology.secondData.info}
      />
      <Facility
        key={gynaecology.thirdData.title}
        title={gynaecology.thirdData.title}
        info={gynaecology.thirdData.info}
      />
      <Facility
        key={gynaecology.fourthData.title}
        title={gynaecology.fourthData.title}
        info={gynaecology.fourthData.info}
      />
      <Facility
        key={gynaecology.fifthData.title}
        title={gynaecology.fifthData.title}
        info={gynaecology.fifthData.info}
      />
      <Facility
        key={gynaecology.sixthData.title}
        title={gynaecology.sixthData.title}
        info={gynaecology.sixthData.info}
      />
    </Container>
  );
}

const Container = styled.div`
  margin-top: 10rem;
`;

const Heading = styled.div`
  font-size: 3.2rem;
  font-weight: 800;
  margin-bottom: 2rem;
  color: #505257;
  text-align: center;
`;
