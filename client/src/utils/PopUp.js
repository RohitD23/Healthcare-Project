import React, { useEffect } from "react";
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";

export default function PopUp(props) {
  useEffect(() => {
    if (props.trigger) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [props.trigger]);

  return props.trigger ? (
    <Container>
      <PopUpContainer>
        <TopContainer>
          <CloseButton onClick={() => props.setTrigger(false)}>
            <AiOutlineClose
              style={{ width: "2.5rem", height: "2.5rem", color: "#fff" }}
            />
          </CloseButton>
        </TopContainer>
        {props.children}
      </PopUpContainer>
    </Container>
  ) : (
    ""
  );
}

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);

  display: flex;
  justify-content: center;
  align-items: center;
`;

const PopUpContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 90rem;
  border-radius: 1rem;
  background-color: #fff;
`;

const TopContainer = styled.div`
  height: 5.5rem;
  width: 100%;
  background-color: #3d7cc9;

  border-radius: 1rem 1rem 0 0;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1.6rem;
  right: 1.6rem;

  border: none;
  background: none;

  margin: 0;
  padding: 0;

  cursor: pointer;
`;
