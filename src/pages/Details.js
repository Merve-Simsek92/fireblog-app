import React from 'react'
import { useLocation,useNavigate } from 'react-router-dom'
import { ReactComponent as Menuicon} from "../helpers/menu.svg"
import { ReactComponent as Chat} from "../helpers/chat.svg"
import { ReactComponent as Heart} from "../helpers/heart.svg"
import { useGlobalContext } from '../context/AppContext'
import { useBlogGlobalContext } from '../context/BlogContext'
import "./Details.css"
import { handleDeleteClick } from '../helpers/functions'
//import { handleUpdateClick } from '../helpers/functions'
const Details = () => {
 
 
    const location = useLocation();
    const blogData = location.state.item.item;
    console.log(blogData)
    const {currentUser}=useGlobalContext();
    const navigate=useNavigate()
    const handleUpdateClick=(blogData)=>{
      //updateblog yönlendir
     navigate("/updateBlog",{state:{blogData}})
     //setInfo({id,title,image,content})
   }
  return (
<div  className="details-card">
        <h1 className='details-title'>DETAILS</h1>
   <img className='card-img-top' src={blogData?.image} alt="" />
   <div className="card-body">
    <h5 className="card-title">{blogData?.title}</h5>
    <p className="card-text">{blogData?.content}</p>
     <p><Menuicon/> <span> {currentUser?.email}  </span></p>
    <p><span><Heart className='heart'/></span><Chat className='chat'/></p>
 </div>
 <div>
 <button onClick={()=>handleUpdateClick({blogData})} type="button" class="btn btn-warning m-5">UPDATE</button>
 <button onClick={()=>handleDeleteClick(blogData.id)} type="button" class="btn btn-danger m-5">DELETE</button></div>
   </div>
  )
}

export default Details