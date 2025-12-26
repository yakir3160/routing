import { Router } from "express";
import {getUsers,registerUser,logUser,actionById} from '../controllers/users.controller.js'

const router = Router();

router.use((req, res, next) => {
    console.log(`${new Date().toISOString()} ${req.method} ${req.originalUrl} [users.routes.js]`);
    next();
});

router.get('/', getUsers);
router.post('/register',registerUser)
router.post('/login',logUser)


router.get('/:id',actionById) 
router.put('/:id',actionById)
router.delete('/:id',actionById)

export default router