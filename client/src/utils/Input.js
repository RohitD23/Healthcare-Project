import React from "react";
import styled from "styled-components";

export default function Input({
  width,
  type,
  value,
  name,
  label,
  handleChange,
}) {
  return (
    <InputContainer inputWidth={width}>
      <input type={type} value={value} name={name} onChange={handleChange} />
      <label className={value && "filled"}>{label}</label>
    </InputContainer>
  );
}

const InputContainer = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;

  margin: 0.5rem;

  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type="number"] {
    -moz-appearance: textfield;
  }

  input {
    height: 5rem;
    width: ${(props) => `${props.inputWidth}rem` || "100%"};
    outline: none;

    line-height: 1;
    font-size: 1.4rem;

    border: none;
    border-radius: 0.4rem;
    box-shadow: 0 0 0 0.1rem #6f81a5;

    padding-left: 1.5rem;
    padding-top: 1.5rem;

    transition: 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  }

  input:focus {
    box-shadow: 0 0 0 0.2rem #3d7cc9;
  }

  label {
    position: absolute;

    pointer-events: none;

    transform: translate(0, 2rem) scale(1);
    transform-origin: top left;
    transition: 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;

    color: #6f81a5;

    font-size: 1.4rem;
    line-height: 1;
    left: 1.6rem;
  }

  &:focus-within label {
    transform: translate(0, 1rem) scale(0.8);
    color: #3d7cc9;
  }

  .filled {
    transform: translate(0, 1rem) scale(0.8);
  }
`;
