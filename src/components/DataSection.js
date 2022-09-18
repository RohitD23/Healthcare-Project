import React from "react";
import styled from "styled-components";

export default function DataSection() {
  return (
    <>
      <Heading>Pristyn Care in Numbers</Heading>
      <Data>
        <DataContent>
          <DataNumber>200K+</DataNumber>
          <DataInfo>Happy Patients</DataInfo>
        </DataContent>
        <DataContent>
          <DataNumber>150+</DataNumber>
          <DataInfo>Clinics</DataInfo>
        </DataContent>
        <DataContent>
          <DataNumber>45+</DataNumber>
          <DataInfo>Cities</DataInfo>
        </DataContent>
        <DataContent>
          <DataNumber>60K+</DataNumber>
          <DataInfo>Surgeries</DataInfo>
        </DataContent>
        <DataContent>
          <DataNumber>400+</DataNumber>
          <DataInfo>Doctors</DataInfo>
        </DataContent>
        <DataContent>
          <DataNumber>800+</DataNumber>
          <DataInfo>Hospitals</DataInfo>
        </DataContent>
      </Data>
    </>
  );
}

const Heading = styled.div`
  font-size: 3rem;
  font-weight: 700;
  opacity: 1;
  text-align: center;
  padding-top: 4rem;
  margin-bottom: 5rem;
  color: #505257;
`;

const Data = styled.div`
  display: grid;
  grid-template-columns: 20rem 20rem 20rem;
  grid-template-rows: 3.5rem 3.5rem 3.5rem;
  gap: 10rem 10rem;
  justify-content: center;
`;

const DataContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  line-height: 3.5rem;
`;

const DataNumber = styled.div`
  color: #505257;
  font-size: 4.8rem;
  font-weight: 800;
  text-align: center;
`;

const DataInfo = styled.div`
  color: #505257;
  font-size: 2rem;
  font-weight: 400;
  text-align: center;
`;
