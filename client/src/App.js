import './App.css';
import {Route,Routes}from "react-router-dom"
import Signup from "./Components/Signup"
import Login from './Components/Login';
import React from 'react';
import { Toaster } from 'react-hot-toast';
import Card from './Components/Card';
import AddBlog from './Components/AddBlog';
import Header from './Components/Header';
import Home from './Components/Home';
import Myblogs from './Components/Myblogs';
import UpdateBlog from './Components/UpdateBlog';
import ViewFullBlog from './Components/ViewFullBlog';

function App() {
  return (
    <React.Fragment>
     <Toaster />
     <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/card' element={<Card/>}/>
      <Route path='/addblog' element={<AddBlog/>}/>
      <Route path='/update/:blogid' element={<UpdateBlog/>}/>
      <Route path='/myblogs' element={<Myblogs/>}/>
      <Route path='/detailblog' element={<ViewFullBlog/>}/>
    </Routes>
    </React.Fragment>

   
  );
}

export default App;
