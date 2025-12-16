import express from 'express';
import router from './routers/studentRouter.js'
const app=express();
app.use(express.json());
app.use('/',router);
app.get('/',(req,res)=>{
    res.send('This is Aditya');
});
app.listen((2002),()=>{
    console.log("server is started on http://localhost:2002");
});