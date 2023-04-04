import express from "express"
import mongoose, { mongo } from "mongoose"
import dotenv from "dotenv"


const app = express()
dotenv.config()
mongoose.set({ strictQuery : true})

app.get("/",(req,res)=>{
    res.send('<h1>Hello</h1>')
})

const connectDB =()=>{
    try{
        mongoose.connect(process.env.MONGO);
        console.log("connected to DB");
    }catch(err){
        console.log(err)
    }
}

app.listen(8080,()=>{
    connectDB()
    console.log("Server Running on 8080")
})