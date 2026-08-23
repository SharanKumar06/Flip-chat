const { publishMessage } = require("../redis/pubSubClient");
const presenceService= require("../services/presenceService")
const testOnline= async(req,res)=>{
    try {

        const onlineStatus= await presenceService.isOnline(req.body.userId);
        console.log(`${req.body.userId} ${onlineStatus}`);
        //  console.log("testing successful");
        return res.status(200).json({
            message: "testing successful"
        })
    } catch (err) {
        return res.status(401).json({
            message:err.message
        })
    }
   
}

const clearRedis= async(req, res)=>{
    try {
        const result= await presenceService.clearDatabase();
        return res.status(200).json({message: "redis database cleared"});
    } catch (err) {
        return res.status(401).json({
            message: err.message
        })
    }
}

const testPublish = async(req, res)=>{
    try {
        const result= await publishMessage(req.body)
        return res.status(200).json({
            message: "message sent"
        })
    } catch (err) {
        return res.status(401).json({
            message: err.message
        })
    }
}

module.exports= {testOnline, clearRedis, testPublish};