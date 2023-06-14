import React from "react";
import { ToastContainer} from 'react-toastify';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';



//value is the about us page
import AboutUs from "../components/LandingPageComponents/AboutUs";
//value is the our team page
import Value from "../components/LandingPageComponents/Value";
//value is the contact us page
import Footer from "../components/LandingPageComponents/Footer";


//value is the navbar
import Jobs from "../components/LandingPageComponents/Jobs";

//value is the navbar
import NavBar2 from "../components/LandingPageComponents/NavBar2";

//value is the navbar
import NavBar from "../components/LandingPageComponents/NavBar";

import LoginDoctorDiv from "../components/LoginDoctorComponents/LoginDoctorDiv";
import LoginPatientDiv from "../components/LoginPatientComponents/LoginPatientDiv";
import HomeDoctor from "../pages/HomeDoctor";
import DoctorNavbar from "../components/DoctorLandingPageComponents/DoctorNavbar";
import Notification from "../components/DoctorLandingPageComponents/Notification";
import Appointment from "../components/DoctorLandingPageComponents/Appointment";


import HomePatient from "../pages/HomePatient";
import PatientNavbar from "../components/PatientLandingPageComponents/PatientNavbar";
import PTNotification from "../components/PatientLandingPageComponents/PTNotification";
import PTAppointment from "../components/PatientLandingPageComponents/PTAppointment";
import TryAgain from "../components/DoctorLandingPageComponents/TryAgain";
import ViewPatient from "../components/DoctorLandingPageComponents/ViewPatient";
import EntryPatients from "../components/DoctorLandingPageComponents/EntryPatients";
import AddPatients from "../components/DoctorLandingPageComponents/AddPatients";
import AdmitPatient from "../components/DoctorLandingPageComponents/AdmitPatient";
import DischargePatient from "../components/DoctorLandingPageComponents/DischargePatient";
import RoomDetails from "../components/DoctorLandingPageComponents/RoomDetails";
import RegularDoctor from "../components/PatientLandingPageComponents/RegularDoctor";
import DoctorOnCall from "../components/PatientLandingPageComponents/DoctorOnCall";
import Departments from "../components/PatientLandingPageComponents/Departments";
import LoginNurseDiv from "../components/LoginNurseComponents/LoginNurseDiv";
import HomeNurse from "../pages/HomeNurse";

const LandingPage = React.lazy(() => import("../pages/LandingPage"));


export default function AppRoute() {
  return (
    <>
      <BrowserRouter>

        <ToastContainer  position="top-center" />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="#job" element={<Jobs />} />
          <Route path="/logindoctordiv" element={[<NavBar2/>,<LoginDoctorDiv />]} />
          <Route path="/loginpatientdiv" element={[<NavBar2/>,<LoginPatientDiv />]} />
          <Route path="/loginnursediv" element={[<NavBar2/>,<LoginNurseDiv/>]} />
          <Route path="#aboutus" element={<AboutUs />} />
          <Route path="#ourteam" element={<Value />} />
          <Route path="#contactus" element={<Footer />} />
          <Route path="/homedoctor" element={<HomeDoctor  />} />
          <Route path="/notification" element={[<DoctorNavbar/>,<Notification/>]} />
          <Route path="/appointment" element={[<DoctorNavbar/>,<Appointment/>]} />
          <Route path="/entrypatients" element={[<DoctorNavbar/>,<EntryPatients/>]} />
          
          <Route path="/roomdetails" element={[<DoctorNavbar/>,<RoomDetails/>]} />

{/* 
          <Route path="/update/:patient_number" Component={AddEdit}/> */}
          
          <Route path="/admitpatient/:patient_number" element={[<DoctorNavbar/>, <AdmitPatient/>]}/>
          
          <Route path="/dischargepatient/:patient_number" element={[<DoctorNavbar/>,<DischargePatient/>]}/>
          <Route path="/viewpatient/:patient_number" element={[<DoctorNavbar/>,<ViewPatient/>]}/>
          
          <Route path="/addpatients" element={[<DoctorNavbar/>,<ViewPatient/>]}/>

          <Route path="/homepatient" element={<HomePatient  />} />
          <Route path="/ptnotification" element={[<PatientNavbar/>,<PTNotification/>]} />
          <Route path="/ptappointment" element={[<PatientNavbar/>,<PTAppointment/>]} />


          <Route path="/regulardoctor" element={[<PatientNavbar/>, <RegularDoctor/>]}/>
          <Route path="/doctoroncall" element={[<PatientNavbar/>, <DoctorOnCall/>]}/>
          <Route path="/departments" element={[<PatientNavbar/>, <Departments/>]}/>


          <Route path="/homenurse" element={<HomeNurse/>} />


        </Routes>
      </BrowserRouter>
    </>
  );
}
