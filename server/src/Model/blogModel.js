const mongoose=require("mongoose");
const BlogSchema=new mongoose.Schema({
    title:{type:String},
    image:{type:String},
    description:{type:String},
    user: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        // strictPopulate:false
      },
    // userid:{type:mongoose.Types.ObjectId}
})
module.exports=mongoose.model("Blog",BlogSchema)