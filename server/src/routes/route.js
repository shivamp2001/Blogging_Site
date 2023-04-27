const express=require("express")
const router=express.Router()
const{signup,login, getUserByUserid}=require("../Controller/userController")
const { createBlog, getallBlog , GetBlogsByuserId, updateBlog, deleteBlog} = require("../Controller/blogController")

// User Apis
router.post("/signup",signup)
router.post("/login",login)
router.get("/getuserbyuserid/:userid",getUserByUserid)

// Blog Apis
router.post("/createblog",createBlog)
router.get("/getallblog",getallBlog)
router.get("/getallblogbyuserid/:userid",GetBlogsByuserId)
router.put("/updateblog/:blogid",updateBlog)
router.delete("/deleteblog/:blogid",deleteBlog)


module.exports=router