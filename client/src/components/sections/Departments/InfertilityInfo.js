import React from "react";
import styled from "styled-components";

import Facility from "./Facility";

import { infertility } from "../../../models/ServicesData";

export default function InfertilityInfo() {
  return (
    <Container>
      <Heading>Facilities</Heading>

      <Facility
        key={infertility.firstData.title}
        title={infertility.firstData.title}
        info={infertility.firstData.info}
      />
      <Facility
        key={infertility.secondData.title}
        title={infertility.secondData.title}
        info={infertility.secondData.info}
      />
      <Facility
        key={infertility.thirdData.title}
        title={infertility.thirdData.title}
        info={infertility.thirdData.info}
      />
      <Facility
        key={infertility.fourthData.title}
        title={infertility.fourthData.title}
        info={infertility.fourthData.info}
      />
      <Facility
        key={infertility.fifthData.title}
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
