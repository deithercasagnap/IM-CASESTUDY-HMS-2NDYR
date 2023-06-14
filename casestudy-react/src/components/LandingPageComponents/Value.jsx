import React from 'react'
import NavBar from './NavBar'


//imported icon from react-icons ====
import {AiFillInstagram} from 'react-icons/ai'
import {BsFacebook} from 'react-icons/bs'
import {AiOutlineTwitter} from 'react-icons/ai'

//imported images from assets ====
import logo1 from '../../assets/logo1.jpg'
import sam from '../../assets/sam.jpg'
import cyd from '../../assets/cyd.jpg'
import joy from '../../assets/joy.jpg'
import kyt from '../../assets/kyt.jpg'

const Value = () => {
  return (

    <>

      <div id='ourteam' className='mb-[4rem] mt-[1rem] '>

        <h1 className='text-greenColor text-[30px] py-[2rem] pb-[10px] w-[400px] block ms-8'>
          OUR TEAM
        </h1>

        <p className='block text-[16px] text-slate-600 font-semibold ms-[2rem] me-[2rem] mt-3'>
          Meet the four diligent and driven students embarked on a remarkable journey to develop a groundbreaking hospital management system. Their unwavering determination and tireless efforts led them on a path of innovation and collaboration.
        </p>
        
        <div className='grid gap-2 grid-cols-4 items-center m-5 mt-10'>

          <div className='singleGrid text-center justify-center rounded-[10px] hover:bg-[#f7edf5] p-[5px] border-[1px] border-greenColor'>
          
            <div className='flex justify-center'> 
              <img src={sam} alt="" className=' border-[1px] border-greenColor rounded-full items-center h-[150px] w-[150px]'/>
            </div>
            
            <h4 className='font-bold text-blueColor text-[18px] mt-5'>
                CASAGNAP, DEITHER
            </h4>

            <span className='font-semibold text-slate-600 text-[15px] mt-5'>
              CEO-FOUNDER
            </span>

            <p className='block text-[13px] text-slate-600 py-[10px] font-semibold '>
              Possesses a strong understanding of user interface (UI) design principles and use various tools and technologies to bring the designs to life on the web.
            </p>

            <div className='icons flex justify-center gap-4'>
              <AiFillInstagram className=' bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-blueColor'/>
              <BsFacebook className=' bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-blueColor'/>
              <AiOutlineTwitter className=' bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-blueColor'/>
          
            </div>

          </div>

          <div className='singleGrid text-center justify-center rounded-[10px] hover:bg-[#f7edf5] p-[5px] border-[1px] border-greenColor'>
          
          <div className='flex justify-center'> 
            <img src={cyd} alt="" className=' border-[1px] border-greenColor rounded-full items-center h-[150px] w-[150px]'/>
          </div>
          
          <h4 className='font-bold text-blueColor text-[18px] mt-5'>
            JUARIO, CYD
          </h4>

          <span className='font-semibold text-slate-600 text-[15px] mt-5'>
            CEO-FOUNDER
          </span>

          <p className='block text-[13px] text-slate-600 py-[10px] font-semibold '>
            Skilled problem solver who possess logical thinking and analytical abilities, to design efficient and functional solutions to various software-related challenges.
          </p>

          <div className='icons flex justify-center gap-4'>
            <AiFillInstagram className=' bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-blueColor'/>
            <BsFacebook className=' bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-blueColor'/>
            <AiOutlineTwitter className=' bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-blueColor'/>
        
          </div>

          </div>

          <div className='singleGrid text-center justify-center rounded-[10px] hover:bg-[#f7edf5] p-[5px] border-[1px] border-greenColor'>
          
            <div className='flex justify-center'> 
              <img src={joy} alt="" className=' border-[1px] border-greenColor rounded-full items-center h-[150px] w-[150px]'/>
            </div>
            
            <h4 className='font-bold text-blueColor text-[18px] mt-5'>
                TAUTOAN, JOY
            </h4>

            <span className='font-semibold text-slate-600 text-[15px] mt-5'>
              CEO-FOUNDER
            </span>

            <p className='block text-[13px] text-slate-600 py-[10PX] font-semibold '>
              Collects, organizes, and interprets large sets of data to derive insights, identify patterns, and make informed decisions and optimize operations.
            </p>

            <div className='icons flex justify-center gap-4'>
              <AiFillInstagram className=' bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-blueColor'/>
              <BsFacebook className=' bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-blueColor'/>
              <AiOutlineTwitter className=' bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-blueColor'/>
          
            </div>

          </div>

          <div className='singleGrid text-center justify-center rounded-[10px] hover:bg-[#f7edf5] p-[5px] border-[1px] border-greenColor'>
          
            <div className='flex justify-center'> 
              <img src={kyt} alt="" className=' border-[1px] border-greenColor rounded-full items-center h-[150px] w-[150px]'/>
            </div>
            
            <h4 className='font-bold text-blueColor text-[18px] mt-5'>
              EDOL, KYT
            </h4>

            <span className='font-semibold text-slate-600 text-[15px] mt-5'>
              CEO-FOUNDER
            </span>

            <p className='block text-[13px] text-slate-600 py-[10px] font-semibold '>
              Structures the data infrastructure, develop strategies to ensure efficient data storage, integration, and retrieval, while maintaining data security and integrity.
            </p>

            <div className='icons flex justify-center gap-4'>
              <AiFillInstagram className=' bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-blueColor'/>
              <BsFacebook className=' bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-blueColor'/>
              <AiOutlineTwitter className=' bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-blueColor'/>
          
            </div>

          </div>

        </div>


      </div>
    </>
  )
}

export default Value