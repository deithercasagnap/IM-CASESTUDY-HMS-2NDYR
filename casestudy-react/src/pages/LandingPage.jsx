import React from 'react'
import NavBar from '../components/LandingPageComponents/NavBar'
import Jobs from '../components/LandingPageComponents/Jobs'
import Value from '../components/LandingPageComponents/Value'
import Footer from '../components/LandingPageComponents/Footer'
import AboutUs from '../components/LandingPageComponents/AboutUs'

const LandingPage = () => {
  return (
    <div className='m-auto bg-white'>
        <NavBar/>
        <Jobs/>
        <AboutUs/>
        <Value/>
        <Footer/>
  </div>
  )
}

export default LandingPage