import React from 'react'
import NavBar from './NavBar'
//imported icon from react-icons ====
import {BiTimeFive} from 'react-icons/bi'


//imported images from assets ====
import logo1 from '../../assets/logo1.jpg'

//For all the jobs, we are going to use high order array method called Map...
// In this case, we shall list all the jobs into an array called Data...
const Data = [
  {
    id:1,
    image: logo1,
    title: 'Neurosurgeon',
    time:'Now',
    location: 'USTP-CDO',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem et ipsum quos impedit in laudantium quisquam omnis nostrum! Tenetur corporis sunt harum, eveniet impedit nemo vitae maiores ullam magni earum.',
    company: 'USTP-HMS'
  },
  {
    id:2,
    image: logo1,
    title: 'Pharmacist',
    time:'14hrs',
    location: 'USTP-Jasaan',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem et ipsum quos impedit in laudantium quisquam omnis nostrum! Tenetur corporis sunt harum, eveniet impedit nemo vitae maiores ullam magni earum.',
    company: 'USTP-HMS'
  },
  {
    id:3,
    image: logo1,
    title: 'Cardiothoracic Surgeon',
    time:'10hrs',
    location: 'USTP-Claveria',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem et ipsum quos impedit in laudantium quisquam omnis nostrum! Tenetur corporis sunt harum, eveniet impedit nemo vitae maiores ullam magni earum.',
    company: 'USTP-HMS'
  },
  {
    id:4,
    image: logo1,
    title: 'Anesthesiologist',
    time:'10hrs',
    location: 'USTP-CDO',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem et ipsum quos impedit in laudantium quisquam omnis nostrum! Tenetur corporis sunt harum, eveniet impedit nemo vitae maiores ullam magni earum.',
    company: 'USTP-HMS'
  },
  {
    id:5,
    image: logo1,
    title: 'OB/GYN',
    time:'Now',
    location: 'USTP-CDO',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem et ipsum quos impedit in laudantium quisquam omnis nostrum! Tenetur corporis sunt harum, eveniet impedit nemo vitae maiores ullam magni earum.',
    company: 'USTP-HMS'
  },
  {
    id:6,
    image: logo1,
    title: 'Janitor',
    time:'14hrs',
    location: 'USTP-Balubal',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem et ipsum quos impedit in laudantium quisquam omnis nostrum! Tenetur corporis sunt harum, eveniet impedit nemo vitae maiores ullam magni earum.',
    company: 'USTP-HMS'
  },
  {
    id:7,
    image: logo1,
    title: 'Nurse',
    time:'10hrs',
    location: 'USTP-CDO',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem et ipsum quos impedit in laudantium quisquam omnis nostrum! Tenetur corporis sunt harum, eveniet impedit nemo vitae maiores ullam magni earum.',
    company: 'USTP-HMS'
  },
  {
    id:8,
    image: logo1,
    title: 'Cashier',
    time:'10hrs',
    location: 'USTP-Claveria',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem et ipsum quos impedit in laudantium quisquam omnis nostrum! Tenetur corporis sunt harum, eveniet impedit nemo vitae maiores ullam magni earum.',
    company: 'USTP-HMS'
  }

]

// this is a single company, let's see how to map it...

const Jobs = () => {
  return (

    
    <>

      <div id='job' className='mt-[6rem] bg-slate-100'>

        <div className=' flex bg-white pt-[2rem] text-center justify-center'>

          <div className=' text-center justify-center'>
            
            <h1 className=' text-blueColor text-center text-[20px] font-semibold'>Are you ready to switch a Career?</h1>
            <h1 className=' text-blueColor text-center text-[30px] font-bold'>BE PART OF OUR GROWING FAMILY</h1>
          
          </div>


        </div>

        <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10 shadow-2xl shadow-slate-100">
        {
          Data.map(({id, image, title, time, location, desc, company}) => {
            return (
              
            //this will return a single job post on the ID...
            
            <div key={id} className="group group/item singleJob w-[300px] p-[20px] bg-white rounded-[10px]
            hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg">
  
              <span className='flex justify-between items-center gap-4'>
                <div className='company flex items-center gap-2'>
    
                  <img src={image} alt="Company Logo" className='w-[10%]'/>
                  <span className='text-[15px] block group-hover:text-white'>
                    {company}
                  </span>

                </div>
                
                <span className='flex items-center text-red-700 gap-1'>
                  <BiTimeFive/>{time}
                </span>
              </span>
              <h6 className='text-[#ccc] text-[13px]'>{location}</h6>
              <h1 className='text-[16px] text-semibold text-textColor group-hover:text-white'>{title}</h1>
              <p className='text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white'>
                {desc}
              </p>
    

    
              <button className='border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold
                                  text-textColor hover:bg-white group-hover/item:text-textColor group-hover:text-textColor'>
                Apply Now
              </button>
  
            </div>
            )      
          })
        }

        </div>
      </div>
    </>
  )
}

export default Jobs