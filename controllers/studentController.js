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
export const getElementById=async(req,res)=>{
    try{
        const  id=req.params.id;
        const data=await student.findById({_id:id});
        console.log(data);
        res.status(200).json(data);
    }
    catch(error){
        res.status(500).json({error:error.message});
    }
}
export const getElementsByQueryParams=async(req,res)=>{
    try{
        const {name,number}=req.query;
        console.log(name,number);
        res.status(200).json();
    }
    catch(error)
    {
        res.status(500).json({error:error.message});
    }
}
export const updateStudents=async(req,res)=>{
    try{
        const {id}=req.params;
        console.log(id);
        const data=req.body;
        // const updateData=await student.findOneAndUpdate({StudId:id},data);
        const updateData=await student.findByIdAndUpdate({_id:id},data,{new:true});
        if(!updateData)
        {
            return res.status(404).json({message:"user not existed"});
        }
        else{
            res.status(200).json({student: updateData, message:"User existed"});
        }
    }
    catch(error)
    {
        res.status(500).json({error:error.message});
    }
}