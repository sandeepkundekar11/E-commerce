const mongoose=require("mongoose")
mongoose.connect(process.env.DATABASE_SRC).then(()=>
{
    console.log("database is  connected successfully")
}).catch(()=>
{
    console.log("error in database")
})

const Userschema=new mongoose.Schema({
    firstname:String,
    lastname:String,
    email:String,
    password:String,
    phone_no:String,
    address:"",
    cards:[]
})

const model=mongoose.model("user",Userschema)
module.exports=model