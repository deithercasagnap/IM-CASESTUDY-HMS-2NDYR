import React from 'react'
import DoctorNavbar from '../components/DoctorLandingPageComponents/DoctorNavbar'
import DoctorHome from '../components/DoctorLandingPageComponents/DoctorHome'
import CardDiv from '../components/DoctorLandingPageComponents/CardDiv'
import DataFromDB from '../components/DoctorLandingPageComponents/DataFromDB'
import TableTRY from '../components/DoctorLandingPageComponents/TableTRY'
import TryAgain from '../components/DoctorLandingPageComponents/TryAgain'


const HomeDoctor = () => {
  return (
    <>
  
      <DoctorNavbar/>
      
      {/* <TryAgain/> */}
      {/* <TableTRY/> */}
      {/* <DataFromDB/> */}
      <DoctorHome/>
      <CardDiv/>
      {/* <PatientTable/> */}
    </>
  )
}

export default HomeDoctor