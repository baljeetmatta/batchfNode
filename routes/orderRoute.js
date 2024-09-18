const express=require("express");
const orderRoute=express.Router();
orderRoute.get("/",(req,res)=>{
    res.send("Order Home Page");
})
orderRoute.get("/details/:data/:data1",(req,res)=>{
    res.send("Order details page "+req.params.data);
})
module.exports=orderRoute;
