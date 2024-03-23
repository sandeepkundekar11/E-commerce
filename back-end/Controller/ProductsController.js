const AsyncHandler=require("express-async-handler")
const {ProductsModel,Usermodel}=require("../model/connection")


const GetProducts=AsyncHandler(async(req,res)=>
{
    let products=await ProductsModel.find()
    res.json(products)
})

// const 
module.exports={GetProducts}