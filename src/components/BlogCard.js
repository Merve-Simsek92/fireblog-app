
import React from 'react'
import { useBlogGlobalContext } from '../context/BlogContext'
import { useFetch } from '../helpers/functions'
import loading from "../assets/loading.gif"
import { NavItem } from 'react-bootstrap'
import { useGlobalContext } from '../context/AppContext'
import { ReactComponent as Menuicon} from "../helpers/menu.svg"
import { ReactComponent as Chat} from "../helpers/chat.svg"
import { ReactComponent as Heart} from "../helpers/heart.svg"
import { useNavigate } from 'react-router-dom'


const BlogCard = () => {
  const {currentUser}=useGlobalContext()
    const {isLoading,blogList}=useFetch()
    const {info}=useBlogGlobalContext()
    const navigate=useNavigate()
    const handleClick=(item)=>{
     navigate("/details",{state:{item}}) 
    }
  return (
    <div>
        {isLoading ? (<img src={loading}/> ) :

   ( blogList?.map((item,index)=>(

<div onClick={()=>handleClick({item})}  key={index} className="card" style={{width: "18rem"}}>
  <img src={item.image} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{item.title}</h5>
    <p className="card-text">{item.content.substring(0,50)}...</p>
    <p><Menuicon/> <span> {currentUser.email}  </span></p>
    <p><span><Heart/></span><Chat/></p>
    
  </div>
</div>
    ))
) }
       
</div>
  )
}

export default BlogCard