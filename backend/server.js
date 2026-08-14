const app = require("./src/app")
const http = require("http")
const dotenv= require("dotenv")
const {Server}= require("socket.io")
const connectDb= require("./src/database/mongo")
const initializeSockets = require("./src/sockets/socket")

dotenv.config()
connectDb();

const server= http.createServer(app);
const io= new Server(server, {
    cors:{
      orgin:"*"
    }
});

initializeSockets(io);

const PORT= process.env.PORT || 5000;

server.listen(PORT, ()=>{
    console.log(`server started on ${PORT}`)
})



