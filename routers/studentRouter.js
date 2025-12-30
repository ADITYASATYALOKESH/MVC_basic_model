import express from 'express';
const router=express.Router();
import { getStudents, addStudents, getElementById, getElementsByQueryParams, updateStudents} from '../controllers/studentController.js';
router.get('/get-students',getStudents);
router.post('/add-students',addStudents);
router.get('/get-studentById/:id',getElementById);
router.get('/get-student',getElementsByQueryParams);
router.put('/updateStudent/:id',updateStudents);
export default router;
