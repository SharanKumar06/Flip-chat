const { client } = require("../redis/redisClient");

const addConnection = async (userId, socketId) => {
    const key = `user:${userId}:connections`;

   return await client.sAdd(key, socketId);
};

const isOnline = async (userId) => {
    const key = `user:${userId}:connections`;
    const members = await client.sMembers(key);
    console.log(members);
    const count = await client.sCard(key);

    return count>0 ;
};

const removeConnection= async (userId, socketId)=>{
   
        const key = `user:${userId}:connections`;

       return await client.sRem(key, socketId);
   
}

const clearDatabase= async()=>{
        return await client.flushDb();
}

module.exports = {
    addConnection,
    isOnline,
    removeConnection,
    clearDatabase
};