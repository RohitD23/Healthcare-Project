import React from "react";
import styled from "styled-components";

import Facility from "../Facility";

import { obstetrics } from "../../../../models/ServicesData";

export default function ObstetricsInfo() {
  return (
    <Container>
      <Heading>Obstetrics Facilities</Heading>
      <Facility
        key={obstetrics.firstData.title}
        title={obstetrics.firstData.title}
        info={obstetrics.firstData.info}
      />
      <Facility
        key={obstetrics.secondData.title}
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
