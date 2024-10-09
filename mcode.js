const express=require("express");
const app=express();
const path=require("path");

const multer=require("multer");
//const uploadFile=multer({dest:'files'});
const mstorage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"files");
    },
    filename:(req,file,cb)=>{
        //const ext=file.mimetype.split("/")[1];
        const ext=path.extname(file.originalname);

        cb(null,req.body.name+ext);

    }
})
const filter=(req,file,cb)=>{
    const ext=path.extname(file.originalname);

    if(ext==".png")
        cb(null,true);
    else
    cb(new Error("File not supported"),false);

}
const uploadFile=multer({storage:mstorage,fileFilter:filter});

app.use(express.static("."));
app.use(express.urlencoded());
app.post("/upload",uploadFile.single("pic"), (req,res)=>{
    console.log(req.body.name);
    console.log(req.file);

    res.end();
})





app.listen(3000);
