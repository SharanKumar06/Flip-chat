const {verifyToken}= require("../auth/jwt");


const authMiddleware= async(req, res, next)=>{

    try {
        const authHeader= req.headers.authorization;
        if(!authHeader){
            return res.status(401).json({
                message: "Authorization headers missing"
            })
        }
        const [schema, token]= authHeader.split(" ");
        if(schema !== "Bearer" || !token){
            return res.status(401).json({
                message: "Invalid authorization format"
            });
        }
        const decoded= verifyToken(token, process.env.JWT_SECRET);
        if(!decoded){
            return res.status(401).json({
                message:"Invalid or expired token"
            })
        }
        req.user= decoded;
        next();
    } catch (err) {
        return res.status(401).json({
            message:"Invalid or expired token"
        })
    }
  
}

module.exports= authMiddleware;