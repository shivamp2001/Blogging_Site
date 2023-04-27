import React, { useEffect, useState } from 'react'
import Card from './Card'
import axios from"axios"
import "../style/home.css"
const Home = () => {
  const[blogs,setBlogs]=useState([])
  const ServerCall=async()=>{
    const res=await axios.get("http://localhost:5000/getallblog").then((res) => res.data).catch((err)=>console.log(err));
    const Data=await res.data
    // console.log(Data);
    return Data
  }
  useEffect(()=>{
    ServerCall().then((data)=>setBlogs(data))
  },[])
  // console.log(blogs.user);
  return (
    <div className='main-myblog-div'>
    <div className='main-home-div'>
      {blogs &&
        blogs.map((blog,i)=>{
          // console.log( localStorage.getItem("userid") ,blog.user._id)
          return(
            <Card key={i} author={blog.user.name} isuser={localStorage.getItem("userid") === blog.user._id} blogid={blog._id} title={blog.title} image={blog.image} description={blog.description}  />
            )
        })
      }
    </div>
    </div>
  )
}

export default Home
