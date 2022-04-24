import React from 'react'
import { useLocation } from 'react-router-dom'
import { ReactComponent as Menuicon} from "../helpers/menu.svg"
import { ReactComponent as Chat} from "../helpers/chat.svg"
import { ReactComponent as Heart} from "../helpers/heart.svg"
import { useGlobalContext } from '../context/AppContext'
import { useBlogGlobalContext } from '../context/BlogContext'
import "./Details.css"
import { handleDeleteClick } from '../helpers/functions'
import { handleUpdateClick } from '../helpers/functions'
const Details = () => {
 
 
    const location = useLocation();
    const blogData = location.state.item;
    console.log(blogData.item)
    const {currentUser}=useGlobalContext();
    const {handleUpdateClick}=useBlogGlobalContext()
  return (
<div  className="details-card">
        <h1 className='details-title'>DETAILS</h1>
   <img className='card-img-top' src={blogData.item?.image} alt="" />
   <div className="card-body">
    <h5 className="card-title">{blogData.item?.title}</h5>
    <p className="card-text">{blogData.item?.content}</p>
     <p><Menuicon/> <span> {currentUser?.email}  </span></p>
    <p><span><Heart className='heart'/></span><Chat className='chat'/></p>
 </div>
 <div><button onClick={()=>handleUpdateClick(blogData.item?.id,
  blogData.item?.title,
  blogData.item?.content,
  blogData.item?.image  )}>UPDATE</button><button onClick={()=>handleDeleteClick(blogData.item?.id)}>DELETE</button></div>
   </div>
  )
}

export default Details