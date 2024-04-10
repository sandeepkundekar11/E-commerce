const AsyncHandler = require("express-async-handler");
const jwt=require("jsonwebtoken")
const checkAuth=AsyncHandler(async(req,res,next)=>
{
    let token=req.headers["authorization"]
    if(!token)
    {
        return res.json({
            message:"please provide the token"
        })
    }
    else
    {
        token=token.split(" ")[1]
        let verifyToken=await jwt.verify(token,process.env.SECRET_KEY)
        if(verifyToken)
        {
            next()
        }
        else
        {
            res.json({
                message:"please provide the valid token"
            })
        }
    }
})

module.exports=checkAuth