import React, { useState, useEffect } from "react";
import styled from "styled-components";
import * as BiIcons from "react-icons/bi";

import { httpGetFeedback } from "../../../utils/request";
import Navbar from "../../../components/navbar/Navbar";

export default function Feedback() {
  const [page, setPage] = useState(1);
  const [limit] = useState(4);
  const [totalPages, setTotalPages] = useState(0);
  const [feedbacks, setFeedbacks] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    async function getFeedbacks() {
      setisLoading(true);

      const response = await httpGetFeedback(page, limit);
      setTotalPages(Math.ceil(response.count / limit));

      setFeedbacks(
        response.documents.map((doc) => {
          return (
            <FeedbackCard key={doc.email}>
              <div>
                <h2>
                  {doc.firstName} {doc.lastName}
                </h2>
                <p>{doc.feedback}</p>
              </div>
              <div className="reply">
                <Reply
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${doc.email}`}
                >
                  Reply
                </Reply>
              </div>
            </FeedbackCard>
          );
        })
      );

      setisLoading(false);
    }

    getFeedbacks();
  }, [page, limit]);

  useEffect(() => {}, [feedbacks]);

  return (
    <>
      <Navbar />
      {!isLoading ? (
        <Container>
          {feedbacks}

          <ChangePage>
            <button disabled={page === 1} onClick={() => setPage(page - 1)}>
              <BiIcons.BiSkipPrevious
                style={{ height: "3rem", width: "3rem" }}
              />
            </button>
            <p>
              {page} / {totalPages}
            </p>
            <button
              disabled={page === totalPages}
              onClick={() => setPage(page + 1)}
            >
              <BiIcons.BiSkipNext style={{ height: "3rem", width: "3rem" }} />
            </button>
          </ChangePage>
        </Container>
      ) : (
        <LoaderContainer>
          <Loader />
        </LoaderContainer>
      )}
    </>
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

const FeedbackCard = styled.div`
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

  .reply {
    display: flex;
    flex-direction: column;
    justify-content: center;

    margin-left: 2rem;
  }
`;

const Reply = styled.a`
  border: none;
  border-radius: 0.5rem;

  font-size: 1.4rem;
  cursor: pointer;

  color: #ffff;
  background-color: #3d7cc9;

  padding: 1rem;
  text-decoration: none;
`;

const ChangePage = styled.div`
  width: 50%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    font-size: 1.6rem;
  }

  button {
    margin: 0;
    padding: 0;

    border: none;
    background-color: #ffff;

    cursor: pointer;
  }
`;

const LoaderContainer = styled.div`
  height: 45vw;
  width: 110vw;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Loader = styled.div`
  border: 1rem solid #3d7cc9;
  border-radius: 50%;
  border-top: 1rem solid #ffff;
  border-bottom: 1rem solid #ffff;

  width: 10rem;
  height: 10rem;

  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
