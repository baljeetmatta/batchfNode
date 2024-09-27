const exp = require("constants");
const express=require("express");
const fs=require("fs");
const path=require("path");
const app=express();
const esession=require("express-session");
app.set("view engine","ejs");

const orderRoute=require("./routes/orderRoute");
const profileRoute=require("./routes/profileRoute");
//MONGODB
const client=require("mongodb").MongoClient;
let dbinstance;
client.connect("mongodb+srv://userroot:Password4001@cluster0.cmk41.mongodb.net/")
.then((server)=>{
    console.log("DB Connected..")
    dbinstance=server.db("Batchf");


}).catch((err)=>{
    console.log("Error ",err);

})
//db.users.findOne({});
//db.users.find({});

app.get("/getUsers",(req,res)=>{

    dbinstance.collection("users").find({}).toArray()
    .then((data)=>{
        res.json(data);

    }).catch((err)=>{

    });


})
app.get("/showUsers",(req,res)=>{

    dbinstance.collection("users").find({}).toArray()
    .then((data)=>{
        //res.json(data);
            res.render("allusers",{users:data})
    }).catch((err)=>{

    });


})

app.get("/addUser",(req,res)=>{
let obj={};
obj.name="Test"
obj.username="TestUser";
obj.password="Testpassword";

dbinstance.collection("users").insertOne(obj)
.then((response)=>{
    console.log(response);
    res.redirect("/getUsers");

})

})

app.get("/Dashboard.html",(req,res,next)=>{
    if(req.session.user)
        next();

        //res.sendFile(path.join(__dirname,"./Dashboard.html"));
    else
    res.redirect("/Login");
})
app.use(esession({
    saveUninitialized:true,
    secret:'sdf$#%$#234',
    resave:false
}))
app.use(express.static ("."));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use("/orders",orderRoute);
app.use("/profile",auth,profileRoute);
function auth(req,res,next)
{
    if(req.session.user)
        next();
    else
    res.redirect("/login");
}
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

app.get("/logout",(req,res)=>{
    req.session.destroy();
    res.redirect("/login")
})
app.get("/Login",(req,res)=>{
   // console.log(req.query);
    
   // res.send("GEt Request Rec.");
    res.sendFile(path.join(__dirname,"./login.html"));
})
app.get("/Dashboard",(req,res)=>{
if(req.session.user)
    res.sendFile(path.join(__dirname,"./Dashboard.html"));
else
res.redirect("/Login");

})
app.post("/Login",(req,res)=>{

dbinstance.collection("users").findOne({$and:[{"username":req.body.username},{"password":req.body.password}]})
.then((response)=>{
    if(response==null)
        res.redirect("/Login");
    else
    {
        req.session.user=response._id;
        req.session.name=response.name;
        res.redirect("/dashboard");

    }


}).catch((err)=>{

})



    // let users=JSON.parse(fs.readFileSync("users.json"));
    // let results=users.filter((item)=>{
    //     if(item.username==req.body.username && item.password==req.body.password)
    //         return true;
    // });
    // if(results.length==0)
    //     res.redirect("/Login");

    //    // res.sendFile(path.join(__dirname,"./Login.html"));
    // else
    // {
    //     req.session.user="x";

    // res.redirect("/Dashboard") // res.sendFile(path.join(__dirname,"./Dashboard.html"));
    // }

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
