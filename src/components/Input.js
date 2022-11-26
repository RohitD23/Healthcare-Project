import React, { useState } from "react";
import styled from "styled-components";

export default function Input({ type, label, height }) {
  const [value, setValue] = useState("");

  function handleChange(e) {
    setValue(e.target.value);
  }

  return (
    <InputContainer inputHeight={height}>
      <input type={type} value={value} onChange={handleChange} />
      <label className={value && "filled"}>{label}</label>
    </InputContainer>
  );
}

const InputContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 0.5rem;

  input {
    height: ${(props) => props.inputHeight || 4}rem;
    border: none;
    outline: none;
    line-height: 1;
    font-size: 1.4rem;
    border-radius: 0.4rem;
    box-shadow: 0 0 0 0.1rem #6f81a5;
    padding: 2.4rem 1.6rem 0.4rem 1.6rem;
    transition: 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  }

  input:focus {
    box-shadow: 0 0 0 0.2rem #178066;
  }

  label {
    position: absolute;
    pointer-events: none;
    transform: translate(0, 2rem) scale(1);
    transform-origin: top left;
    transition: 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
    color: #6f81a5;
    font-size: 1.4rem;
    line-height: 0;
    left: 1.6rem;
  }

  &:focus-within label {
    transform: translate(0, 1.2rem) scale(0.8);
    color: #178066;
  }

  .filled {
    transform: translate(0, 1.2rem) scale(0.8);
  }
`;
