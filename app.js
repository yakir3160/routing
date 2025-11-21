import express from 'express'
import cors from "cors"
import { config } from 'dotenv'
//loading env variables
config();

// creating app 
const app = express();

// middlewear (cors ,json)
app.use(cors());
app.use(express.json())


let tasks = [
    { id: 1, title: "Learn Routing", completed: true },
    { id: 2, title: "Build an API", completed: false }
];

//main route 
app.get('/tasks', (req, res) => {
    res.json(tasks);
});
app.get('/tasks/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    const task = tasks.find(t => t.id === taskId);
    if (task)
        res.json(task);
    res.status(404).send('Task not found');
});
//post new task
app.post('/tasks', (req, res) => {

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
app.put('/tasks/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    const task = tasks.find(t => t.id === taskId);
    if (task) {
        task.title = req.body.title || task.title;
        task.completed = req.body.completed !== undefined ?
            req.body.completed : task.completed;
        res.json(task);
    } else {
        res.status(404).send('Task not found');
    }
});
// ID מחיקת משימה לפי - DELETE 
app.delete('/tasks/:id', (req, res) => {
    console.log(tasks);
    const taskId = parseInt(req.params.id);
    tasks = tasks.filter(t => t.id !== taskId);
    console.log(tasks);

    res.status(204).send(); // 204 = No Content

});
//starting server
const port = process.env.PORT || 5002;
app.listen(port, () => {
    {
        console.log(`The server is running on http://localhost:${port}`);
    }
})