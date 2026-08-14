//generateToken
const jwt= require("jsonwebtoken");

const generateToken= (id) =>{
    const token =  jwt.sign({ id : id},
        process.env.JWT_SECRET, 
        {
            expiresIn: "7d",
        }
    )
    return token;
}

//verifyToken

const verifyToken= (token)=>{
 return jwt.verify(token, process.env.JWT_SECRET)
}

module.exports= {generateToken, verifyToken};