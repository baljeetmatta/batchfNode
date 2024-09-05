// let data="CodeQuotient";
// // module.exports=data;
// function log()
// {
//     console.log("Function called");
// }
// //module.exports=log;
// //module.exports=data;
// //module.exports={fun:log,data:data};
// //module.exports.fun=log;
// //module.exports.data=data;
// module.exports={log,data};

const EventEmitter=require("events");
//console.log(event);
// const event=new EventEmitter();

// function log()
// {
//     console.log("Working on log...")
//     event.emit("message");;
// }
// module.exports={log,event};

// event.on("message",()=>{
//     console.log("Event handled");
// })



class Logger extends EventEmitter
{
    log()
    {
        console.log("Working on log");
        this.emit("message",{x:20,y:30});
        }
}
module.exports=Logger;
