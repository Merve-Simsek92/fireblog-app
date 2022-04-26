
import React, { useState } from 'react'
import { useBlogGlobalContext } from '../context/BlogContext'
import { useFetch } from '../helpers/functions'
import loading from "../assets/loading.gif"
import { NavItem } from 'react-bootstrap'
import { useGlobalContext } from '../context/AppContext'
import { ReactComponent as Menuicon} from "../helpers/menu.svg"
import { ReactComponent as Chat} from "../helpers/chat.svg"
import { ReactComponent as Heart} from "../helpers/heart.svg"
import { useNavigate } from 'react-router-dom'
import noData from  "../assets/no-data.png"
import "./BlogCard.css"


const BlogCard = () => {
  const handlebutton=(e)=>{
    e.stopPropagation();
     setSpan(span+1)
  }
  const {currentUser}=useGlobalContext()
    const {isLoading,blogList}=useFetch()
    const {info}=useBlogGlobalContext()
    const [span,setSpan] =useState(0)
    const navigate=useNavigate()
    const handleClick=(item)=>{
      if(currentUser){ 
        navigate("/details",{state:{item}}) 
      }else{
        navigate("/login")
      }

    
    }
  return (
    <div className='cards-div'>
        {isLoading ? (<img  className='load' src={loading} style={{textAlign:"center"}} /> ) :

        blogList === 0  ? (<img src={noData} alt=""/>) :

   ( blogList?.map((item,index)=>(

<div onClick={()=>handleClick({item})}  key={index} className="card">
  <img src={item.image} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{item.title}</h5>
    <p className="card-text">{item.content.substring(0,50)}...</p>
    <p><Menuicon/> <span> {currentUser.email}  </span></p>
    <p><span><button onClick={(e)=>handlebutton(e)}><Heart className='heart'/></button></span><span>{span}</span><Chat className='chat'/><span>0</span></p>
    
  </div>
</div>
    ))
) }
       
</div>
  )
}

export default BlogCard