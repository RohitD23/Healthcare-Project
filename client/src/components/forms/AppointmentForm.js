import React, { useState, useEffect } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";

import { httpCheckUserLoggedIn } from "../../utils/request";

export default function AppointmentForm(props) {
  const navigate = useNavigate();

  useEffect(() => {
    async function checkUserLoggedIn() {
      const response = await httpCheckUserLoggedIn();
      console.log(response);
      if (!response.ok) navigate("/login", { state: { type: "patient" } });
    }

    checkUserLoggedIn();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const startDate = new Date();
  startDate.setDate(startDate.getDate() + 1);

  const endDate = new Date();
  endDate.setDate(endDate.getDate() + 7);

  const [date, setDate] = useState(startDate);

  const handleSubmit = async (event) => {
    event.preventDefault();
  };

  const handleTimeSelection = (event) => {
    this.setState({ selectedTime: event.target.value });
  };

  const timeSlots = [];
  for (let i = 11; i < 19; i++) {
    for (let j = 0; j < 2; j++) {
      const hour = (i % 12) + 1;
      if (hour !== 7 || j !== 1) {
        const minute = j * 30;
        const time = `${hour}:${minute.toString().padStart(2, "0")}`;
        const formattedTime = `${hour}:${minute
          .toString()
          .padStart(2, "0")} ${"PM"}`;
        timeSlots.push(
          <option key={time} value={time}>
            {formattedTime}
          </option>
        );
      }
    }
  }

  return (
    <FormContainer
      action=""
      onSubmit={(event) => handleSubmit(event)}
      width={props.width}
    >
      <Select name="doctors" id="doctors">
        <option value="">Select a Doctor</option>
        <option value="Dr 1">Dr 1</option>
        <option value="Dr 2">Dr 2</option>
        <option value="Dr 3">Dr 3</option>
        <option value="Dr 4">Dr 4</option>
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
      <Select id="appointment-time" onChange={handleTimeSelection}>
        <option value="">Select a time</option>
        {timeSlots}
      </Select>
      <Button type="submit">Book Appointment</Button>
    </FormContainer>
  );
}

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 2rem;
  padding: 3rem 0;

  .date-picker {
    padding: 1rem 1.9rem;
    text-align: center;
    font-size: 1.6rem;
  }
`;

const Button = styled.button`
  padding: 1rem 4.5rem;

  border: none;
  border-radius: 0.4rem;

  font-size: 1.6rem;
  font-weight: 800;

  color: #ffff;
  background-color: #3d7cc9;

  cursor: pointer;
`;

const Select = styled.select`
  padding: 1rem 5.5rem;
  background-color: #ffff;
  border: 0.1rem solid grey;
  text-align: center;
  font-size: 1.6rem;
`;
