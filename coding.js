// const EventEmitter=require("events");
// //console.log(events);
// const evt=new EventEmitter();
// function log()
// {
//     console.log("Working on log...")
//     evt.emit("message")
// }
// //evt.emit("message");//Raise
// //Handle
// // evt.on("message",()=>{
// //     console.log("Event handled");

// // })
// //evt.emit("message");//Raise
// //log();
// module.exports={log,evt};
const EventEmitter=require("events");
class Logger extends EventEmitter
{
    log()
    {
        console.log("Working on log..");
        this.emit("message");
    }
}
module.exports=Logger;





