import React from "react";
import styled from "styled-components";
import useCollapse from "react-collapsed";
import { AiOutlinePlus } from "react-icons/ai";

export default function Facility({ title, info }) {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  const data = info.map((i) => <li key={i}>{i}</li>);

  return (
    <Container>
      <Button {...getToggleProps()} isExpanded={isExpanded}>
        {title} <AiOutlinePlus />
      </Button>
      <ul {...getCollapseProps()}>{data}</ul>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 1rem 0;

  ul {
    width: 50%;
    list-style: none;
  }

  li {
    font-size: 1.5rem;
    padding: 0.5rem;
    color: #505257;
  }
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 2rem;
  margin-bottom: 2rem;
  width: 65%;

  font-size: 1.6rem;

  border: none;
  border-radius: 1rem;

  cursor: pointer;

  background-color: ${(props) => {
    if (!props.isExpanded) return "#F8F6F0";
    else return "#3d7cc9";
  }};

  color: ${(props) => {
    if (!props.isExpanded) return "#3d7cc9";
    else return "#ffffff";
  }};
`;
