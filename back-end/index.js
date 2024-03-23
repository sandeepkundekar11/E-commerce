const dorenv=require("dotenv").config({path:"./config.env"})
const express=require("express")
const cors=require("cors")
const app=express()
const AllRoute=require("./Routes/AllRouts")
app.use(cors())
app.use(express.json())

app.use("/ecommerce",AllRoute)
const PORT=process.env.PORT
app.listen(PORT,()=>
{
    console.log(`server is running on ${PORT}`)
})
