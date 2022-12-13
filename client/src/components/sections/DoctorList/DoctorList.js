import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { Doctors } from "../../../models/DoctorsData";
import FilterButtons from "./FilterButtons";
import DoctorCard from "../../cards/DoctorCard";

export default function DoctorList() {
  const [doctors, setDoctors] = useState([]);
  const [serviceSelected, setServiceSelected] = useState("all");

  useEffect(() => {
    setDoctors(
      Doctors.map((doctor) => {
        return (
          (serviceSelected === "all" ||
            doctor.field.includes(serviceSelected)) && (
            <DoctorCard
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
      <FilterButtons
        service={serviceSelected}
        setService={setServiceSelected}
      />
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
`;
