import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { Doctors } from "../../../models/DoctorsData";
import DoctorCard from "../../cards/DoctorCard";

export default function DepartmentDoctor({ serviceSelected }) {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    setDoctors(
      Doctors.map((doctor) => {
        return (
          doctor.field.includes(serviceSelected) && (
            <DoctorCard
              id={doctor.id}
              key={doctor.name}
              imgSrc={doctor.img}
              name={doctor.name}
              rating={doctor.rating}
              field={doctor.field.join(", ")}
            />
          )
        );
      })
    );
  }, [serviceSelected]);

  return (
    <div>
      <Heading>Meet Our Doctors</Heading>
      <HorizontalLine />
      <ListContainer>{doctors}</ListContainer>
    </div>
  );
}

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: 30rem 30rem 30rem;
  gap: 10rem 10rem;

  justify-content: center;
  justify-items: center;
  align-items: center;

  margin-bottom: 10rem;
`;

const Heading = styled.div`
  text-align: center;
  font-weight: 800;
  font-size: 3.2rem;
  color: #505257;
`;

const HorizontalLine = styled.div`
  border-bottom: 0.2rem solid #505257;
  margin: 1rem 50rem;
  margin-bottom: 5rem;
`;
