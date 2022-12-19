import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

import useIntersection from "../../../utils/useIntersection";

export default function Stats() {
  const [opd, setOpd] = useState(0);
  const [ipd, setIpd] = useState(161);
  const [surgery, setSurgery] = useState(0);
  const [patients, setPatients] = useState(134);

  const ref = useRef();
  const inViewPort = useIntersection(ref, "-200px");

  useEffect(() => {
    if (inViewPort && opd < 85000) setOpd(opd + 40);
    if (inViewPort && ipd < 16161) setIpd(ipd + 10);
    if (inViewPort && surgery < 14400) setSurgery(surgery + 10);
    if (inViewPort && patients < 47134) setPatients(patients + 20);
  }, [opd, ipd, surgery, patients, inViewPort]);

  return (
    <Container ref={ref}>
      <StatsContainer>
        <Line>|</Line>

        <Stat>
          <Number>{opd}+</Number>
          <Info>OPD Visits</Info>
        </Stat>

        <Line>|</Line>

        <Stat>
          <Number>{ipd}+</Number>
          <Info>IPD</Info>
        </Stat>

        <Line>|</Line>

        <Stat>
          <Number>{surgery}+</Number>
          <Info>Number of Surgeries</Info>
        </Stat>

        <Line>|</Line>

        <Stat>
          <Number>{patients}+</Number>
          <Info>Happy Patients</Info>
        </Stat>

        <Line>|</Line>
      </StatsContainer>
      <p>Since 2015</p>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 8rem 10rem;
  color: #505257;

  p {
    margin-top: 2rem;
    font-size: 1.2rem;
  }
`;

const StatsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  width: 100%;
`;

const Line = styled.div`
  font-size: 10rem;
  font-weight: 200;
`;

const Stat = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
`;

const Number = styled.div`
  font-size: 3.2rem;
`;

const Info = styled.div`
  font-size: 1.4rem;
`;
