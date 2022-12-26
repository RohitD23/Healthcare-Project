import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ToastContainer } from "react-toastify";

import { httpGetDoctors } from "../../../utils/request";
import FilterButtons from "./FilterButtons";
import DoctorCard from "../../cards/DoctorCard";

export default function DoctorList() {
  const [doctors, setDoctors] = useState([]);
  const [serviceSelected, setServiceSelected] = useState("all");

  useEffect(() => {
    const getDoctors = async () => {
      const data = await httpGetDoctors();
      setDoctors(
        data.map((doctor) => {
          return (
            (serviceSelected === "all" ||
              doctor.field.includes(serviceSelected)) && (
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
      <FilterButtons
        service={serviceSelected}
        setService={setServiceSelected}
      />

      <ListContainer>{doctors}</ListContainer>
      <ToastContainer style={{ fontSize: "1.4rem" }} />
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
