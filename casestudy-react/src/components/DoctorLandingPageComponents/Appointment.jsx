
import { useState } from 'react'
import * as React from 'react'
import DataTable from 'react-data-table-component'

// imported icons from react-icons ===>
import {AiOutlineSearch} from 'react-icons/ai'
import {BsPencilSquare} from 'react-icons/bs'

function Appointment() {

  const columns = [
    {
        name: 'Name',
        selector: row => row.name

    },
    {
        name: 'Description',
        selector: row => row.description

    },
    {
        name: 'Meeting Schedule',
        selector: row => row.meetingschedule
    },
    {
        name: 'Location',
        selector: row => row.location
    }
  ]

  const data = [
    {
      customerID: 1001,
      name: 'Danica Sesles',
      description: 'Expanding the hospital area.',
      meetingschedule: 'March 6, 2023',
      location: '3RD Floor HMS USTP-CDO'

    },
    {
      CustomerID: 1002,
      name: 'Danica Sesles',
      description: 'Expanding the hospital area.',
      meetingschedule: 'March 6, 2023',
      location: '3RD Floor HMS USTP-CDO'
    },
    {
      CustomerID: 1003,
      name: 'Danica Sesles',
      description: 'Expanding the hospital area.',
      meetingschedule: 'March 6, 2023',
      location: '3RD Floor HMS USTP-CDO'
    },
    {
      CustomerID: 1002,
      name: 'Danica Sesles',
      description: 'Expanding the hospital area.',
      meetingschedule: 'March 6, 2023',
      location: '3RD Floor HMS USTP-CDO'
    },
    {
      CustomerID: 1004,
      name: 'Danica Sesles',
      description: 'Expanding the hospital area.',
      meetingschedule: 'March 6, 2023',
      location: '3RD Floor HMS USTP-CDO'
    },
   {
    CustomerID: 1005,
    name: 'Danica Sesles',
    description: 'Expanding the hospital area.',
    meetingschedule: 'March 6, 2023',
    location: '3RD Floor HMS USTP-CDO'
    },
    {
      CustomerID: 1002,
      name: 'Danica Sesles',
      description: 'Expanding the hospital area.',
      meetingschedule: 'March 6, 2023',
      location: '3RD Floor HMS USTP-CDO'
    },
    {
      CustomerID: 1003,
      name: 'Danica Sesles',
      description: 'Expanding the hospital area.',
      meetingschedule: 'March 6, 2023',
      location: '3RD Floor HMS USTP-CDO'
    },
    {
      CustomerID: 1002,
      name: 'Danica Sesles',
      description: 'Expanding the hospital area.',
      meetingschedule: 'March 6, 2023',
      location: '3RD Floor HMS USTP-CDO'
    },
    {
      CustomerID: 1004,
      name: 'Danica Sesles',
      description: 'Expanding the hospital area.',
      meetingschedule: 'March 6, 2023',
      location: '3RD Floor HMS USTP-CDO'
    },
   {
    CustomerID: 1005,
    name: 'Danica Sesles',
    description: 'Expanding the hospital area.',
    meetingschedule: 'March 6, 2023',
    location: '3RD Floor HMS USTP-CDO'
    },
    {
      CustomerID: 1002,
      name: 'Danica Sesles',
      description: 'Expanding the hospital area.',
      meetingschedule: 'March 6, 2023',
      location: '3RD Floor HMS USTP-CDO'
    },
    {
      CustomerID: 1003,
      name: 'Danica Sesles',
      description: 'Expanding the hospital area.',
      meetingschedule: 'March 6, 2023',
      location: '3RD Floor HMS USTP-CDO'
    },
    {
      CustomerID: 1002,
      name: 'Danica Sesles',
      description: 'Expanding the hospital area.',
      meetingschedule: 'March 6, 2023',
      location: '3RD Floor HMS USTP-CDO'
    },
    {
      CustomerID: 1004,
      name: 'Danica Sesles',
      description: 'Expanding the hospital area.',
      meetingschedule: 'March 6, 2023',
      location: '3RD Floor HMS USTP-CDO'
    },
   {
    CustomerID: 1005,
    name: 'Danica Sesles',
    description: 'Expanding the hospital area.',
    meetingschedule: 'March 6, 2023',
    location: '3RD Floor HMS USTP-CDO'
    },
    {
      CustomerID: 1002,
      name: 'Danica Sesles',
      description: 'Expanding the hospital area.',
      meetingschedule: 'March 6, 2023',
      location: '3RD Floor HMS USTP-CDO'
    },
    {
      CustomerID: 1003,
      name: 'Danica Sesles',
      description: 'Expanding the hospital area.',
      meetingschedule: 'March 6, 2023',
      location: '3RD Floor HMS USTP-CDO'
    },
    {
      CustomerID: 1002,
      name: 'Danica Sesles',
      description: 'Expanding the hospital area.',
      meetingschedule: 'March 6, 2023',
      location: '3RD Floor HMS USTP-CDO'
    },
    {
      CustomerID: 1004,
      name: 'Danica Sesles',
      description: 'Expanding the hospital area.',
      meetingschedule: 'March 6, 2023',
      location: '3RD Floor HMS USTP-CDO'
    },
   {
    CustomerID: 1005,
    name: 'Danica Sesles',
    description: 'Expanding the hospital area.',
    meetingschedule: 'March 6, 2023',
    location: '3RD Floor HMS USTP-CDO'
    }
  
  ]

  const [records, setRecords] = useState(data);

  function handleFilter(event) {
    const newData = data.filter(row => {
        return row.name.toLowerCase().includes(event.target.value.toLowerCase())
    })
    setRecords(newData)
  }
  return (
    <>


        <div className='flex justify-center mt-7'>
        
            <div className='container justify-center text-center text-textColor border-[1px]'>
                
                <div className='flex items-center ms-5 mt-5' >
                    <BsPencilSquare className='text-[20px] me-2 icon '/>
                    <h4 className='text-greenColor text-[30px]'>APPOINTMENT</h4>
                </div>

                <div className='grid grid-cols-2 items-center justify-between border-b-[1px]'>

                    <div className='flex justify-start'>
                        <div className=' bg-blueColor  justify-center rounded-full hover:bg-slate-200 m-2'>
                            <button className='text-white text-[13px] p-2  hover:text-textColor'>Cancell Appointment</button>
                        </div>

                        <div className=' justify-center bg-greenColor rounded-full hover:bg-slate-200 m-2'>
                            <button className='text-white text-[13px] p-2  hover:text-textColor'>Re-schedule Appointment</button>
                        </div>

                        <div className=' justify-center bg-red-500 rounded-full hover:bg-slate-200 m-2'>
                            <button className='text-white text-[13px] p-2  hover:text-textColor'>Delete Appointment</button>
                        </div>
                    </div>
                
                    <div className='flex justify-end items-center me-5' >
                        <AiOutlineSearch className='text-[20px] me-1 icon'/>
                        <input className='ps-3 w-[50%] pt-2 pb-2 text-[13px] border-[1px] border-textColor p-1 rounded-[10px]' type="text" placeholder='Search Appointment Here...' onChange={handleFilter} />
                        
                    </div>

                </div>
                

                <div className='flex h-[440px] w-[100%] shadow-lg'>
                    <DataTable   
                        columns = {columns}
                        data = {records}
                        selectableRows
                        fixedHeader
                        // pagination
                    >
                    </DataTable>
                </div>

                
            </div>
        </div>
    </>
    
  )
}

export default Appointment;