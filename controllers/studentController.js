export const getStudents=(req,res)=>{
    const data={
        name:"Aditya",
        roll:1243
    };
    res.send(data);
}
export const addStudents=(req,res)=>{
    const data=req.body;
    res.send('Data Updated');
}