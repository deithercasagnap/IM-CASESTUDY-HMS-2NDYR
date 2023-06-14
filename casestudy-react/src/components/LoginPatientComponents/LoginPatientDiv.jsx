import React from 'react'
import "./LoginPatientStyle.css"
import { useState } from 'react';
import Link from '@mui/material/Link';
import { useNavigate } from 'react-router';
import doPost from '../../helpers/fetch_helper.js';

// imported icons from react-icons ===>
import {AiOutlineUser} from 'react-icons/ai'
import {AiFillUnlock} from 'react-icons/ai'


const LoginPatientDiv = () => {

    const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      setIsLoading(true);
      const data = {
        username,
        password
      }

      let result = await doPost("http://localhost/backend/login.php", data);
      
      if (result.data.status) {
        navigate('/homepatient');
      } else {
        alert(result.data.message);
      }

    } catch (e) {
      alert(e.toString());
    } finally {
      setIsLoading(false);
    }

  }

  return (
    <div className='searchDiv mt-[6rem]  grid rounded-[10px] justify-center'>
        <div className='rounded-[10px] p-[3rem] w-[100%]'>
            <form onSubmit={handleSubmit} noValidate>

                <div className='firstDiv rounded-[8px] bg-white p-5 shadow-lg shadow-greyIsh-700 border-[1px] border-greenColor'>


                    <h6 className="text-center mt-5 font-bold">Hi, Admin!</h6>

                    <div className='flex gap-2 items-center m-4'>
                        <AiOutlineUser className='text-[25px] text-textColor icon'/>
                        <input 
                            type="text" 
                            id="email" 
                            name='email' 
                            className='bg-transparent text-textColor focus:outline-none w-[100%] border-[1px] border-greenColor p-[10px] rounded-[10px]' 
                            placeholder='Admin'
                            value={username}
                            onChange={(ev) => setUsername(ev.target.value)} 
                        />
                    </div>
                    
                    <div className='flex gap-2 items-center m-4'>
                    
                        <AiFillUnlock className='text-[25px] text-textColor icon'/>
                        <input 
                            type="password" 
                            className='bg-transparent text-textColor focus:outline-none w-[100%] border-[1px] border-greenColor p-[10px] rounded-[10px]' 
                            placeholder='Password'
                            name="password"
                            id="password"
                            value={password}
                            onChange={(ev) => setPassword(ev.target.value)}
                        />
                    
                    </div>

                    <div className="m-3">
                        <p className="text-[12px]">By logging in, you agree to the <span id="span">Terms of Conditions</span> <br /> and <span id="span">Privacy Policy</span>  of <a href="#">USTP-HMS</a>.</p>
                    </div>

                    <div className='flex justify-center'>
                        <button 
                            className='justify-center bg-blueColor h-full w-[50%] mt-5 mb-5 pt-3 pb-3 rounded-[10px] text-white cursor-pointer hover:bg-blue-300'
                            type="submit"
                            loading={isLoading}
                            
                            >
                            LOGIN
                        </button>
                    </div>

                </div>

                

                <div class="m-3">
                    <h6 className="text-textColor text-[12px]">Powered by: <span id="span">Digital Transformation Office</span> | <span id="span">Terms of Conditions</span> | <br /><span id="span">Privacy Policy</span> | <span id="span">V-build: 1.0.0</span></h6>
                    <h6 className="text-textColor text-[12px]">Copyright © 2023 USTP-HMS. All rights reserved.</h6>
                </div>  

            </form>
        </div>
      
    </div>
  )
}

export default LoginPatientDiv