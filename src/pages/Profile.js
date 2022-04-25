import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useGlobalContext } from '../context/AppContext'



const Profile = () => {
const {currentUser}=useGlobalContext()
const navigate=useNavigate()

const handleClick=()=>{
navigate("/")
}

  return (
    <div>
   
   <div className="card" style={{width: "18rem",margin:"auto",display:"block"}}>
  <img style={{objectFit:"cover"}} src="https://kreatifbiri.com/wp-content/uploads/2018/07/15.ucurtma.avcisi..jpg" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{currentUser?.displayName}</h5>
    <p className="card-text">{currentUser?.email}</p>
    <button href="#" onClick={handleClick} className="btn btn-primary">Go Back</button>
  </div>
</div>


    </div>
  )
}

export default Profile