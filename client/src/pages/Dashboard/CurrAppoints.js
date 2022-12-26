import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { toast, ToastContainer } from "react-toastify";

import {
  httpGetPatientAppoints,
  httpCancelAppointment,
} from "../../utils/request";

import Navbar from "../../components/navbar/Navbar";

export default function CurrAppoints() {
  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  const [appoints, setAppoints] = useState([]);
  const [currentAppoints, setCurrentAppoints] = useState([]);

  const cancelAppointment = async (event) => {
    const response = httpCancelAppointment(appoints[event.target.value]);
    setAppoints([]);
    if (response.ok) toast.success(response.msg, toastOptions);
    else toast.error(response.msg, toastOptions);
  };

  useEffect(() => {
    const getAppoints = async () => {
      const patientAppoints = await httpGetPatientAppoints();
      setAppoints(patientAppoints);
    };

    getAppoints();
  }, []);

  useEffect(() => {
    const date = new Date();

    const cA = [];

    appoints.forEach(async (appoint) => {
      const year = Number(appoint.date.slice(0, 4));
      const month = Number(appoint.date.slice(5, 7));
      const day = Number(appoint.date.slice(8, 10));

      if (
        date.getDate() <= day &&
        date.getMonth() + 1 <= month &&
        date.getFullYear() <= year
      ) {
        cA.push({
          name: appoint.doctor,
          date: `${day}-${month}-${year}`,
          time: appoint.time,
        });
      }
    });
    setCurrentAppoints(cA);
  }, [appoints]);

  return (
    <div>
      <Navbar />
      <Container>
        {currentAppoints.map((appoint, index) => {
          return (
            <AppointCard key={appoint.name}>
              <div>
                <div>
                  <h1>Dr. {appoint.name}</h1>
                </div>
                <div>
                  <p>{appoint.date}</p>
                  <p>{appoint.time}</p>
                </div>
              </div>
              <div className="buttons">
                <button
                  className="cancel"
                  value={index}
                  onClick={(event) => cancelAppointment(event)}
                >
                  Cancel Appointment
                </button>
              </div>
            </AppointCard>
          );
        })}
      </Container>
      <ToastContainer style={{ fontSize: "1.4rem" }} />
    </div>
  );
}

const Container = styled.div`
  margin-top: 2rem;
  margin-left: 25rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const AppointCard = styled.div`
  background-color: #e6e6e6;

  padding: 2rem;
  width: 60%;

  border-radius: 1rem;
  box-shadow: 0 0.4rem 0.8rem 0 rgba(0, 0, 0, 0.2);

  display: flex;
  justify-content: space-between;

  h2 {
    font-size: 2rem;
  }

  p {
    font-size: 1.4rem;
  }

  .buttons {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  button {
    border: none;
    border-radius: 0.5rem;

    font-size: 1.4rem;
    cursor: pointer;

    color: #ffff;

    padding: 1rem;
    text-decoration: none;
    background-color: #f01d2b;
  }
`;
