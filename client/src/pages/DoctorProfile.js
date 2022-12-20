import React from 'react'
import { useParams } from 'react-router-dom'
import { Doctors } from '../models/DoctorsData';
import { Reviews } from '../models/ReviewsData';
import styled from 'styled-components'

import Review from '../components/cards/Review';
import { AiFillStar } from 'react-icons/ai';

const DoctorProfile = () => {

    const { id } = useParams();
    const doctorInfo = Doctors[id];

    const StarsJSX = [];
    for(let i = 0; i < doctorInfo.rating; i++) {
        StarsJSX.push(<AiFillStar key={i} style={{ color: "#ff8300", scale: "2.5", margin: "0 1rem" }} />)
    }

    const reviewsData = Reviews.filter((review) => review.id == id);
    const ReviewsJSX = [];
    for(let i = 0; i < reviewsData.length; i++) {
        ReviewsJSX.push(<Review reviewData={reviewsData[i]}></Review>)
    }
    
    return (
        <PageContainer>
            <Header>
                <ProfilePhoto src={doctorInfo.img}></ProfilePhoto>
                <DoctorDetails>
                    <DoctorName>{ doctorInfo.name }</DoctorName>
                    <DoctorField>{ doctorInfo.field }</DoctorField>
                    <RatingContainer>
                        <StarsContainer>
                            { StarsJSX }
                        </StarsContainer>
                        <RatingText>{ doctorInfo.rating + "/5"}</RatingText>
                    </RatingContainer>
                    <BookAppointmentButton>Book Appointment</BookAppointmentButton>
                </DoctorDetails>
            </Header>
            <ReviewsContainer>
                <ReviewText>Reviews</ReviewText>
                { ReviewsJSX }
            </ReviewsContainer>
        </PageContainer>
    )
}

export default DoctorProfile

const blue = 'rgba(61, 124, 201, 1)';

const PageContainer = styled.div`
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;

    background-color: white;
`

const Header = styled.div`
    width: 100%;
    height: fit-content;
    padding: 50px 100px;

    display: flex;
    background-color: ${blue};
`

const ProfilePhoto = styled.img`
    height: 30rem;
    width: 30rem;
    border-radius: 1rem 1rem 0 0;
`;

const DoctorDetails = styled.div`
    width: fit-content;
    height: 100%;
    margin: 1rem 3rem;

    display: flex;
    flex-direction: column;
`

const DoctorName = styled.div`
    font-size: 3rem;
    margin: 1rem 0;
`

const DoctorField = styled.div`
    font-size: 1.5rem;
    margin: 1rem 0;
    color: #F0F0F0;
`

const RatingContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
`

const StarsContainer = styled.div`
    width: fit-content;
    height: fit-content;
    min-width: 100px;
    margin: 1rem 0;
    display: inline-flex;
`

const RatingText = styled.div`
  font-size: 1.5rem;
  margin: 0 1rem;
  color: #505257;
  font-weight: 800;
`;

const BookAppointmentButton = styled.button`
    width: fit-content;
    height: fit-content;
    margin: 1rem 0;
    padding: 0.5rem 1.5rem;

    background-color: ${blue};
    border: 1px solid white;
    border-radius: 100px;

    color: white;
    font-size: 1.5rem;
    font-weight: 800;
    cursor: pointer;
    transition: background-color 500ms, color 500ms, scale 150ms;

    &:hover {
        background-color: white;
        color: ${blue};
        transition: background-color 500ms, color 500ms;
    }

    // click animation
    &:active {
        scale: 0.95;
        transition: scale 150ms;
    }
`

const ReviewsContainer = styled.div`
    width: 100%;
    height: fit-content;
    padding: 2rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const ReviewText = styled.div`
    font-size: 3rem;
`