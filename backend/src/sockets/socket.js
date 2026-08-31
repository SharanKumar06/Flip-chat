const { disconnect } = require("mongoose");
const socketAuth= require("./socketAuth");
const {addConnection, removeConnection, isOnline}= require("../services/presenceService");
const { createNewMessage } = require("../services/messageService");

const initializeSockets= (io)=>{
    io.use(socketAuth);
    io.on("connection", async (socket)=>{
         await addConnection(socket.userId, socket.id);
        console.log("user connected : ", socket.userId, "socket id : ", socket.id);

        socket.on("disconnect", async (reason)=>{
            await removeConnection(socket.userId, socket.id);
            console.log("user : ", socket.userId, " disconnected \n", "socketid: ", socket.id, "reason : ", reason);
        })

        socket.on("sendMessage", async (data)=>{
            console.log("data entering socket = ", data);
            data= JSON.parse(data);
            const receiverId= data.receiverId;
            const content= data.content;
            const onlineStatus= await isOnline(receiverId);
            console.log("reciever online status is ", onlineStatus);
            // const senderId= socket.userId;
            // const newMessage = await createNewMessage({receiverId, senderId, content});
            // console.log(newMessage);
        });



    });
    
}

module.exports= initializeSockets;