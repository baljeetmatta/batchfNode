//console.log("Hello");
//console.log(module);
// const log=require("./code");
// log();
// const code=require("./code");

// console.log(code.data);
// code.log();

//const fs=require("fs")
//console.log(data);

//conconsosole.log(d);


//data=1;

//const log=require("./code");
// const EventEmitter=require("events");
// const event=new EventEmitter();
// event.on("message",()=>{
//     console.log("User message handled");
// })
//log();
// const code=require("./code");
// code.event.on("message",()=>{
//     console.log("Event handled");
// })
// code.log();

// const Logger=require("./code");
// const logger=new Logger();
// logger.on("message",(data)=>{
//     console.log("Event Handled",data);
// })
// logger.log();
//const EventEmitter=require("events");
//const log=require("./coding");
//const evt=new EventEmitter();
// evt.on("message",()=>{
//     console.log("Handled..")
// })
//log();
// const coding=require("./coding");
// coding.evt.on("message",()=>{
//     console.log("Event handled")
// })

// coding.log();

const Logger=require("./coding");
const logger=new Logger();
logger.on("message",()=>{
    console.log("Handled")
})
logger.log();



