import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import styled from "styled-components";

export default function LocationPin({ text }) {
  return (
    <Pin>
      <FaMapMarkerAlt
        style={{ height: "2.5rem", width: "2.5rem", color: "#DC143C" }}
      />
      <PinText>{text}</PinText>
    </Pin>
  );
}

const Pin = styled.div`
  display: flex;
  align-items: center;
  width: 20rem;
`;

const PinText = styled.div`
  font-size: 1.4rem;
`;
