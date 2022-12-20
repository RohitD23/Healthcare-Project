import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import styled from 'styled-components';

/*
reviewData has format {
    id: number,
    nStars: number,
    title: string,
    description: string,
    age: string,
    reviewerName: string
}
*/

const Review = ({reviewData}) => {

    const StarsJSX = [];
    for(let i = 0; i < reviewData.nStars; i++) {
        StarsJSX.push(<AiFillStar key={i} style={{ color: "#ff8300", scale: "2.5", margin: "0 1rem" }} />)
    }

    return (
        <ReviewContainer>
            <Header>
                <RatingContainer>
                    <StarsContainer>{ StarsJSX }</StarsContainer>
                    <RatingText>{ reviewData.nStars.toString() + '/5' }</RatingText>
                </RatingContainer>
                <ReviewTitle>{ reviewData.title }</ReviewTitle>
                <ReviewAge>{ reviewData.age }</ReviewAge>
            </Header>
            <DividerLine></DividerLine>
            <Description>
                { reviewData.description }
                <ReviewerName>{ '- ' + reviewData.reviewerName }</ReviewerName>
            </Description>
        </ReviewContainer>
    )
}

export default Review;

const blue =  "rgba(61, 124, 201, 1)";

const ReviewContainer = styled.div`
    width: 80%;
    height: fit-content;
    margin: 1rem;
    border: 1px solid black;

    display: flex;
    flex-direction: column;
`

const Header = styled.div`
    max-width: 100%;
    height: fit-content;
    display: flex;
    align-items: center;
    padding: 0.5rem 2rem;
    background-color: ${blue};
`

const RatingContainer = styled.div`
    width: fit-content;
    display: flex;
    align-items: center;
`

const StarsContainer = styled.div`
    width: fit-content;
    height: fit-content;
    min-width: 100px;
    margin: 0 1rem;
    display: inline-flex;
`

const RatingText = styled.div`
  font-size: 1.5rem;
  margin: 0 1rem;
  color: #505257;
  font-weight: 800;
`;

const ReviewTitle = styled.div`
    margin: 0 1rem;
    font-size: 2rem;
    color: white;
    
`

const ReviewAge = styled.div`
    margin-right: 0;
    margin-left: auto;

    font-size: 1.5rem;
    color: white;
`

const DividerLine = styled.div`
    width: 100%;
    height: 1px;
    background-color: grey;
`

const Description = styled.div`
    max-width: 100%;
    height: fit-content;
    padding: 1rem 2rem;
    font-size: 1.5rem;
    text-align: left;
`

const ReviewerName = styled.div`
    font-size: 1.5rem;
    color: grey;
`