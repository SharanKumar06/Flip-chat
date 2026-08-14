const {verifyToken}= require("../auth/jwt")

const socketAuth= (socket, next)=>{
    try {
        const authHeader = socket.handshake.headers.authorization;
        if(!authHeader){
            return next(new Error("Authentication required"));
        }
        const token = authHeader.split(" ")[1];
        const decoded= verifyToken(token, process.env.JWT_SECRET);
        socket.userId= decoded._id;
        next();

    } catch (err) {
        return next(new Error("Invalid or expired token"))
    }
}

module.exports= socketAuth;