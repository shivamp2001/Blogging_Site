import  ViewFullBlog  from "./reducers.js/index";
import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
  reducer:{
    storedata:ViewFullBlog
  }
})

