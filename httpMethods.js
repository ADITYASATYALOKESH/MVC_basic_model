const express=require('express');
const app=express();
app.get('/',(req,res)=>{
    res.send('Get method is called by user');
});
app.post('/login',(req,res)=>{
    res.send('post method is called by user');
});
app.put('/add-cart',(req,res)=>{
    res.send('put method is called by user');
});
app.delete('/delete-data',(req,res)=>{
    res.send('delete data');
});
app.all('*',(req,res)=>{
    res.status(404).send(
        '404 Bad Gateway'
    );
});
const port=8080;
app.listen(port,()=>{
    console.log(`server is started on http://localhost:${port}`);
});
