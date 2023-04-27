import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './Card'
import "../style/myblog.css"
import emptycartimage from "../Components/emptycart.jpg"
const Myblogs = () => {
   const [blogs,setBlogs]=useState([])
const ServerCall=async()=>{
     const userId=localStorage.getItem("userid")
    const res=await axios.get(`http://localhost:5000/getallblogbyuserid/${userId}`).catch((err)=>console.log(err))
    const Data= await res.data
    // console.log(Data);
    return Data
}
// console.log(blogs);
useEffect(()=>{
   ServerCall().then((data)=>setBlogs(data.data))
},[])

  let classs=""
  if(blogs.length>0){
     classs="main-myblog-div"
  }
  return (
    <div  className={classs}>
      {
        blogs.length===0?
      <div className='background-img'>
        <img className='emptycartimg' src={emptycartimage} alt="error" />
        <h2>No Blogs</h2>
      </div>:""
      }
    <div className='main-home-div'>
      {
        blogs &&
        blogs.map((blog,i)=>{
            return(
                <Card key={i} blogid={blog._id} author={blog.user.name} isuser={localStorage.getItem("userid") === blog.user._id} title={blog.title} image={blog.image} description={blog.description}/>
            )
        })
      }
    </div>
    </div>
  )
}

export default Myblogs
