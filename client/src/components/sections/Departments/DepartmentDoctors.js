import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { httpGetDoctors } from "../../../utils/request";
import DoctorCard from "../../cards/DoctorCard";

export default function DepartmentDoctor({ serviceSelected }) {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const getDoctors = async () => {
      const data = await httpGetDoctors();
      setDoctors(
        data.map((doctor) => {
          return (
            doctor.field.includes(serviceSelected) && (
              <DoctorCard
                key={doctor.name}
                imgSrc={doctor.imgSrc}
                name={doctor.name}
                rating={doctor.rating}
                field={doctor.field.join(", ")}
              />
            )
          );
        })
      );
    };

    getDoctors();
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
