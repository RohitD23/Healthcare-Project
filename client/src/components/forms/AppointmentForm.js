import React, { useState, useEffect } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import {
  httpCheckUserLoggedIn,
  httpGetDoctors,
  httpSubmitAppointment,
  httpGetDocAppoints,
} from "../../utils/request";

export default function AppointmentForm({ name }) {
  const navigate = useNavigate();

  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  const startDate = new Date();
  startDate.setDate(startDate.getDate() + 1);

  const endDate = new Date();
  endDate.setDate(endDate.getDate() + 7);

  const [date, setDate] = useState(startDate);

  const [doctors, setDoctors] = useState([]);
  const [doctorName, setDoctorName] = useState(name);
  const [docsAppoints, setDocsAppoints] = useState([]);

  const [time, setTime] = useState("");
  const [timeSlots, setTimeSlots] = useState([]);

  const [booked, setBooked] = useState(false);
  const [isBooked, setisBooked] = useState(false);
  const [showStatus, setShowStatus] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (handleValidation()) {
      setBooked(true);
    }
  };

  const submitAppointment = async (event) => {
    event.preventDefault();
    const response = await httpSubmitAppointment({
      doctorName: doctorName.replace(/\s/g, ""),
      date,
      time,
    });

    setShowStatus(true);
    if (response.ok) setisBooked(true);
    else setisBooked(false);
  };

  const handleValidation = () => {
    if (doctorName === undefined || doctorName.length === 0) {
      toast.error("Please Select a Doctor", toastOptions);
      return false;
    } else if (date === undefined || doctorName.length === 0) {
      toast.error("Please Select a Date", toastOptions);
      return false;
    } else if (time === "") {
      toast.error("Please Select Time", toastOptions);
      return false;
    }

    return true;
  };

  useEffect(() => {
    const bookedSlots = [];
    docsAppoints.forEach((docAppoint) => {
      const year = Number(docAppoint.date.slice(0, 4));
      const month = Number(docAppoint.date.slice(5, 7));
      const day = Number(docAppoint.date.slice(8, 10));

      if (
        date.getDate() === day &&
        date.getMonth() + 1 === month &&
        date.getFullYear() === year
      )
        bookedSlots.push(docAppoint.time);
    });

    const slots = [];
    for (let i = 11; i < 18; i++) {
      for (let j = 0; j < 2; j++) {
        const hour = (i % 12) + 1;
        if (hour !== 7 || j !== 1) {
          const minute = j * 30;
          const formattedTime = `${hour}:${minute
            .toString()
            .padStart(2, "0")} ${"PM"}`;

          if (!bookedSlots.includes(formattedTime)) {
            slots.push(
              <Time
                key={formattedTime}
                id={formattedTime}
                time={time}
                onClick={(event) => {
                  setTime(event.target.id);
                }}
              >
                {formattedTime}
              </Time>
            );
          }
        }
      }
    }

    setTimeSlots(slots);
  }, [time, docsAppoints, date]);

  useEffect(() => {
    const getDocAppoints = async () => {
      let appoints = [];
      if (doctorName !== "" && doctorName !== undefined) {
        const name = doctorName.replace(/\s/g, "");
        appoints = await httpGetDocAppoints(name);
      }

      setDocsAppoints(appoints);
    };

    getDocAppoints();
  }, [doctorName]);

  useEffect(() => {
    const getDoctors = async () => {
      const data = await httpGetDoctors();
      setDoctors(
        data.map((doctor) => (
          <option key={doctor.name} value={doctor.name}>
            Dr. {doctor.name}
          </option>
        ))
      );
    };

    getDoctors();
  }, []);

  useEffect(() => {
    async function checkUserLoggedIn() {
      const response = await httpCheckUserLoggedIn();
      if (!response.ok) navigate("/login", { state: { type: "patient" } });
    }

    checkUserLoggedIn();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {!booked ? (
        <FormContainer action="" onSubmit={(event) => handleSubmit(event)}>
          <Select
            name="doctors"
            id="doctors"
            value={doctorName}
            onChange={(event) => {
              setDoctorName(event.target.value);
            }}
          >
            <option value="">Select a Doctor</option>
            {doctors}
          </Select>
          <div>
            <DatePicker
              selected={date}
              minDate={startDate}
              maxDate={endDate}
              onChange={(newDate) => setDate(newDate)}
              className="date-picker"
              popperPlacement="bottom"
            />
          </div>
          <TimeContainer>{timeSlots}</TimeContainer>
          <Button type="submit">Book Appointment</Button>
        </FormContainer>
      ) : !showStatus ? (
        <ConfirmContainer
          action=""
          onSubmit={(event) => submitAppointment(event)}
        >
          <div>Doctor : Dr. {doctorName}</div>
          <div>
            Date : {date.getDate()} - {date.getMonth() + 1} -
            {date.getFullYear()}
          </div>
          <div>Time : {time}</div>
          <div>
            <Button className="back" onClick={() => setBooked(false)}>
              Back
            </Button>
            <Button type="submit" className="confirm">
              Confirm
            </Button>
          </div>
        </ConfirmContainer>
      ) : isBooked ? (
        <ConfirmContainer>
          <img src="icons/appointment-icons/success.png" alt="Success" />
          <div> Appointment Booked Successfully</div>
        </ConfirmContainer>
      ) : (
        <ConfirmContainer>
          <img src="icons/appointment-icons/error.png" alt="Failed" />
          <div> Failed to Book Appointtment. Please try Later</div>
        </ConfirmContainer>
      )}
    </>
  );
}

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 2rem;
  padding: 3rem 0;

  .date-picker {
    padding: 1rem 3rem;
    text-align: center;
    font-size: 1.6rem;
  }
`;

const Select = styled.select`
  padding: 1rem 2rem;
  background-color: #ffff;
  border: 0.1rem solid grey;
  text-align: center;
  font-size: 1.6rem;
`;

const TimeContainer = styled.div`
  display: grid;
  grid-template-columns: 9rem 9rem 9rem 9rem 9rem 9rem 9rem;
  grid-template-rows: 5rem 5rem;
  gap: 2rem 2rem;

  justify-items: center;
  align-items: center;
`;

const Time = styled.div`
  border: solid;

  font-size: 1.4rem;
  text-align: center;

  padding: 1rem;
  width: 100%;

  cursor: pointer;

  border-color: ${(props) => {
    return props.id === props.time ? "white" : "grey";
  }};

  background-color: ${(props) => {
    return props.id === props.time ? "#3d7cc9" : "white";
  }};

  color: ${(props) => {
    return props.id === props.time ? "white" : "black";
  }};
`;

const Button = styled.button`
  padding: 1rem 5.7rem;

  border: none;
  border-radius: 0.4rem;

  font-size: 1.6rem;
  font-weight: 800;

  color: #ffff;
  background-color: #3d7cc9;

  cursor: pointer;
`;

const ConfirmContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: left;

  gap: 2rem;
  padding: 3rem 0;

  div {
    font-size: 2rem;
    font-weight: 800;
    color: #505257;
  }

  div button {
    margin: 1rem 2rem;
  }

  .confirm {
    background-color: #28bf5b;
  }

  .back {
    background-color: #f01d2b;
  }
`;
