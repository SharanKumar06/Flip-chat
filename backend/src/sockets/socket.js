const socketAuth= require("./socketAuth");

const initializeSockets= (io)=>{
    io.use(socketAuth);
    io.on("connection", (socket)=>{
        console.log("user connected : ", socket.userId);
    });
}

module.exports= initializeSockets;