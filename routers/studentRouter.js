import express from 'express';
const router=express.Router();
import { getStudents, addStudents, getElementById} from '../controllers/studentController.js';
router.get('/get-students',getStudents);
router.post('/add-students',addStudents);
router.get('/get-studentById/:id',getElementById);
export default router;