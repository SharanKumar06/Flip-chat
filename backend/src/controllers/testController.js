const test= async(req,res)=>{
    try {
         console.log("testing successful");
        return res.status(200).json({
            message: "testing successful"
        })
    } catch (err) {
        return res.status(401).json({
            message:"testing failed"
        })
    }
   
}

module.exports= {test};