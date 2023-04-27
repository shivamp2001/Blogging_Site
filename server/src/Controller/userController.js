const BlogModel = require("../Model/blogModel")
const UserModel=require("../Model/userModel")

//  User Signup 
exports.signup=async(req,res)=>{
  try{
    const{name,email,password}=req.body
    const chechEmail=await UserModel.findOne({email})
    if(chechEmail)return res.status(400).json({message:"Email is Already Register"})
    const createUser=await UserModel.create(req.body)
    return res.status(201).json({data:createUser,message:"success"})

  }catch(err){
   return res.status(500).json({error:err.message})
  }
}

//  User Login 
exports.login=async(req,res)=>{
  try{
    const{email,password}=req.body
    const checkValidUser=await UserModel.findOne({email,password})
    if(!checkValidUser) return res.status(404).json({message:"Email/password is not correct"})
    return res.status(200).json({data:checkValidUser,message:"login succssfully"})

  }catch(err){
    return res.status(500).json({error:err.message})
  }
}

exports.getUserByUserid=async(req,res)=>{
  try{
      const userid=req.params.userid
      const Userdata=await UserModel.findById(userid).populate("blogs")
      return res.status(200).json({data:Userdata})
  }catch(err){
    return res.status(500).json({error:err.message})
  }
}

