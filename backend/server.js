const app = require("./src/app")
const http = require("http")
const dotenv= require("dotenv")
const {Server}= require("socket.io")


dotenv.config()

const server= http.createServer(app);
const io= new Server(server, {
    cors:{
      orgin:"*"
    }
});

const PORT= process.env.PORT || 5000;

server.listen(PORT, ()=>{
    console.log(`server started on ${PORT}`)
})



