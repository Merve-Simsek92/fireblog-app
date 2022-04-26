import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import { AddBlog, handleUpdateClick } from '../helpers/functions'
import { useNavigate } from 'react-router-dom'
import "./NewBlog.css";
const UpdateBlog = () => {
const navigate=useNavigate()
const location = useLocation();
const item = location.state.blogData.blogData;

console.log(item)
const initialValues={title:item.title ,image:item.image,content:item.content}
 const [info,setInfo]=useState(initialValues)
 const handleChange=(e)=>{
  
    e.preventDefault();
    const {name,value}=e.target
    console.log(name,value)
    setInfo({...info,[name]:value})
  }
  const handleFormSubmit=(e)=>{
  e.preventDefault()
  handleUpdateClick({...info, id:item.id})
  navigate("/")
  }



  return (
    <div>
 <form onSubmit={handleFormSubmit}>
<input name='title' className="form-control form-control-lg mt-5" value={info.title} onChange={handleChange} type="text" placeholder="title*" aria-label=".form-control-lg example"/>
<input name='image' className="form-control form-control-lg mt-3" value={info.image} onChange={handleChange}  type="text" placeholder="imageURL*" aria-label=".form-control-lg example"/>
<textarea name='content'className="form-control form-control-lg mt-5"  id="exampleFormControlTextarea1" onChange={handleChange}  value={info.content}  placeholder='Content*' rows="7"/>
<input class="newbutton button btn btn-primary form-control-lg mt-3 mx-auto" type="submit" value="Update"/>
   </form> 


    </div>
  )
}

export default UpdateBlog