import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { httpGetPatientAppoints } from "../../utils/request";

import Navbar from "../../components/navbar/Navbar";

import PopUp from "../../utils/PopUp";
import AppointmentForm from "../../components/forms/AppointmentForm";

export default function PrevAppoints() {
  const [appoints, setAppoints] = useState([]);
  const [prevAppoints, setCurrentAppoints] = useState([]);

  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    const getAppoints = async () => {
      const patientAppoints = await httpGetPatientAppoints();
      setAppoints(patientAppoints);
    };

    getAppoints();
  }, []);

  useEffect(() => {
    const date = new Date();

    const pA = [];

    appoints.forEach(async (appoint) => {
      const year = Number(appoint.date.slice(0, 4));
      const month = Number(appoint.date.slice(5, 7));
      const day = Number(appoint.date.slice(8, 10));

      if (
        date.getDate() > day &&
        date.getMonth() + 1 >= month &&
        date.getFullYear() >= year
      ) {
        pA.push({
          name: appoint.doctor,
          date: `${day}-${month}-${year}`,
          time: appoint.time,
        });
      }
    });
    setCurrentAppoints(pA);
  }, [appoints]);

  return (
    <div>
      <Navbar />
      <Container>
        {prevAppoints.map((appoint, index) => {
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
                <button onClick={() => setTrigger(true)}>Book Again</button>
                <PopUp trigger={trigger} setTrigger={setTrigger}>
                  <AppointmentForm />
                </PopUp>
              </div>
            </AppointCard>
          );
        })}
      </Container>
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
    background-color: #3d7cc9;
  }
`;
