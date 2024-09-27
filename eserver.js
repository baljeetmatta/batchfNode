const express=require("express");
const app=express();
const fs=require("fs");

app.set("view engine","ejs");
//app.set("views",)

app.get("/test",(req,res)=>{
    res.render("home",{msg:"CodeQuotient",courses:["One","Two","Three"]});



})
app.get("/users",(req,res)=>{
    let users=JSON.parse(fs.readFileSync("users.json"));

    res.render("users",{list:users});

})
app.listen(3000);
