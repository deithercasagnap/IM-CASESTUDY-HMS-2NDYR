import React, {useState, useEffect} from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import axios from 'axios';
import {toast} from 'react-toastify';


const initialState = {
    doctor_number: "",
    first_name: "",
    last_name:"",
    qualification: "",
    phone_number: "",
    dc_address: "",
    fees_per_call: "",
    payment_due: "",
    department_code: "",
};


const DoctorOnCall = () => {

const [state, setState] = useState(initialState);

const {doctor_number, first_name, last_name, qualification, phone_number, dc_address, fees_per_call, payment_due, department_code} =  state;

const history = useNavigate();



const handleSubmit = (e) => {
    e.preventDefault();
    if(!doctor_number || !first_name || !last_name || !qualification || !phone_number	 || !dc_address	 || !fees_per_call	 || !payment_due || !department_code){
    
        toast.error("Fill out all the necessary information!");
    }else {
            axios.post("http://localhost:5002/api/post/dcadddata", {
                doctor_number, 
                first_name,
                last_name, 
                qualification, 
                phone_number, 
                dc_address, 
                fees_per_call, 
                payment_due,
                department_code

        }).then(() => {
            setState({

                doctor_number: "",
                first_name: "",
                last_name:"",
                qualification: "",
                phone_number: "",
                dc_address: "",
                fees_per_call: "",
                payment_due: "",
                department_code: "" });

        }).catch((err) => toast.error(err.response.data));
        toast.success("Data Saved Successfully to On-Call Doctor's Table!");
        
        setTimeout(() =>  history.push("/"), 500);
    }
};

const handleInputChange = (e) => {
    const {name, value} = e.target;
    setState({...state, [name]: value})
};  


  return (
    <div className='justify-center  p-7'>

        <div className=' mx-5 my-2 '>
            <h1 className='font-bold text-blueColor text-[30px] text-center mb-5'>CREATE NEWLY HIRED ON-CALL DOCTOR'S ACCOUNT</h1>
        </div>

        <div className='flex justify-center text-[14px] '>
            <form  onSubmit={handleSubmit}>

                <div className=' flex justify-center '>
                    <div className='container justify-between'>


                        <div className='shadow-2xl p-5'>

                            <div className='flex justify-between items-center  my-2 '>
                                <label htmlFor="doctor_number">Doctor Number</label>
                                <div className='justify-end items-center mx-5 '>
                                    <label htmlFor="doctor_number">DC - </label>
                                    <input className='text-center border-[1px] border-greenColor' type="number" id='doctor_number' name="doctor_number" placeholder='Doctor Number...' value={doctor_number || ""} onChange={handleInputChange}/>
                                </div>   
                            
                            </div>   

                            

                            <div className='flex justify-between mx-5 my-2 '>
                            <label htmlFor="first_name">First Name</label>
                            <input className='ms-10 text-center border-[1px] border-greenColor' type="text" id='first_name' name="first_name" placeholder='First Name...' value={first_name || ""} onChange={handleInputChange}/>
                            </div>

                            <div className='flex justify-between mx-5 my-2 '>
                            <label htmlFor="last_name">Last Name</label>
                            <input className='ms-10 text-center border-[1px] border-greenColor' type="text" id='last_name' name="last_name" placeholder='Last Name...' value={last_name || ""} onChange={handleInputChange}/>
                            </div>

                            <div className='flex justify-between mx-5 my-2 '>
                            <label htmlFor="qualification">Qualification</label>
                            <input className='ms-10 text-center border-[1px] border-greenColor' type="text" id='qualification' name="qualification" placeholder='Qualification...' value={qualification || ""} onChange={handleInputChange}/>
                            </div>

                            <div className='flex justify-between mx-5 my-2 '>
                            <label htmlFor="phone_number">Phone Number</label>
                            <input className='ms-10 text-center border-[1px] border-greenColor' type="number" id='phone_number' name="phone_number" placeholder='Phone Number...' value={phone_number || ""} onChange={handleInputChange}/>
                            </div>

                            <div className='flex justify-between mx-5 my-2 '>
                            <label htmlFor="dc_address">Address</label>
                            <input className='ms-10 text-center border-[1px] border-greenColor' type="text" id='dc_address' name="dc_address" placeholder='Address...' value={dc_address || ""} onChange={handleInputChange}/>
                            </div>
                            
                            <div className='flex justify-between mx-5 my-2 '>
                            <label htmlFor="fees_per_call">Fees Per Call</label>
                            <input className='ms-10 text-center border-[1px] border-greenColor' type="number" id='fees_per_call' name="fees_per_call" placeholder='Fees Per Call...' value={fees_per_call || ""} onChange={handleInputChange}/>
                            </div>
                            
                            <div className='flex justify-between mx-5 my-2 '>
                            <label htmlFor="payment_due">Payment Due</label>
                            <input className='ms-10 text-center border-[1px] border-greenColor' type="date" id='payment_due' name="payment_due" placeholder='Payment Due...' value={payment_due || ""} onChange={handleInputChange}/>
                            </div>

                            <div className='flex justify-between mx-5 my-2 '>
                            <label htmlFor="department_code">Department Code</label>
                            <input className='ms-10 text-center border-[1px] border-greenColor' type="number" id='department_code' name="department_code" placeholder='Department Code...' value={department_code || ""} onChange={handleInputChange}/>
                            </div>

                            <div className='flex justify-center mt-7 mb-5'>
                                <input className='mx-3 px-10 py-1 rounded-full bg-blueColor text-white font-semibold hover:bg-blue-400' type="submit" value={"Save Data"} />
                    
                                <Link to="/homepatient">
                                    <input className='mx-3 px-10 py-1 rounded-full bg-green-500 text-white font-semibold hover:bg-green-400' type="button" value="Go Back" />
                                
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
        

                
            </form>
        </div>
        
    </div>
  )
}

// addEdit

export default DoctorOnCall