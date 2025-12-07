import express from 'express';
const app=express()
//middleware
app.use(express.json());
app.get('/',(req,res)=>{
    res.send("Hello This is Home Page");
});
app.get('/about',(req,res)=>{
    res.send("This is about page");
});
app.post('/login',(req,res)=>{
    const data=req.body;
    console.log(data);
    res.send("Data Added succesfully");
});
app.put('/edit-user',(req,res)=>{
   const mydata=req.body;
   console.log(mydata);
   res.send("data is putted");
});
app.listen(2002,()=>{
    console.log("Server is started on http://localhost:2002");
});