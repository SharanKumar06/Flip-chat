const { disconnect } = require("mongoose");
const socketAuth= require("./socketAuth");

const initializeSockets= (io)=>{
    io.use(socketAuth);
    io.on("connection", (socket)=>{
        console.log("user connected : ", socket.userId, "socket id : ", socket.id);
        socket.on("disconnect", (reason)=>{
            console.log("user : ", socket.userId, " disconnected \n", "socketid: ", socket.id, "reason : ", reason);
        })
    });
    
}

module.exports= initializeSockets;