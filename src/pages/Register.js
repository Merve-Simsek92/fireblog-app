
import React, { useState } from "react";
import {useNavigate } from "react-router-dom";
import {createUser} from "../helpers/firebase"
import "./Register.css"
import blok from "../assets/blok.png"

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
const navigate=useNavigate()
const handleEmail=(e)=>{
 setEmail(e.target.value)
}
const handlePassword=(e)=>{
    setPassword(e.target.value)
}

const handleSubmit=(e)=>{
    e.preventDefault();
    createUser(email, password,navigate);
  
}
  return (
    <div className='text-align-center'>

  <div className='register-form'>
  <img className="blok" src={blok} alt="" /> 
    <h1 className="form-title display-3">Register</h1>
  <form id="register"  onSubmit={handleSubmit}>

  <div className="mb-3 p-4">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email adress.."
              onChange={handleEmail}
              required
            />
          </div>
          <div className="mb-3 p-4">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password.."
              onChange={handlePassword}
              required
            />
          </div>
          <input
            type="submit"
            className="btn btn-primary form-control"
            value="Register"
           
          />
    
  </form>


  </div>




    </div>
  )
}

export default Register