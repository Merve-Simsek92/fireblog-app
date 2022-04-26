
import { useEffect, useState } from "react"
import App from "./firebase"
import Toastify from "./toast";
import {getDatabase, ref,set,push, onValue,update, remove} from "firebase/database"
import { useBlogGlobalContext } from "../context/BlogContext"
import { NavItem } from "react-bootstrap"
import { navigate,useNavigate } from "react-router-dom";
//bilgi ekleme
//import Toastify from "./toast";
export const AddBlog=(info)=>{

 const db=getDatabase()
 const userRef=ref(db,"blog");
 const newUserRef=push(userRef)
 set((newUserRef),{
     title:info.title,
     image:info.image,
     content:info.content
 })
}
//bilgi çağırma
export const useFetch=()=>{
    const [isLoading,setIsLoading]=useState();
    const {setBlogList,blogList}=useBlogGlobalContext()
useEffect(()=>{
    setIsLoading(true)
   

 const db=getDatabase()
 const userRef=ref(db,"blog");


 onValue(userRef,(snapshot)=>{
     const data=snapshot.val();
     const blogArray=[];
     for(let id in data){
         blogArray.push({id,...data[id]})
     }
     setBlogList(blogArray);
     setIsLoading(false);
 });
},[])

return {isLoading,blogList}
}

export  const handleDeleteClick=(id,navigate)=>{
    // const navigate=useNavigate()
    const db=getDatabase()
    const userRef=ref(db,"blog");

    remove(ref(db,"blog/"+id))
    Toastify("Kullanıcı bilgisi silindi")
    navigate("/")
   // Toastify("Kullanıcı bilgisi silindi")
}
export const  handleUpdateClick=(info)=>{
    const db=getDatabase();
    const updates={};
    updates[ "blog/"+ info.id]=info;
    return update(ref(db),updates)
}

