
import { Router } from "express";
import { getFunctions, addTask, updateTask, deleteTask } from "../controllers/tasks.controller.js";
const router = Router();

router.get('/', getFunctions.getTasks);
router.get('/last', getFunctions.getLastTask);
router.get('/:id', getFunctions.getTasksById);


router.post('/', addTask);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);
export default router;