const exp = require("constants");
const express=require("express");
const fs=require("fs");
const path=require("path");
const app=express();
const orderRoute=require("./routes/orderRoute");
const profileRoute=require("./routes/profileRoute");

app.use(express.static ("."));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use("/orders",orderRoute);
app.use("/profile",profileRoute);
// /orders   /
// /orders/details  /details
app.get("/xyz",(req,res)=>{
    res.end();
})
//Amazon
// /
// /orders/
// /orders/details
// /profile/
// /profile/details
// app.get("/orders/",(req,res)=>{

// })
// app.get("/profile/",(req,res)=>{
    
// })
// app.get("/orders/details",(req,res)=>{
    
// })
// app.get("/profile/details",(req,res)=>{
    
// })

app.get("/",(req,res)=>{
    console.log("asdsa");

    res.send("Welcome");

})

app.get("/Login",(req,res)=>{
   // console.log(req.query);
    
   // res.send("GEt Request Rec.");
    res.sendFile(path.join(__dirname,"./login.html"));
})
app.get("/Dashboard",(req,res)=>{

    res.sendFile(path.join(__dirname,"./Dashboard.html"));
})
app.post("/Login",(req,res)=>{
    let users=JSON.parse(fs.readFileSync("users.json"));
    let results=users.filter((item)=>{
        if(item.username==req.body.username && item.password==req.body.password)
            return true;
    });
    if(results.length==0)
        res.redirect("/Login");

       // res.sendFile(path.join(__dirname,"./Login.html"));
    else
    res.redirect("/Dashboard")
   // res.sendFile(path.join(__dirname,"./Dashboard.html"));

   // console.log(req.body);
    //res.send("POSt REqquest.")
    //res.json({})
})
// app.all("*",(req,res)=>{

//     res.status(404).send("Page not found");
    
// })


// app.get("/",(req,res)=>{
//     console.log("asdsa");
    
//     res.send("Welcome 1");

// })
//app.get("/")
//http.createServer->Callback function
//if
// app.get("/",(req,res)=>{

//     //res.write("Welcome to node js");
//     //res.end();
//     console.log(__dirname);

//     //res.send("Welcome to nodejs ");
//     res.sendFile(__dirname+"/index.html");

//     //res.sendFile("/Users/mackbook/desktop/data/nodejs/BatchF/index.html")
// })
// app.get("/style.css",(req,res)=>{
//     res.sendFile(__dirname+"/style.css");
// });
app.listen(3000);
