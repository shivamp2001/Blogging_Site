const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema(
  {
    name: { type: String },
    email: { type: String ,unique:true},
    password: { type: String },
    blogs: [{ type: mongoose.Types.ObjectId, ref: "Blog", required: true }]
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
