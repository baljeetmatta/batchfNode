//mongodb+srv://userroot:<db_password>@cluster0.cmk41.mongodb.net/
const express=require("express");
const app=express();
const mongoose=require("mongoose");
const User=require("./models/userModel");
//User is class
mongoose.connect("mongodb+srv://userroot:Password4001@cluster0.cmk41.mongodb.net/ecomm")
.then((response)=>{
    console.log("Connected...")
})

app.get("/addUser",(req,res)=>{
    let obj={};
    obj.username="Test";
    obj.password="Password";
    obj.name="Name";
//dbinstance.collection("users").insertOne(obj);
//User->class
const user=new User(obj);
user.FName="Code Quotient";

user.save().then((response)=>{
    console.log(response);
    res.end();

})



})


app.get("/update",(req,res)=>{
    User.findOneAndUpdate({"username":"Test"},{"name":"Code"}).then((response)=>{
        res.end();
        
       })
})
app.get("/getUsers",(req,res)=>{

    //dbinstance.collection("users").find({})
   //update users set name='Code' where username='Test'
   //
  


   
    User.find({}).then((response)=>{
        res.json(response);
    })

});

app.listen(3000);
