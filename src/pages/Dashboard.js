import React from 'react'
import BlogCard from '../components/BlogCard'
import "./Dashboard.css"
import { useFetch } from '../helpers/functions'


const Dashboard = () => {
  const {isLoading}=useFetch()
  return (
    <div>
      <h1 className='dashboard'>Dashboard</h1>
  {/* //{!isLoading ? (<h1 className="dashboard">Dashboard</h1>) } */}
      <BlogCard/>
    </div>
  )
}

export default Dashboard