import express from "express";
import mangoose, { mongo } from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from 'dotenv'
import postRoutes from "./routes/post.js"
import userRoutes from "./routes/users.js"

const app = express();
dotenv.config()
app.use(cors())
app.use(bodyParser.json({limit:"30mb",extended:true}))
app.use(bodyParser.urlencoded({limit:"30mb", extends:true}))
app.use('/posts',postRoutes)
app.use('/user',userRoutes)
const CONNECTION_URL = 'mongodb+srv://Nishanttravel:Nishanttravel@cluster0.v3sjrmv.mongodb.net/?retryWrites=true&w=majorityt';
const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology :true})
.then(()=> app.listen(PORT,()=>console.log(`server is running on ${PORT}`)))
.catch((error)=> console.log(error) )

