//generateToken
const jwt= require("jsonwebtoken");

const generateToken= async(id) =>{
    const token = await jwt.sign({ id : id},
        process.env.JWT_SECRET, 
        {
            expiresIn: "7d",
        }
    )
    return token;
}

//verifyToken

const verifyToken= async(token)=>{
 return await jwt.verify(token, process.env.JWT_SECRET)
}

module.exports= {generateToken, verifyToken};