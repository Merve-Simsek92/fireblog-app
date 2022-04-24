import React from 'react'
import { useLocation } from 'react-router-dom'
import { ReactComponent as Menuicon} from "../helpers/menu.svg"
import { ReactComponent as Chat} from "../helpers/chat.svg"
import { ReactComponent as Heart} from "../helpers/heart.svg"
import { useGlobalContext } from '../context/AppContext'
const Details = () => {
    const location = useLocation();
    const blogData = location.state.item;
    console.log(blogData.item)
    const {currentUser}=useGlobalContext();
  return (
    <div>
     <h1>
         DETAILS
     </h1>
     <div><img src={blogData.item?.image} alt="" /></div>
     <h2>{blogData.item?.title}</h2>
     <p>{blogData.item?.content}</p>
     <p><Menuicon/> <span> {currentUser?.email}  </span></p>
    <p><span><Heart/></span><Chat/></p>
    

    </div>
  )
}

export default Details