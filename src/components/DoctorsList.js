import React from 'react'
import { useState, useEffect } from 'react'
import styled from 'styled-components'

import DoctorCard from './DoctorCard'
import { Doctors } from '../Doctors'

const Container = styled.div`
    height : fit-content;
    min-height : 50rem;
    
    padding : 5rem 10rem;

    display : flex;
    flex-direction : column;
    align-items : center;

    background : #00263e;
`

const Header = styled.div`
    font-size : 3.5rem;
    color : white;
    font-weight : 600;
`

const DoctorsListContainer = styled.div`
    width : 100%;
    
    display : flex;
    flex-wrap : wrap;
    justify-content : center;
`

const DoctorsList = () => {

    const [doctorsInfoJSX, setDoctorsInfoJSX] = useState([]);


    const SetList = () => {
        const doctorsInfoTemp = [];

        Doctors.forEach((doctor) => {
            doctorsInfoTemp.push(
                <DoctorCard doctorInfo={doctor}></DoctorCard>
            );
        })

        setDoctorsInfoJSX(doctorsInfoTemp);
    }

    useEffect(() => {
        SetList();
    }, []);

  return (
    <Container>
        <Header>Our Doctors in Mumbai</Header>
        <DoctorsListContainer>
            {doctorsInfoJSX}
        </DoctorsListContainer>
    </Container>
  )
}

export default DoctorsList