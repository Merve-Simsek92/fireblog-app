
import { useEffect, useState } from "react"
import App from "./firebase"
import {getDatabase, ref,set,push, onValue} from "firebase/database"
import { useBlogGlobalContext } from "../context/BlogContext"
//bilgi ekleme
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


