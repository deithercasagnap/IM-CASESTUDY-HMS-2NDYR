
import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
// imported icons from react-icons ===>
import axios from 'axios';
import {AiOutlineSearch} from 'react-icons/ai'
import {FaUsers} from 'react-icons/fa'

const TryAgain = () => {


    const [userData, setUserData]= useState([]);

    useEffect(() =>{
        const getUserData = async()=>{
            const reqData = await fetch("http://localhost:5001/api/get");
            const resData = await reqData.json();
            setUserData(resData);
            console.log(resData);
           
        }
        getUserData();
        
    }, []);

    function handleFilter(event) {
        const newData = userData.filter(row => {
            return row.userData.toLowerCase().includes(event.target.value.toLowerCase())
        })
        setRecords(newData)
    }


    
    const [data,setData] = useState([]);


    const loadData = async() => {
        const response = await axios.get("http://localhost:5001/api/get");
        setData(response.data);

       
    };
    useEffect (() => {
         loadData();
    }, []);

    const deleterPatient = (patient_number) => {
        if(window.confirm("Are You Sure You want To Delete Patient?")){
            axios.delete(`http://localhost:5001/api/remove/${patient_number}`);
            toast.success("Patient deleted Successfully!");
            setTimeout(() => loadData, 100);
        }
    };
    
  return (
    <div className='justify-center'>
        
        <div className=' justify-between mt-4'>
            <div className='grid grid-cols-2 items-center justify-between ms-3 me-3 border-b-[1px] py-[0.5rem] mb-3'>
                <div className='flex items-center' >
                    <FaUsers className='text-[20px] me-2 icon '/>
                    <h4>All Patients</h4>
                </div>

                <div className='flex justify-end items-center text-end ' >
                    <AiOutlineSearch className='text-[20px] me-1 icon'/>
                    <input className='ps-3 w-[50%] text-[13px] border-[1px] border-textColor p-1 rounded-[10px]' type="text" placeholder='Search Patient Here...' onChange={handleFilter} />
                    
                </div>
            </div>
        </div>

        <div class="flex  text-center  justify-center shadow-md m-5">

            <table className='w-full h-[200px] justify-center text-[12px] text-center font-light p-10' >
                <thead className=" text-[12px] ">

                    <tr>

                        <th className='px-2 m-5'>No.</th>
                        <th className='px-2 m-5'>Patient Number</th>
                        <th className='px-2 m-5'>First Name</th>
                        <th className='px-2 m-5'>Last</th>
                        <th className='px-2 m-5'>Age</th>
                        <th className='px-2 m-5'>Sex</th>
                        <th className='px-2 m-5'>Address</th>
                        <th className='px-2 m-5'>City</th>
                        <th className='px-2 m-5'>Phone Number</th>
                        <th className='px-2 m-5'>Entry Date</th>
                        <th className='px-2 m-5'>Doctor Number</th>
                        <th className='px-2 m-5'>Diagnosis</th>
                        <th className='px-2 m-5'>Department Code</th>
                        <th className='px-2 m-5'>Action</th>

                    </tr>
                </thead>
                <tbody className='my-5'>
                    {
                        userData.map((userData, index) =>(
                            <tr className='bg-white border-[1px] border-none hover:bg-gray-50 dark:hover:bg-gray-100'
                                key={index}>
                            
                                <td>{index+1}</td>
                                <td>{userData.patient_number}</td>
                                <td>{userData.first_name}</td>
                                <td>{userData.last_name}</td>
                                <td>{userData.age}</td>
                                <td>{userData.sex}</td>
                                <td>{userData.address}</td>
                                <td>{userData.city}</td>
                                <td>{userData.phone_number}</td>
                                <td>{userData.entry_date}</td>
                                <td>{userData.doctor_number}</td>
                                <td>{userData.diagnosis}</td>
                                <td>{userData.department_code}</td>
                                
                                <td>
                                    <Link to={`/update/${item.patient_number}`} >
                                        <button className='border-[1px] border-greenColor px-3 py-1 m-2 rounded-md hover:bg-greenColor hover:textwhite '>Update</button>
                                    </Link>
                                        <button className='border-[1px] border-greenColor px-3 py-1 m-2 rounded-md hover:bg-greenColor hover:textwhite ' onClick={() => deleterPatient(item.patient_number)}>Delete</button>
                                    <Link to={`/viewpatient/${item.patient_number}`} >
                                        <button className='border-[1px] border-greenColor px-3 py-1 m-2 rounded-md hover:bg-greenColor hover:textwhite '>View</button>
                                    </Link>
                                </td>

                            </tr>
                            ))
                    }
                
                
                </tbody>
            </table>
</div>



    </div>
  )
}

export default TryAgain