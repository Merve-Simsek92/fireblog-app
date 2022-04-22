import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import {createUser} from "../helpers/firebase"
 

const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")

const handleEmail=(e)=>{
 setEmail(e.target.value)
}
const handlePassword=(e)=>{
    setPassword(e.target.value)
}

const handleSubmit=(e)=>{
    e.preventDefault();
    createUser(email, password);

}
    return (
        <AppContext.Provider
          value={{

         handleSubmit,
         handleEmail,
         handlePassword
        }}
        >
          {children}
        </AppContext.Provider>
      );

}
export const useGlobalContext = () => {
    return useContext(AppContext);
  };
  export { AppContext, AppProvider };
  