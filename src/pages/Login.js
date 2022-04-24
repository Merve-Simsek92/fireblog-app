
import React, { useState } from "react";
import {useNavigate } from "react-router-dom";
import { signIn,signUpProvider} from "../helpers/firebase"
const Login = () => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
 const navigate=useNavigate()

 const handleProviderLogin = () => {
  signUpProvider(navigate);
};
  const handleSubmit=(e)=>{
    e.preventDefault();
    signIn(email, password,navigate);
  
}
  return (
    <div className='text-align-center'>

  <div className='login-form'>
    <h1 className="form-title display-3">Login</h1>
  <form id="login" onSubmit={handleSubmit}>

  <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email adress.."
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password.."
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <input
            type="submit"
            className="btn btn-primary form-control"
            value="Login"
            // onSubmit={handleSubmit}
          />
    
  </form>

  <button
          className="btn btn-primary form-control mt-4"
          onClick={handleProviderLogin}
        >
          Continue with Google
        </button>
  </div>
 </div>
  )
}

export default Login