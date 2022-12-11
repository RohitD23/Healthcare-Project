import React from "react";
import styled from "styled-components";

import Facility from "../Facility";

import { obstetrics } from "../../../../models/ServicesData";

export default function ObstetricsInfo() {
  return (
    <Container>
      <Heading>Obstetrics Facilities</Heading>
      <Facility
        title={obstetrics.fisrtData.title}
        info={obstetrics.fisrtData.info}
      />
      <Facility
        title={obstetrics.secondData.title}
        info={obstetrics.secondData.info}
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
