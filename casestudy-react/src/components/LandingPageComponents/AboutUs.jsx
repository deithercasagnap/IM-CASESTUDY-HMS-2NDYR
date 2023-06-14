import React from 'react'

// imported icons from react-icons ===>
import {AiOutlineSearch} from 'react-icons/ai'
import {AiOutlineCloseCircle} from 'react-icons/ai'
import {BsHouseDoor} from 'react-icons/bs'
import {CiLocationOn} from 'react-icons/ci'



//imported images from assets ====
import logo1 from '../../assets/logo1.jpg'
import NavBar from './NavBar'

const AboutUs = () => {
  return (

    <>

  
      <div id='aboutus' className='mb-[4rem] mt-[2rem] '>



        <h1 className='text-greenColor text-[30px] py-[2rem] pb-[10px] w-[400px] block ms-8'>
          ABOUT US
        </h1>

        <h6 className='text-blueColor text-end text-[20px] border-b-[1px] py-[1rem] w-[650px] pb-[10px] block ms-[2rem]'>
          "Putting Safety First: Your Well-being, Our Priority."
        </h6>

        <div className='grid gap-4 grid-cols-2 text-end leading-10 items-center ms-[80px] '>
          <span className=' text-[16px] text-slate-600 font-semibold ms-[2rem] me-[2rem] mt-3'>
            Due to the COVID-19 pandemic and the mandatory lockdown measures, the Information Technology Students at the University of Science & Technology of Southern Philippines has implemented an online hospital management system. This initiative involves healthcare professionals who will provide assistance to any patients regarding their health issues. Through this system, individuals from anywhere can securely access their medical histories and seek appointments, ensuring a fast and hassle-free transaction.
          </span>

          <div className='flex justify-center items-start'> 
            <img src={logo1} alt="" className=' rounded-full h-[300px] w-[300px]'/>
          </div>


        </div>

      </div>

    </>
  )
}

export default AboutUs