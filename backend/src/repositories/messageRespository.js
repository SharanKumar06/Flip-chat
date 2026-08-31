const Message= require("../models/message");
const Conversation= require("../models/conversation")

const createMessage= async(data)=>{

    try {
        console.log(data);
        const senderId = data.senderId;
        const receiverId= data.receiverId;
        const content= data.content;

        let conversation = await Conversation.findOne({
            participants: {
                $all: [senderId, receiverId],
                $size: 2
            },
            isGroup: false
        });
        
        if(!conversation){
            conversation= await Conversation.create({participants:[senderId, receiverId], isGroup: false})
        }
        const conversationId=  conversation._id;
        
        const newMessage= await Message.create({conversationId, senderId, content});
        
        conversation.lastMessage= content;
        await conversation.save();
        
        return newMessage;


    } catch (error) {
        throw new Error({message: error.message})
    }
   

    


}


module.exports= {createMessage}
