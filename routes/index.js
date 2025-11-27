import { Router } from "express";
import taskRoutes from './tasks.routes.js'
import usersRoutes from './users.routes.js'
const router = Router();


router.use('/tasks',taskRoutes)
router.use('/users',usersRoutes)

export default router