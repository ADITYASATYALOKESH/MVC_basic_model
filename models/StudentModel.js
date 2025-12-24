import mongoose from "mongoose";
const studentSchema=mongoose.Schema(
    {
       StudName :{
        type:String
       },
       StudId:{
        type:String
       },
       StuPhone:{
        typo:Number
       }
    }
);
const student=mongoose.model("student",studentSchema);
export default student;