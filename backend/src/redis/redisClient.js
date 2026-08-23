const { createClient, RedisClient } =require( 'redis');

const client = createClient({
    username: 'default',
    password: 'F73nOFWQlTYjoMMoG5OCC9ZndEE90oih',
    socket: {
        host: 'tenderhearted-megastylish-salient-92469.db.redis.io',
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