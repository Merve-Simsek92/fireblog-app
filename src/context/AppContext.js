import React, { useContext, useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {createUser, userObserver} from "../helpers/firebase"
 

const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [currentUser,setCurrentUser]=useState()
  useEffect(() => {
    userObserver(setCurrentUser)
  }, [])
  
 


    return (
        <AppContext.Provider
          value={{
currentUser

      
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
  