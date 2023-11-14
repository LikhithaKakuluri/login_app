const mongoose=require("mongoose");
const connect=mongoose.connect("mongodb+srv://haripriya2813:hari@cluster0.qr9lxce.mongodb.net/?retryWrites=true&w=majority");

connect.then(()=>{
    console.log("Database connected Successfully");
})
.catch(()=>{
    console.log("Database cannot be connected");
})

const LoginSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const collection=new mongoose.model("users",LoginSchema)

module.exports=collection;