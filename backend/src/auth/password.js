const bcrypt= require("bcryptjs")

const hashPassword= async(password)=>{
    return await bcrypt.hash(password, Number(process.env.HASH_KEY));
}

const comparePassword= async (password, hashedPassword)=>{
    return await bcrypt.compare(password, hashedPassword)
}

module.exports= {hashPassword, comparePassword}