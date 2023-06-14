import React from 'react'
import NavBar from './NavBar'

//imported icon from react-icons ====
import {AiFillInstagram} from 'react-icons/ai'
import {BsFacebook} from 'react-icons/bs'
import {AiOutlineTwitter} from 'react-icons/ai'
import {BsFillHouseDoorFill} from 'react-icons/bs'

import {MdAlternateEmail} from 'react-icons/md'
import {FiPhoneCall} from 'react-icons/fi'

//imported images from assets ====
import logo1 from '../../assets/logo1.jpg'


const Footer = () => {
  return (

    <>

      <div id='contactus' className='footer bg-blueColor  items-center justify-center mt-[6rem]' >

        <div className="flex bg-blueColor items-center justify-between p-3">
          <span className="ms-[2rem] text-white items-center text-[30px] font-bold  hover:text-white">Be connected with us to ensure your safety!</span>
          <div className='icons flex gap-4 me-[5rem]'>
              <AiFillInstagram className=' bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-blueColor'/>
              <BsFacebook className=' bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-blueColor'/>
              <AiOutlineTwitter className=' bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-blueColor'/>
          
          </div>
        </div>

        <div className='footer bg-white grid grid-cols-2  items-center justify-center'>
          <div className=" bg-white mt-10">
            <div className="logoDiv  bg-white">
              <div className='flex items-center justify-center  bg-white'>
                <img src={logo1} alt="Company Logo" className='h-[80px] w-[100px]'/>
                <div className=' text-center'>
                  <h1 className=" leading-none  align-text-top pe-0"><strong className="align-text-bottom text-center text-[35px] text-blueColor">HOSPITAL</strong></h1>
                  <span className='leading-none align-text-top text-[20px] text-greenColor'>Management System</span>
                </div>
              </div>
            </div>

            <p className='text-textColor pb-[13px] opacity-70 leading-7 m-5 p-5 text-center '>
              <u>Hospital Management System</u> is a comprehensive software solution that streamlines and automates various administrative and operational tasks within a healthcare institution, improving efficiency and enhancing patient care.
            </p>
          </div>


          <div className=' bg-white rounded-[10px] grid grid-cols-3 items-start' >

            <div className='grid '>
              <span className='divTitle text-[18px] font-semibold pb-[1.5rem] text-textColor'>
                Services
              </span>
              <div className='grid gap-3'>
                <li className='text-textColor text-[13px]  opacity-[.7] hover:opacity-[1]'>Physical Exam</li>
                <li className='text-textColor text-[13px]  opacity-[.7] hover:opacity-[1]'>Prescription Refill</li>
                <li className='text-textColor text-[13px]  opacity-[.7] hover:opacity-[1]'>Psychological</li>
                <li className='text-textColor text-[13px]  opacity-[.7] hover:opacity-[1]'>Guidance Counseling</li>
                <li className='text-textColor text-[13px]  opacity-[.7] hover:opacity-[1]'>Dental</li>
              </div>

            </div>

            <div className='grid '>
              <span className='divTitle text-[18px] font-semibold pb-[1.5rem] text-textColor'>
                Opening Hours
              </span>
              <div className='grid gap-3'>
                <li className='text-textColor text-[13px]  opacity-[.7] hover:opacity-[1]'>Weekly TimeTable</li>

              </div>

            </div>

            <div className='grid'>
              <span className='divTitle text-[18px] font-semibold pb-[1.5rem] text-textColor'>
                Contact Us
              </span>
              <div className='grid gap-3'>
                <li className='flex text-textColor text-[13px] opacity-[.7] hover:opacity-[1]'><BsFillHouseDoorFill className='text-[20px] text-textColor icon me-1'/>Ustp, CDO, 9000</li>
                <li className='flex text-textColor text-[13px]  opacity-[.7] hover:opacity-[1]'><MdAlternateEmail className='text-[20px] text-textColor icon me-1'/>hms_healthcare@gmail.com</li>
                <li className='flex text-textColor text-[13px]  opacity-[.7] hover:opacity-[1]'><FiPhoneCall className='text-[20px] text-textColor icon me-1'/>+63 928 320 3488</li>
                <li className='flex text-textColor text-[13px]  opacity-[.7] hover:opacity-[1]'><FiPhoneCall className='text-[20px] text-textColor icon me-1'/>+63 928 455 2491</li>
              </div>

            </div>
          </div>
        </div>

    
        <div className="bg-greenColor text-center text-textColor p-3">
              © 2023 Copyright:
              <a class="text-secondary" href="https://mdbootstrap.com/">BSIT-2R2-CASAGNAP-JUARIO-TAUTOAN-EDOL.com</a>
        </div>
  

        {/* <div className='grid'>
          <span className='divTitle text-[18px] font-semibold pb-[1.5rem] text-white'>
            Support
          </span>
          <div>
            <small className='text-[14px] text-white'>
              isratech8@outlook.com
            </small>

            <div className='icons flex gap-4 py-[1rem]'>
              <AiFillInstagram className='bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-blueColor'/>
              <BsFacebook className='bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-blueColor'/>
              <AiOutlineTwitter className='bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-blueColor'/>
          
            </div>

          </div>

        </div> */}
        
      </div>
    </>
  )
}

export default Footer