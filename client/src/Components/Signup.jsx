import React, { useState } from "react";
import "../style/style.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"
import {toast }from "react-hot-toast"

const Signup = () => {
  const navigate=useNavigate()
  const[inputs,setInputs]=useState({
    name:"",
    email:"",
    password:""
  })

  const sendRequest=async()=>{
       const res=await axios.post("http://localhost:5000/signup",{
        name:String(inputs.name),
        email:String(inputs.email),
        password:String(inputs.password),
      }).catch((err)=>toast(err.response.data.message))
      // .catch((err)=>console.log(err.response.data.message))
       const data=await res.data
       console.log(data);
       return data
  }

  const handlechange=(e)=>{
    setInputs((preve)=>({
      ...preve,
      [e.target.name]:e.target.value
    }))
  }

  const handlesubmit=(e)=>{
    const{name,email,password}=inputs
    if(name && email && password){
    e.preventDefault();
    sendRequest().then((data)=>{if(data){navigate("/login")}})
    }
  }
  // console.log(inputs);
  return (
    <div>
      <form  onSubmit={handlesubmit}>
        <div className="form">
          <div className="main">
            <label htmlFor="name" >Name</label>
            <input type="text" name="name" placeholder="Name" value={inputs.name} onChange={handlechange}/>
            <label htmlFor="email" >Email</label>
            <input type="email"name="email" placeholder="Email" value={inputs.email} onChange={handlechange} />
            <label htmlFor="password" >Password</label>
            <input type="password" name="password" placeholder="Password" value={inputs.password} onChange={handlechange}/>
            <div className="btn">
            <button type="submit">Signup</button>
            </div>
            <div className="tologin">
              <p>Already Register <Link style={{color:"blue"}} to={"/login"}>login</Link></p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signup;
