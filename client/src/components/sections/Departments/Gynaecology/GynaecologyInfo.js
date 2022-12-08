import React from "react";
import styled from "styled-components";

import Facility from "../Facility";

import { gynaecology } from "../../../../models/ServicesData";

export default function GynaecologyInfo() {
  return (
    <Container>
      <Heading>Gynaecology Facilities</Heading>
      <Facility
        title={gynaecology.fisrtData.title}
        info={gynaecology.fisrtData.info}
      />
      <Facility
        title={gynaecology.secondData.title}
        info={gynaecology.secondData.info}
      />
      <Facility
        title={gynaecology.thridData.title}
        info={gynaecology.thridData.info}
      />
      <Facility
        title={gynaecology.fourthData.title}
        info={gynaecology.fourthData.info}
      />
      <Facility
        title={gynaecology.fifthData.title}
        info={gynaecology.fifthData.info}
      />
      <Facility
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
