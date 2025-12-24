import student from '../models/StudentModel.js';
export const getStudents=async(req,res)=>{
    // const data={
    //     name:"Aditya",
    //     roll:1243
    // };
    const mydata=await student.find()
    res.send(mydata);
}
export const addStudents=async(req,res)=>{
    try{
        const data=req.body;
        console.log(data);
        const addedData=await student.insertMany(data);
        console.log(addedData);
        res.status(201).json("data added");
    }
    catch(error){
        res.status(500).json({error:error.message});
    }
}