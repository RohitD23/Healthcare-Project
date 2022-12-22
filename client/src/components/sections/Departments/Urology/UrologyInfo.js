import React from "react";
import styled from "styled-components";

import Facility from "../Facility";

import { urology } from "../../../../models/service.model/UrologyData";

export default function UrologyInfo() {
  return (
    <Container>
      <Heading>Facilities</Heading>

      <Facility
        key={urology.firstData.title}
        title={urology.firstData.title}
        info={urology.firstData.info}
      />
      <Facility
        key={urology.secondData.title}
        title={urology.secondData.title}
        info={urology.secondData.info}
      />
      <Facility
        key={urology.thirdData.title}
        title={urology.thirdData.title}
        info={urology.thirdData.info}
      />
    </Container>
  );
}

const Container = styled.div`
  margin-bottom: 10rem;
`;

const Heading = styled.div`
  font-size: 3.2rem;
  font-weight: 800;
  margin-bottom: 2rem;
  color: #505257;
  text-align: center;
`;
