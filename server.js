import express from 'express';
import router from './routers/studentRouter.js';
import mongoose from 'mongoose';
import cors from 'cors';
const app=express();
mongoose.connect("mongodb+srv://adityasatyalokesh_db_user:adhi123@cluster0.8bgysfh.mongodb.net/").then(()=>console.log("db connected"))
                                    .catch((error)=>console.log(error));
app.use(express.json());
app.use(cors());
app.use('/',router);
app.get('/',(req,res)=>{
    res.send('This is Aditya');
});
app.listen((2002),()=>{
    console.log("server is started on http://localhost:2002");
});