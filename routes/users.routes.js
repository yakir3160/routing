import { Router } from "express";
import taskRouter from './tasks.routes.js'

const router = Router();

const users = [
    {
        name: "Yakir",
        age: 30
    },
    {
        name: "Tal",
        age: 22
    }
]
router.get('/', (req,res)=>{
    res.json(users)
})


export default router