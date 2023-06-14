import React from 'react'
import { Link } from 'react-router-dom';
import "./DoctorNavBarStyle.css"


//imported images from assets ====
import maledoctor from '../../assets/maledoctor.jpg'
import logo1 from '../../assets/logo1.jpg'

const DoctorNavbar = () => {
  
    
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
      setAnchorEl(null);
  };

  return (

    <React.Fragment>
  <>

  {/* border-[1px] border-greenColor  */}

    <div>
        <nav class=" shadow text-textColor pt-2">
            <div class="px-8 mx-auto max-w-7xl ">
                <div class="flex items-center justify-between h-16">
                    <div class=" flex items-center">

                        <a class="flex-shrink-0" href="#">
                            <img className='w-[60px] h-[50px]' src={logo1} alt="logo"/>
                        </a>

                        <div class="hidden md:block">
                            <div class="flex items-baseline ml-10 space-x-4">
                                <a class="text-textColor  hover:text-blueColor px-3 py-2 rounded-md text-sm font-medium" href="#">
                                    <Link to={"/homedoctor"} smooth>Home</Link>
                                </a>
                                <a class="text-textColor  hover:text-blueColor   px-3 py-2 rounded-md text-sm font-medium" href="#">
                                    <Link to={"/notification"} smooth>Notification</Link>
                                </a>
                                <a class="text-textColor  hover:text-blueColor px-3 py-2 rounded-md text-sm font-medium" href="#">
                                    <Link to={"/appointment"} smooth>Appointment</Link>
                                </a>

                            </div>
                        </div>

                    </div>
                    <div class="">
                        <div class="flex items-center ml-4 md:ml-6">
                            <div class="dropdown">
                                <button>
                                    <img class="dropbtn" className=' h-[50px] w-[50px] rounded-full' src={maledoctor} alt="maledoctor" />
                                </button>
                                <div class="dropdown-content">
                                    <a  onClick={handleClose}><Link to={"#"}>Profile</Link></a>
                                    <a  onClick={handleClose}><Link to={"#"}>Settings</Link></a>
                                    <a  onClick={handleClose}><Link to={"/logindoctordiv"}>Logout</Link></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                </div>
            </div>
        </nav>
    </div>


  </>
  </React.Fragment>
  )
}

export default DoctorNavbar