const app = require("./src/app")
const http = require("http")
const dotenv= require("dotenv")
const {Server}= require("socket.io")
const connectDb= require("./src/database/mongo")
const initializeSockets = require("./src/sockets/socket")
const {connectRedis} = require("../backend/src/redis/redisClient")

const {connectPubSub, publishMessage, subscribeToChannel, CHANNELS} = require("../backend/src/redis/pubSubClient")

dotenv.config()
connectDb();
connectRedis();
connectPubSub();

subscribeToChannel(CHANNELS.MESSAGES, (message)=>{
    console.log("message recieved: ", JSON.parse(message));
})

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



