import React from 'react'
import { useBlogGlobalContext } from '../context/BlogContext'
import { AddBlog } from '../helpers/functions'
import { useNavigate } from 'react-router-dom'
import "./NewBlog.css";
const NewBlog = () => {
const navigate=useNavigate()
  const {info,setInfo} = useBlogGlobalContext()
const handleChange=(e)=>{
  
  e.preventDefault();
  const {name,value}=e.target
  console.log(name,value)
  setInfo({...info,[name]:value})
}
const handleFormSubmit=(e)=>{
e.preventDefault()
AddBlog(info)
navigate("/")
}
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
<input name='title' className="form-control form-control-lg mt-5" value={info.title} onChange={handleChange} type="text" placeholder="title*" aria-label=".form-control-lg example"/>
<input name='image' className="form-control form-control-lg mt-3" value={info.image} onChange={handleChange}  type="text" placeholder="imageURL*" aria-label=".form-control-lg example"/>
<textarea name='content'className="form-control form-control-lg mt-5"  id="exampleFormControlTextarea1" onChange={handleChange}  value={info.content}  placeholder='Content*' rows="9"/>
<input class=" newbutton btn btn-primary form-control-lg mt-3" type="submit" value="Submit"/>
   </form> 
   </div>
  )
}

export default NewBlog