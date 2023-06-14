import React, {useState, useEffect} from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import axios from 'axios';
import {toast} from 'react-toastify';


const initialState = {
    patient_number: "",
      first_name: "",
      last_name:"",
      age: "",
      sex: "",
      address: "",
      city: "",
      phone_number: "",
      entry_date: "",
      doctor_number: "",
      diagnosis:"",
      department_code: "",
      advance_payment: "",
      mode_of_payment:"",
      room_number: "",
      date_of_admission: "",
      initial_condition: "",
      treatment: "",
      attendant_name: ""
};


const AdmitPatient = () => {

const [state, setState] = useState(initialState);

const {first_name, last_name, age, sex	, address, city	, 
    phone_number	, entry_date	, doctor_number	, diagnosis	,department_code,
    advance_payment, mode_of_payment, room_number, date_of_admission, initial_condition, treatment, attendant_name
} =  state;

const history = useNavigate();

const {patient_number} = useParams();

useEffect(() => {
    axios.get(`http://localhost:5002/api/get/${patient_number}`).then((resp) => setState({...resp.data[0]}))
}, [patient_number])


const handleSubmit = (e) => {
    e.preventDefault();
    if(!patient_number || !first_name || !last_name || !age || !sex	 || !address	 || !city	 || !phone_number	 || !entry_date	 || !doctor_number	 || !diagnosis	 || !department_code ||
                    !advance_payment || !mode_of_payment || !room_number || !date_of_admission	 || !initial_condition	 || !treatment	 || !attendant_name){
    
        toast.error("Fill out all the necessary information!");
    }else {
            axios.post("http://localhost:5002/api/post/admit", {
            patient_number, 
            first_name, 
            last_name, 
            age, 
            sex	, 
            address	, 
            city	, 
            phone_number	, 
            entry_date	, 
            doctor_number	, 
            diagnosis	,
            department_code,
            advance_payment, 
            mode_of_payment, 
            room_number,
            date_of_admission, 
            initial_condition, 
            treatment, 
            attendant_name

        }).then(() => {
            setState({

                patient_number: "", 
                first_name: "", 
                last_name: "", 
                age: "", 
                sex	: "", 
                address	: "", 
                city	: "", 
                phone_number	: "", 
                entry_date	: "", 
                doctor_number: "", 
                diagnosis: "",
                department_code: "",
                advance_payment: "",
                mode_of_payment:"",
                room_number: "",
                date_of_admission: "",
                initial_condition: "",
                treatment: "",
                attendant_name: "" });

        }).catch((err) => toast.error(err.response.data));
        toast.success("Data Saved Successfully to the Admit Patient Table!");
        
        setTimeout(() =>  history.push("/"), 500);
    }
};

const handleInputChange = (e) => {
    const {name, value} = e.target;
    setState({...state, [name]: value})
};  


  return (
    <div className='m-10 border-[1px] border-greenColor p-7'>

        <div className=' mx-5 my-2 '>
            <h1 className='font-bold text-blueColor text-[30px] text-center mb-5'>ADMIT PATIENT DATA RECORD</h1>
        </div>

        <div className=' ms-10 text-[12px]'>
            <form  onSubmit={handleSubmit}>

                <div className=''>
                    <div className='grid grid-cols-2 gap-2'>

                        <div className='shadow-lg w-[400px]'>
                            <div className='flex justify-between mx-5 my-2 '>
                            <label htmlFor="patient_number">Patient Number</label>
                            <input className='ms-10 text-center border-[1px] border-greenColor' type="text" id='patient_number' name="patient_number" placeholder='Patient Number...' value={patient_number || ""} onChange={handleInputChange}/>
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
                            <label htmlFor="age">Age</label>
                            <input className='ms-10 text-center border-[1px] border-greenColor' type="number" id='age' name="age" placeholder='Age...' value={age || ""} onChange={handleInputChange}/>

                            </div>

                            <div className='flex justify-between mx-5 my-2 '>
                            <label htmlFor="sex">Sex</label>
                            <input className='ms-10 text-center border-[1px] border-greenColor' type="text" id='sex' name="sex" placeholder='Sex...' value={sex || ""} onChange={handleInputChange}/>
                            </div>
                            <div className='flex justify-between mx-5 my-2 '>
                                

                            <label htmlFor="address">Address</label>
                            <input className='ms-10 text-center border-[1px] border-greenColor' type="text" id='address' name="address" placeholder='Address...' value={address || ""} onChange={handleInputChange}/>
                            </div>
                            
                            <div className='flex justify-between mx-5 my-2 '>
                                

                            <label htmlFor="city">City</label>
                            <input className='ms-10 text-center border-[1px] border-greenColor' type="text" id='city' name="city" placeholder='City...' value={city || ""} onChange={handleInputChange}/>
                            </div>
                            
                            <div className='flex justify-between mx-5 my-2 '>
                                

                            <label htmlFor="phone_number">Phone Number</label>
                            <input className='ms-10 text-center border-[1px] border-greenColor' type="number" id='phone_number' name="phone_number" placeholder='Phone Number...' value={phone_number || ""} onChange={handleInputChange}/>
                            </div>
                            
                            <div className='flex justify-between mx-5 my-2 '>
                            

                            <label htmlFor="entry_date">Entry Date</label>
                            <input className='ms-10 text-center border-[1px] border-greenColor' type="date" id='entry_date' name="entry_date" placeholder='Entry Date...' value={entry_date || ""} onChange={handleInputChange}/>
                            </div>

                            <div className='flex justify-between mx-5 my-2 '>
                            <label htmlFor="doctor_number">Doctor Number</label>
                            <input className='ms-10 text-center border-[1px] border-greenColor' type="text" id='doctor_number' name="doctor_number" placeholder='Doctor Number...' value={doctor_number || ""} onChange={handleInputChange}/>
                            </div>
                            
                            <div className='flex justify-between mx-5 my-2 '> 
                            <label htmlFor="diagnosis">Diagnosis</label>
                            <input className='ms-10 text-center border-[1px] border-greenColor' type="text" id='diagnosis' name="diagnosis" placeholder='Diagnosis...' value={diagnosis} onChange={handleInputChange}/>
                            </div>

                            <div className='flex justify-between mx-5 my-2 '>
                            <label htmlFor="department_code">Department Code</label>
                            <input className='ms-10 text-center border-[1px] border-greenColor' type="number" id='department_code' name="department_code" placeholder='Department Code...' value={department_code} onChange={handleInputChange}/>
                            </div>  
                        </div>

                        <div className='shadow-lg'>
                            <div className='flex justify-between mx-5 my-2 '>
                            <label htmlFor="patient_number">Patient Number</label>
                            <input className='ms-10 text-center border-[1px] border-greenColor' type="text" id='patient_number' name="patient_number" placeholder='Patient Number...' value={patient_number || ""} onChange={handleInputChange}/>
                            </div>   

                            <div className='flex justify-between mx-5 my-2 '>
                            <label htmlFor="advance_payment">Advance Payment</label>
                            <input className='ms-10 text-center border-[1px] border-greenColor' type="number" id='advance_payment' name="advance_payment" placeholder='Advance Payment...' value={advance_payment || ""} onChange={handleInputChange}/>
                            </div>

                            <div className='flex justify-between mx-5 my-2 '>
                            <label htmlFor="mode_of_payment">Mode of Payment</label>
                            <input className='ms-10 text-center border-[1px] border-greenColor' type="text" id='mode_of_payment' name="mode_of_payment" placeholder='Mode of Payment...' value={mode_of_payment || ""} onChange={handleInputChange}/>

                            </div>

                            <div className='flex justify-between mx-5 my-2 '>
                            <label htmlFor="room_number">Room Number</label>
                            <input className='ms-10 text-center border-[1px] border-greenColor' type="number" id='room_number' name="room_number" placeholder='Room Number...' value={room_number || ""} onChange={handleInputChange}/>

                            </div>

                            <div className='flex justify-between mx-5 my-2 '>
                            <label htmlFor="department_code">Department Code</label>
                            <input className='ms-10 text-center border-[1px] border-greenColor' type="number" id='department_code' name="department_code" placeholder='Department Code...' value={department_code || ""} onChange={handleInputChange}/>
                            </div>
                            <div className='flex justify-between mx-5 my-2 '>
                                

                            <label htmlFor="date_of_admission">Date of Addmission</label>
                            <input className='ms-10 text-center border-[1px] border-greenColor' type="date" id='date_of_admission' name="date_of_admission" placeholder='Date of Admission...' value={date_of_admission || ""} onChange={handleInputChange}/>
                            </div>
                            
                            <div className='flex justify-between mx-5 my-2 '>
                                

                            <label htmlFor="initial_condition">Initial Condition</label>
                            <input className='ms-10 text-center border-[1px] border-greenColor' type="text" id='initial_condition' name="initial_condition" placeholder='Initial Condition...' value={initial_condition || ""} onChange={handleInputChange}/>
                            </div>
                            
                            <div className='flex justify-between mx-5 my-2 '>
                            <label htmlFor="diagnosis">Diagnosis</label>
                            <input className='ms-10 text-center border-[1px] border-greenColor' type="text" id='diagnosis' name="diagnosis" placeholder='Diagnosis...' value={diagnosis || ""} onChange={handleInputChange}/>
                            </div>
                            
                            <div className='flex justify-between mx-5 my-2 '>
                            <label htmlFor="treatment">Treatment</label>
                            <input className='ms-10 text-center border-[1px] border-greenColor' type="text" id='treatment' name="treatment" placeholder='Treatment Needed...' value={treatment || ""} onChange={handleInputChange}/>
                            </div>

                            <div className='flex justify-between mx-5 my-2 '>
                            <label htmlFor="doctor_number">Doctor Number</label>
                            <input className='ms-10 text-center border-[1px] border-greenColor' type="text" id='doctor_number' name="doctor_number" placeholder='Doctor Number...' value={doctor_number || ""} onChange={handleInputChange}/>
                            </div>
                            
                            <div className='flex justify-between mx-5 my-2 '> 
                            <label htmlFor="attendant_name">Attendant Name</label>
                            <input className='ms-10 text-center border-[1px] border-greenColor' type="text" id='attendant_name' name="attendant_name" placeholder='Attendant Name...' value={attendant_name} onChange={handleInputChange}/>
                            </div>



                            <div className='mt-5 mb-5'>
                                <input className='mx-3 px-10 py-1 rounded-full bg-blueColor text-white font-semibold hover:bg-blue-400' type="submit" value={"Save Data"} />
                    
                                <Link to="/entrypatients">
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

export default AdmitPatient