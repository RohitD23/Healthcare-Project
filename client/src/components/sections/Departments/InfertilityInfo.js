import React from "react";
import styled from "styled-components";

import Facility from "./Facility";

import { infertility } from "../../../models/ServicesData";

export default function InfertilityInfo() {
  return (
    <Container>
      <Heading>Facilities</Heading>
      <Facility
        title={infertility.fisrtData.title}
        info={infertility.fisrtData.info}
      />
      <Facility
        title={infertility.secondData.title}
        info={infertility.secondData.info}
      />
      <Facility
        title={infertility.thridData.title}
        info={infertility.thridData.info}
      />
      <Facility
        title={infertility.fourthData.title}
        info={infertility.fourthData.info}
      />
      <Facility
        title={infertility.fifthData.title}
        info={infertility.fifthData.info}
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
