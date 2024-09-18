const http=require("http");
const fs=require("fs");

const server=http.createServer((req,res)=>{

   // console.log("A Req rec");
    res.setHeader("content-type","text/html");
    //console.log(req.url);
    let filename="";
    if(req.url=="/")
        filename="/index.html"
    else
    filename=req.url;

    res.write(readFile("."+filename));
    res.end();



    // if(req.url=="/" || req.url=="/index.html")
    // {
    //     res.write (readFile("./index.html"));
    //     res.end();


    //  //   res.write("Home Page");
    // //  fs.readFile("./index.html","utf-8",(err,data)=>{

    // //     if(err)
    // //         res.write("Error in reading Page");
    // //     else
    // //     res.write (data);

    // //     res.end();

    // //  })

    // }
    // // else if (req.url=="/about.html")
    // //     {res.write("About us page");
    // //         res.end();
    // //     }
    //     else if(req.url=="/about.html")
    //     {
    //         fs.readFile("./about.html","utf-8",(err,data)=>{

    //             if(err)
    //                 res.write("Error in reading Page");
    //             else
    //             res.write (data);
        
    //             res.end();
        
    //          })
    //     }
    //     else if(req.url=="/style.css")
    //         {
    //             res.write(readFile("./style.css"));
    //             res.end();

    //             // fs.readFile("./style.css","utf-8",(err,data)=>{

    //             //     if(err)
    //             //         res.write("Error in reading Page");
    //             //     else
    //             //     res.write (data);
            
    //             //     res.end();
            
    //             //  })
    //         }
        
    // //res.write("Welcome <b>to</b> node js");
    // else

    // res.end();


});
function processRequest(req,res)
{

}
server.listen(3000);
// server.on("connection",(socket)=>{
//     console.log(" A request rec.");
// })

function readFile(filename)
{

try{    let data=fs.readFileSync(filename);
    return data;
}catch(e)
{
    return "";
    
}


    // fs.readFile(filename,"utf-8",(err,data)=>{

    //     if(err)
    //         return "Error in reading Page";
    //     else
    //     return data;

    //     //res.end();

    //  })
}