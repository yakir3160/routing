import { Router } from "express";

let tasks = [
    { id: 1, title: "Learn Routing", completed: true },
    { id: 2, title: "Build an API", completed: false }
];
const router = Router();
//main route 
router.get('/', (req, res) => {
    console.log("tasks req");

    let isCompleted = req.query.complete;
    if (isCompleted) {
        console.log(isCompleted);
        if (isCompleted === 'false')
            isCompleted = false
        const task = tasks.find(t => t.completed === isCompleted);

        if (task)
            res.json(task);
        res.status(404).send('Task not found');
    }
    res.json(tasks);
});

router.get('/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    const task = tasks.find(t => t.id === taskId);
    if (task)
        res.json(task);
    res.status(404).send('Task not found');
});
//post new task
router.post('/', (req, res) => {

    const newTask = {
        id: tasks.length + 1,
        title: req.body.title,
        completed: false
    };
    tasks.push(newTask);
    console.log(tasks);

    res.status(201).json(newTask);

});
//update task //:
router.put('/:id', (req, res) => {
    const { method } = req
    const { taskCompleted, lama: LL } = req.query
    const { authorization: token } = req.headers
    
    const finalToken = token.split(" ")[1]
    console.log(finalToken);

    const taskId = parseInt(req.params.id)
    if (method === "PUT")
        console.log("good");
    console.log(taskId);

    const task = tasks.find(t => t.id === taskId);
    if (task) {
        task.title = req.body.title || task.title;
        task.completed = req.body.completed !== undefined ?
            req.body.completed : task.completed;
        console.log(task);

        res.json(task);
    } else {
        res.status(404).send('Task not found');
    }
});
// ID מחיקת משימה לפי - DELETE 
router.delete('/:id', (req, res) => {
    console.log(tasks);
    const taskId = parseInt(req.params.id);
    tasks = tasks.filter(t => t.id !== taskId);
    console.log(tasks);

    res.status(204).send(); // 204 = No Content

});



export default router




