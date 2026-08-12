
const {findUserByEmail,createUser} = require("../repositories/userRepository");
const {hashPassword, comparePassword}= require("../auth/password")
const {generateToken}= require("../auth/jwt")


const registerUser= async({username, email, password})=>{

    try {
        const user=await findUserByEmail(email);
        if(user){
            throw new Error("User already exists");
        }
        const hashedPassword= await hashPassword(password);
        
        const newUser= await createUser({username, email, password: hashedPassword});
        
        return newUser;
        
    } catch (err) {
          console.log(err.message)
        throw new Error(err.message);
    }
        
}


const loginUser= async ({email, password})=>{
    try {
        const user = await findUserByEmail(email);
        if(!user){
            throw new Error("no such user exists")
        }

        const check= await comparePassword(password, user.password)
        if(!check){
            throw new Error("wrong password")
        }
        
        const token = await generateToken(user._id);

        return {
            token, 
            user:{
                userid: user._id,
                username: user.username,
                email: user.email
            }
        }


    } catch (err) {
      
        throw new Error(err.message)
    }
}

module.exports= {loginUser, registerUser};