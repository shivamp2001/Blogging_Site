import React, { useState } from "react";
import "../style/style.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"
import { useDispatch } from "react-redux";
import { LoginUser } from './Redux/reducers.js'
import { toast } from "react-hot-toast";
const Login = () => {
  const[login,setLogin]=useState(false)
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const[inputs,setInputs]=useState({
    email:"",
    password:""
  })
  
   const sendRequest=async()=>{
      const res=await axios.post("http://localhost:5000/login",{
        email:String(inputs.email),
        password:String(inputs.password)
      }).catch((err)=>toast(err.response.data.message))
      // .catch((err)=>console.log(err))
      const data=await res.data
     
      return data
   }

  const handlechange=(e)=>{
    setInputs((preve)=>({
      ...preve,
      [e.target.name]:e.target.value
    }))
  }
  // console.log(inputs);
  const HandleLogin=()=>{
    setLogin(true)
  }
  dispatch(LoginUser(login))
  const handlesubmit=(e)=>{
    e.preventDefault();
    sendRequest().then((data)=>localStorage.setItem("userid",data.data._id)).then(()=>navigate("/")).then(()=>toast("login Successfull"))
    
  }
  // console.log(login);
  return (
    <div>
    <form onSubmit={handlesubmit}>
      <div className="form">
        <div className="main">
      
          <label htmlFor="email" >Email</label>
          <input type="email" name="email" value={inputs.email} placeholder="Email" onChange={handlechange} />

          <label htmlFor="password" >Password</label>
          <input type="password" name="password" value={inputs.password} placeholder="Password" onChange={handlechange}/>

          <div className="btn">
          <button onClick={HandleLogin} type="submit">Login</button>
          </div><br />
          <div className="tologin">
            <p>Register now <Link style={{color:"blue"}} to={"/signup"}>signup</Link></p>
          </div>
        </div>
      </div>
    </form>
  </div>
  )
}

export default Login
