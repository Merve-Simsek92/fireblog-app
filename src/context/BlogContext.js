import React, { useContext, useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {createUser, userObserver} from "../helpers/firebase"
 

const AppContext = React.createContext();
const AppBlogProvider = ({ children }) => {

 const initialValues={title:"",image:"",content:""}
 const [info,setInfo]=useState(initialValues)
 const [blogList,setBlogList]=useState()
 const handleUpdateClick=(id,title,image,content)=>{
  setInfo({id,title,image,content})
}
    return (
        <AppContext.Provider
          value={{

      info,
      setInfo,
      setBlogList,
      handleUpdateClick,
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
  