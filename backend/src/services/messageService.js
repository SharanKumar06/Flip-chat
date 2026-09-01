const { publishMessage } = require("../redis/pubSubClient");
const {createMessage} = require("../repositories/messageRespository")

const createNewMessage= async(data)=>{

    try {
        console.log(data);
         const newMessage= await createMessage(data);
        //  const publishedMessage= await publishMessage(newMessage);
         return newMessage;
    } catch (err) {
        console.log(err.message);
        throw new Error({message:err.message});
    }
    
}


module.exports= {createNewMessage};