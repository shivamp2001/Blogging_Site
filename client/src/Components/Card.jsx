import React from 'react'
// import Header from './Header'
import {Link, useNavigate} from "react-router-dom"
import "../style/card.css"
import "../style/header.css"
// import {FaEdit} from "react-icons/fa"
// import {MdDelete} from "react-icons/md"
// import axios from 'axios'
// import ViewFullBlog from './ViewFullBlog'
import { useDispatch } from 'react-redux'
import { savadata } from './Redux/reducers.js'
// import img from "../Components/img.jpeg"

const Card = ({title,image,description,blogid,userid,isuser,author}) => {

  // console.log(userid._id);
  // console.log(localStorage.getItem("userid"));
  const navigate=useNavigate()
  const dispatch=useDispatch()
  // const HandleEdit=()=>{
  //     navigate(`/update/${blogid}`)
  // }
 const storeReduxdata={
  title,image,description,blogid,isuser,author
 }
//   const DeleteBlog=async()=>{
// axios.delete(`http://localhost:5000/deleteblog/${blogid}`)
// .catch((err)=>console.log(err)).then(()=>navigate("/"))
// // .then(()=>navigate('/myblogs'))
//   }
  // let val=useSelector((state)=>state.storedata)
// console.log(val);
  const HandleFullViwe=()=>{
    dispatch(savadata(storeReduxdata))
    navigate("/detailblog")
  }

  return (
    <>
    <div className='container'>
   
      {/* <Header/> */}
      <div className="blogs" >

         <div className="image">
                <img src={image} alt="" style={{cursor:"pointer"}} title='Click for View full blog' onClick={HandleFullViwe} />
          </div>

  <div className="text">
    {/* {
      isuser && (
  <div className='edit-delete-ico'>
   <FaEdit onClick={HandleEdit} title='Edit blog' className='edit'/>
   <MdDelete onClick={DeleteBlog} title='Delete blog' className='delete'/>
   </div>)
    } */}
     <h2>{title.slice(0,34)}</h2>
     <p className="information">
       <Link className="link"><p>Author: {author}</p>{}</Link>
        <time >2023-02-3 16:29</time>
     </p>
         <p className="summury"  style={{cursor:"pointer"}}title='Click for View full blog' onClick={HandleFullViwe}>{description.slice(0, 300,)}...</p>
          
   </div> 
  </div>
</div>
</>
  )
}

export default Card
