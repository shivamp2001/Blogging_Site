import { createSlice } from "@reduxjs/toolkit";

export const ViewFullBlog=createSlice({
    name:"viewblog",
    initialState:{
        bloginfo:{},
        login:{}
    },
    reducers:{
        savadata:(state,action)=>{
            state.bloginfo={...action.payload}
        },
        LoginUser:(state,action)=>{
           state.login=action.payload
        //    console.log(state.login);
        }
    }
})
export const{savadata,LoginUser}=ViewFullBlog.actions
export default ViewFullBlog.reducer;
