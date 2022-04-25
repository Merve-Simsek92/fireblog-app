import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import cw from "../assets/cw.jpeg"
import { useNavigate } from 'react-router-dom'
import { ReactComponent as Menuicon} from "../helpers/menu.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullseye } from '@fortawesome/free-solid-svg-icons'
import { Dropdown } from 'react-bootstrap'
import { useGlobalContext } from '../context/AppContext'
import { logOut } from "../helpers/firebase";
const Navbar = () => {
    const navigate=useNavigate()
 const [isOpen,setIsOpen]=useState()
 const {currentUser}=useGlobalContext()

    //const currentUser={displayName:"merve şimşek"}
    
    const handleClick=()=>{
setIsOpen(true)

    }
    
    
  return (
    <div>
<nav className="navbar navbar-expand-lg navbar-primary bg-primary">
  <div className="container-fluid">
   <Link to={"/"} className="navbar-brand text-white">
   <img src={cw} alt="" style={{width:"50px"}} />
   </Link>
   {/* <button onClick={handleClick}> <Menuicon/> </button> */}
  {currentUser ?   (<Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    <Menuicon/>
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="/profile">Profile</Dropdown.Item>
    <Dropdown.Item href="/newBlog">New</Dropdown.Item>
    <Dropdown.Item onClick={()=>logOut()} >Logout</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>) : (
  <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    <Menuicon/>
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="/login">Login</Dropdown.Item>
    <Dropdown.Item href="/register">Register</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>)} 
  
 </div>
</nav>

    </div>
  )
}

export default Navbar