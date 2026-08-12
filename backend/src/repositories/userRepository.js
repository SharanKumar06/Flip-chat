const User= require("../models/user");

const findUserByEmail= async (email)=>{
    return await User.findOne({email});
}

const findUserById= async (id)=>{
    return await User.findOne({_id: id});
}

const createUser= async (userData)=>{
    const user= await User.create(userData);
    // console.log(user);
    return user
}

module.exports= {findUserByEmail, findUserById, createUser};
