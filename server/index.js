const express = require("express");
const mongoose = require("mongoose");
const route=require("./src/routes/route")
const cors=require("cors")
const app = express();
const PORT = 5000;

mongoose
  .connect(
    "mongodb+srv://shivamp2001:shivamp2001@mycluster.au9iv5p.mongodb.net/blog-app"
  )
  .then(() => console.log("DataBase connected"))
  .catch((err) => console.log(err));
  app.use(cors())
  app.use(express.json({ limit: "10mb" })) 
  app.use("/",route)

app.listen(PORT, () => console.log(`server running on port ${PORT}`));
