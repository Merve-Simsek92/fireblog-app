import React, { useContext, useState,useEffect } from "react";
//import { navigate, useNavigate } from "react-router-dom";
import {createUser, userObserver} from "../helpers/firebase"
 

const AppContext = React.createContext();
const AppBlogProvider = ({ children }) => {

 const initialValues={title:"",image:"",content:""}
 const [info,setInfo]=useState(initialValues)
 const [blogList,setBlogList]=useState()
//const navigate=useNavigate()

    return (
        <AppContext.Provider
          value={{

      info,
      setInfo,
      setBlogList,
      blogList
        }}
        >
          {children}
        </AppContext.Provider>
      );

}
export const useBlogGlobalContext = () => {
    return useContext(AppContext);
  };
  export { AppContext, AppBlogProvider };
  