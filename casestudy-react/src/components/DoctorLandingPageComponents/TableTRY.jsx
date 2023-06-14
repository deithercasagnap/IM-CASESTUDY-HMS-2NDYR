import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


const TableTRY = () => {

    const [userData, setUserData]= useState([]);

    useEffect(() =>{
        const getUserData = async()=>{
            const reqData = await fetch("http://localhost:5000/api/get");
            const resData = await reqData.json();
            setUserData(resData);
            console.log(resData);
        }
        getUserData();
    }, []);
    
  return (

    <React.Fragment>
        <div>
            
            <table className="grid grid-cols-14 justify-center text-[8px]" selectableRows
                        fixedHeader>
                <thead>
                    <tr>
                    <th>Number</th>
                    <th>Patient Number</th>
                    <th>First Name</th>
                    <th>Last</th>
                    <th>Age</th>
                    <th>Sex</th>
                    <th>Address</th>
                    <th>City</th>
                    <th>Phone Number</th>
                    <th>Entry Date</th>
                    <th>Doctor Number</th>
                    <th>Diagnosis</th>
                    <th>Department Code</th>
                    <th>Action</th>

                    </tr>
                </thead>
                <tbody>
                {data.map((item, index) =>{
                        return (
                            <tr className='bg-white border-[1px] border-none hover:bg-gray-50 dark:hover:bg-gray-100'
                                key={item.id}>
                            
                                <th scope="row">{index+1}</th>
                                <td>{item.patient_number}</td>
                                <td>{item.first_name}</td>
                                <td>{item.last_name}</td>
                                <td>{item.age}</td>
                                <td>{item.sex}</td>
                                <td>{item.address}</td>
                                <td>{item.city}</td>
                                <td>{item.phone_number}</td>
                                <td>{item.entry_date}</td>
                                <td>{item.doctor_number}</td>
                                <td>{item.diagnosis}</td>
                                <td>{item.department_code}</td>
                                
                                <td>
                                    <Link to={`/update/${item.patient_number}`} >
                                        <button className='border-[1px] border-greenColor px-3 py-1 m-2 rounded-md hover:bg-greenColor hover:textwhite '>Update</button>
                                    </Link>
                                        <button className='border-[1px] border-greenColor px-3 py-1 m-2 rounded-md hover:bg-greenColor hover:textwhite ' onClick={() => deleterPatient(item.patient_number)}>Delete</button>
                                    <Link to={`/view/${item.patient_number}`} >
                                        <button className='border-[1px] border-greenColor px-3 py-1 m-2 rounded-md hover:bg-greenColor hover:textwhite '>View</button>
                                    </Link>
                                </td>

                            </tr>
                        )
                    })}
                </tbody>
            </table>











            
        </div>
    </React.Fragment>
  )
}

export default TableTRY