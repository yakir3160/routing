import { Router } from "express";
import {getUsers,registerUser,logUser,actionById} from '../controllers/users.controller.js'
import { extractToken } from "../utils/token.js";

const router = Router();

router.use((req, res, next) => {
    console.log(`${new Date().toISOString()} ${req.method} ${req.originalUrl} [users.routes.js]`);
    next();
});

router.get('/', extractToken, getUsers);
router.post('/register', registerUser);
router.post('/login', logUser);

router.get('/:id', extractToken, actionById);
router.put('/:id', extractToken, actionById);
router.delete('/:id', extractToken, actionById);

export default router