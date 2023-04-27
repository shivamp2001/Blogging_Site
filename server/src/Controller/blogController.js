const BlogModel=require("../Model/blogModel")

exports.getallBlog=async(req,res)=>{
    try{
       const FindallBlogs=await BlogModel.find().populate("user")
       return res.status(200).json({data:FindallBlogs})
    }catch(err){
      return res.status(500).json({error:err.message})
    }
  }


// Create Blogs
exports.createBlog=async(req,res)=>{
    try{
        const{title,image,description,user}=req.body
        // console.log(req.body);
        const Blog=await BlogModel.create(req.body)
        return res.status(201).json({data:Blog,message:"Blog Created Successfully"})
    }catch(err){
        return res.status(500).json({error:err.message})
    }
  }
 
//   Update Blogs
  exports.updateBlog=async(req,res)=>{
    try{
      const blogId=req.params.blogid
      const {title,image,description}=req.body
      const UpdatedUserdata=await BlogModel.findByIdAndUpdate(blogId,{title,image,description},{$new:true})
      return res.status(201).json({data:UpdatedUserdata,message:"Updated successfully"})
    }catch(err){
      return res.status(500).json({error:err.message})
    }
  }


//   Dekete Blogs
  exports.deleteBlog=async(req,res)=>{
    try{
      const blogId=req.params.blogid
       const DeleteBlogData=await BlogModel.findByIdAndRemove(blogId)
       if(DeleteBlogData){
        return res.status(200).json({message:"Blog Deleted Successfully"})
       }
    }catch(err){
      return res.status(500).json({error:err.message})
    }
  }

  // Get all blogs by userid
  exports.GetBlogsByuserId=async(req,res)=>{
    try{
      // console.log(req.params.userid);
      const userId=req.params.userid
      const UserBlogs=await BlogModel.find({user:userId}).populate("user")
      return res.status(200).json({data:UserBlogs})
  
    }catch(err){
      return res.status(500).json({error:err.message})
    }
   }