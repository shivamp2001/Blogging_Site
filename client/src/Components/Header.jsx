import React from "react";
import {Link} from "react-router-dom"
import "../style/header.css"
import {BiMessageSquareAdd} from "react-icons/bi"
import {RiAccountCircleFill} from"react-icons/ri"
import { useDispatch, useSelector } from "react-redux";
import { LoginUser } from "./Redux/reducers.js";
import {toast} from "react-hot-toast"

const Header = () => {
  const dispatch=useDispatch()
  let LogedUser=useSelector((state)=>state.storedata.login)
    // console.log(LogedUser);

    
  return (
    <main>
      <header>
       <Link className="link logo" to={"/"}>Blog App</Link>
        <nav>
          {LogedUser===true && <>
          <Link  to={"/addblog"} title="Add Blog"><BiMessageSquareAdd className="additem" title="Add Blog"/></Link>
            
        <Link to={"/myblogs"} title="My Blogs" ><RiAccountCircleFill className="myblogs"/></Link>
         </>
        }
          
          {LogedUser===true?<Link className="link hoverlogout"onClick={()=>dispatch(LoginUser(false),toast("Logout "))} to={"/login"}>Logout</Link>:
          <Link className="link hoverlogin"  to={"/login"}>Login</Link>
          }
          {LogedUser===true?"":

          <Link className="link hoverlogin" to={"/signup"}>Register</Link>
          }
        </nav>
      </header>
    
    </main>
  );
};

export default Header;
