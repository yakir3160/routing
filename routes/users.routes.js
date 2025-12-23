import { Router } from "express";
import {getUsers,registerUser,logUser,actionById} from '../controllers/users.controller.js'

const router = Router();

router.get('/', getUsers);
router.post('/register',registerUser)
router.post('/login',logUser)


router.get('/:id',actionById) 
router.put('/:id',actionById)
router.delete('/:id',actionById)

export default router