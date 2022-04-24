import { BrowserRouter,Route ,Router,Routes } from "react-router-dom";
import React from 'react'
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Navbar from "../components/Navbar";
import NewBlog from "../pages/NewBlog";
import Details from "../pages/Details";
import UpdateBlog from "../pages/UpdateBlog";
 




const AppRouter = () => {
  return (
   <BrowserRouter>
   <Navbar/>

<Routes>
    <Route path="/"  element={<Dashboard/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/register" element={<Register/>} />
    <Route path="/newBlog" element={<NewBlog/>}/>
    <Route path="/details" element={<Details/>}/>
    <Route path="/updateBlog" element={<UpdateBlog/>}/>
</Routes>



   </BrowserRouter>
    




  )
}

export default AppRouter