const express=require("express");
const profileRoute=express.Router();
profileRoute.get("/",(req,res)=>{
    res.send("Profile Home Page");
})
profileRoute.get("/details",(req,res)=>{
    res.send("Profile details page");
})
profileRoute.get("/travel/:source/:dest",(req,res)=>{
    res.send(req.params.source+" "+req.params.dest);
 })
  module.exports=profileRoute;
