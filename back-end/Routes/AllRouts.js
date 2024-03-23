const express=require("express")
const Route=express.Router()
const {GetProducts}=require("../Controller/ProductsController")
const {Signup ,Login} =require("../Controller/UserController")
Route.get("/allproducts",GetProducts)
Route.post("/signup",Signup)
Route.post("/login",Login)

module.exports=Route