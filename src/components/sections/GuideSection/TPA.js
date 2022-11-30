import React from "react";
import styled from "styled-components";

export default function TPA() {
  return (
    <Container>
      <Heading>TPA & Cashless Facilities </Heading>
      <ul>
        <li>Bajaj Allianz General Insurance.</li>
        <li>Family Health Plan Limited.</li>
        <li>Medi Assist India Pvt. Ltd. </li>
        <li>Good Health Plan Limited. </li>
        <li>Star Health & Allied Insurance Co. Ltd. </li>
        <li>MD India Healthcare Services(TPA)Pvt. Ltd. </li>
        <li>Health India TPA Services Pvt. Ltd. </li>
        <li>Rastriya Swasthya Bima Yojana (RSBY).</li>
        <li>Dedicated – Healthcare Services Ltd.</li>
      </ul>
      <p>(*Note- For IPD Treatment only)</p>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 10rem;

  ul {
    margin-top: 5rem;
    margin-left: 30rem;
  }

  li,
  p {
    color: #505257;
    font-size: 1.8rem;
    padding: 0.5rem;
  }

  p {
    margin-left: 30rem;
  }
`;

const Heading = styled.div`
  font-size: 3.2rem;
  font-weight: 800;

  color: #505257;

  text-align: center;
`;
