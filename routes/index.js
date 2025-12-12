import { Router } from "express";
import taskRoutes from './tasks.routes.js'
import usersRoutes from './users.routes.js'
import { checkToken } from "../utils/token.js";
const router = Router();


router.use('/tasks',checkToken, taskRoutes)
router.use('/users',usersRoutes)

export default router