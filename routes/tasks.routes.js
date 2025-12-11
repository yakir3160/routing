import { Router } from "express";
import { getTasks,getTasksById,addTask,updateTask,deleteTask,getLastTask } from "../controllers/tasks.controller.js";

const router = Router();
 
router.get('/',getTasks);
router.get ('/last',getLastTask)

router.post('/', addTask);


router.get('/:id',getTasksById);
router.put('/:id',updateTask ); 
router.delete('/:id',deleteTask);



export default router




