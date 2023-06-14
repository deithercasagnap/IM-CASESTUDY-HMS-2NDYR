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
      department_code: ""
};


const ViewPatient = () => {

const [state, setState] = useState(initialState);

const {first_name, last_name, age, sex	, address, city	, phone_number	, entry_date	, doctor_number	, diagnosis	,department_code} =  state;

const history = useNavigate();

const {patient_number} = useParams();

useEffect(() => {
    axios.get(`http://localhost:5002/api/get/${patient_number}`).then((resp) => setState({...resp.data[0]}))
}, [patient_number])


const handleSubmit = (e) => {
    e.preventDefault();
    if(!patient_number || !first_name || !last_name || !age || !sex	 || !address	 || !city	 || !phone_number	 || !entry_date	 || !doctor_number	 || !diagnosis	 || !department_code){
        toast.error("Fill out all the necessary information!");
    }else {
            axios.post("http://localhost:5002/api/post", {
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
            department_code

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
                department_code: ""});
        }).catch((err) => toast.error(err.response.data));
        toast.success("Successfully admit added data!");
        
        setTimeout(() =>  history.push("/"), 500);
    }
};

const handleInputChange = (e) => {
    const {name, value} = e.target;
    setState({...state, [name]: value})
};  


  return (
    <div className=' m-10 justify-start border-[1px] border-greenColor w-[40%]'>

        <div className='justify-between mx-5 my-2 '>
            <h1 className='font-bold text-blueColor text-[30px]'>PATIENT DATA RECORD</h1>
        </div>

        <div className='flex ms-10 text-[12px]'>
            <form  onSubmit={handleSubmit}>
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
        
                <div className='mt-5 mb-5'>

                    <Link to={`/admitpatient/${patient_number}`}>
                         <input className='mx-3 px-10 py-1 rounded-full bg-blueColor text-white font-semibold hover:bg-blue-400' type="button" value="Admit"/>
                    
                    </Link><Link to={`/dischargepatient/${patient_number}`}>
                        <input className='mx-3 px-10 py-1 rounded-full bg-red-500 text-white font-semibold hover:bg-red-400' type="button" value="Discharge" />
                    
                    </Link>

                    <Link to="/entrypatients">
                        <input className='mx-3 px-10 py-1 rounded-full bg-green-500 text-white font-semibold hover:bg-green-400' type="button" value="Go Back" />
                    
                    </Link>
                </div>
                
            </form>
        </div>
        
    </div>
  )
}

// addEdit

export default ViewPatient