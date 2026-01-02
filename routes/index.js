import { Router } from "express";
import taskRoutes from './tasks.routes.js'
import usersRoutes from './users.routes.js'
import { verifyToken } from "../utils/token.js";
const router = Router();

// router-level request logging middleware
router.use((req, res, next) => {
    console.log(`${new Date().toISOString()} ${req.method} ${req.originalUrl} [index router]`);
    next();
});

console.log("index router");

router.use('/tasks', verifyToken, taskRoutes)
router.use('/users', usersRoutes)

export default router