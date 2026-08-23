
const {client}= require("./redisClient");

const publisher= client.duplicate();
const subscriber= client.duplicate();


const CHANNELS= {
    MESSAGES: "messages"
}


const connectPubSub= async()=>{
    await publisher.connect();
    await subscriber.connect();
    console.log("Redis pub/sub is connected");
}


const subscribeToChannel= async(channel, callback)=>{

    await subscriber.subscribe(channel, callback);
    console.log(`Subscribed to channel ${channel}`)

}

const publishMessage= async(message)=>{
    await publisher.publish(CHANNELS.MESSAGES, JSON.stringify(message));
    console.log("message published");
}

module.exports= {publishMessage, subscribeToChannel, connectPubSub, CHANNELS};