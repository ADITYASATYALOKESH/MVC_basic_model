import express from 'express';
const router=express.Router();
import { getStudents, addStudents } from '../controllers/studentController.js';
router.get('/get-students',getStudents);
router.post('/add-students',addStudents);
export default router;