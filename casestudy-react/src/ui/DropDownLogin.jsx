import React from 'react'
import "./style/DropDownStyle.css"


const DropDownLogin = () => {
  return (
    <div className='flex flex-col dropdownLogin'>
        <ul className='flex flex-col gap-4'>
            <li className='text-[#6f6f6f]'>Professional</li>
            <li className='text-[#6f6f6f]'>Patient</li>
        </ul>
    </div>
  )
}

export default DropDownLogin