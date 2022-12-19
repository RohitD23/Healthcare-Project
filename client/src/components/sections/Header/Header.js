import React from "react";
import styled from "styled-components";

import UpperHeader from "./UpperHeader";
import LowerHeader from "./LowerHeader";

export default function Header() {
  return (
    <Container>
      <UpperHeader />
      <LowerHeader />
    </Container>
  );
}

const Container = styled.div`
  position: sticky;
  top: 0;
  z-index: 999;
`;
