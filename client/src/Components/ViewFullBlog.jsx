import React from 'react'
import { useSelector } from 'react-redux'
import "../style/viewfullblog.css"
import {Link, useNavigate} from "react-router-dom"
import axios from 'axios'

const ViewFullBlog = () => {
  const navigate=useNavigate()
  let BlogData=useSelector((state)=>state.storedata)
  
  const {title,image,description,blogid,isuser,author}=BlogData.bloginfo
  // console.log(author);
  const DeleteBlog=async()=>{
    axios.delete(`http://localhost:5000/deleteblog/${blogid}`)
    .catch((err)=>console.log(err)).then(()=>navigate("/myblogs"))
    // .then(()=>navigate('/myblogs'))
      }
  return (
    <div className='main-view'>
      <div className="viewimage">
     <img src={image} alt="" />
      </div>
      <div className='edit-delete'>
     <h2>Title :{title}</h2>
     {isuser &&
     <div className='btns'>
      <Link to={`/update/${blogid}`}><button className='btnedit' >Edit</button></Link>
      <Link><button className='btndelete' onClick={DeleteBlog}>Delete</button></Link>
     </div>
     }
      </div>
     <p style={{marginLeft:"25px",marginBottom:"10px",marginTop:"0px"}}>Blogger: {author}</p>

     <div className='description-blog'>
      <p >{description}.</p> 
     </div>
    </div>
  )
}

export default ViewFullBlog
