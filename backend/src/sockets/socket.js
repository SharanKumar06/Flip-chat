const { disconnect } = require("mongoose");
const socketAuth= require("./socketAuth");
const {addConnection, removeConnection, isOnline}= require("../services/presenceService")

const initializeSockets= (io)=>{
    io.use(socketAuth);
    io.on("connection", async (socket)=>{
         await addConnection(socket.userId, socket.id);
        console.log("user connected : ", socket.userId, "socket id : ", socket.id);
        socket.on("disconnect", async (reason)=>{
            await removeConnection(socket.userId, socket.id);
            console.log("user : ", socket.userId, " disconnected \n", "socketid: ", socket.id, "reason : ", reason);
        })
    });
    
}

module.exports= initializeSockets;