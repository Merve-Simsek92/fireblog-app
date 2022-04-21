import React from 'react'
import { Link } from 'react-router-dom'
import cw from "../assets/cw.jpeg"
import { useNavigate } from 'react-router-dom'
import { ReactComponent as Menuicon} from "../helpers/menu.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Navbar = () => {
    const navigate=useNavigate()
    //const currentUser={displayName:"merve şimşek"}
    const currentUser=false
  return (
    <div>
<nav className="navbar navbar-expand-lg navbar-primary bg-primary">
  <div className="container-fluid">
   <Link to={"/"} className="navbar-brand text-white">
   <img src={cw} alt="" style={{width:"50px"}} />
   </Link>
   <button> <Menuicon/> </button>
    {/* <div className='d-flex text-white align-items-center'>
   {currentUser ? (
       <h5 className='mb-0 text-capitalize'>
      {/* {currentUser?.displayName} */}
       {/* </h5>

  ) : (
       <button className='ms-2 btn btn-outline-light' onClick={()=>navigate("/login")}>Login</button>
   )}
   {currentUser ? (
       <button className='ms-2 btn btn-outline-light'>Logout</button>
   ):
   (
    <button className='ms-2 btn btn-outline-light'  onClick={()=>navigate("/register")}>Register</button>
   )}
 </div> */}
  </div>  
 </nav>

    </div>
  )
}

export default Navbar