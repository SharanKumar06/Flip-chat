const { createClient, RedisClient } =require( 'redis');




const client = createClient({
    
    username: process.env.REDIS_USERNAME,
    password: process.env.REDIS_PASSWORD,
    socket: {
        host: process.env.REDIS_HOST,
        port: 19860
    }

});

client.on('error', err => console.log('Redis Client Error', err));

const connectRedis = async () => {
    await client.connect();
    console.log("Redis connected");
    await client.set("test", "hello");
    const value = await client.get("test");
    console.log(value);
};




module.exports = {client, connectRedis}