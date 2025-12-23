import { getTasks, getLastTask } from '../services/tasks.service.js';
export const getFunctions = {
    getTasks: async (req, res) => {
        try {
            console.log("getTasks controller start");
            const response = await getTasks();
            console.log("getTasks controller end");
            res.status(200).json(response);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    getLastTask: async (req, res) => {
        try {
            console.log("getLastTask controller start");
            const response = await getLastTask();
            console.log("getLastTask controller end");
            res.status(200).json(response);
        } catch (error) {
            res.status(500).json(error);
        }
    },
 
    getTasksById: (req, res) => {
        console.log("getTasksById()");
        const taskId = parseInt(req.params.id);
        const task = tasks.find(t => t.id === taskId);
        if (task) {
            res.json(task);
            return;
        }
        res.status(404).send('Task not found');
    },
};
export const addTask = (req, res) => {
    console.log("addTask");
    const newTask = { id: tasks.length + 1, title: req.body.title, completed: false };
    tasks.push(newTask);
    console.log(tasks);
    res.status(201).json(newTask);
}
export const updateTask = (req, res) => {
    console.log("updateTask()");
    const { method } = req
    /* const method = req.method; */
    const { taskCompleted, pid: productId } = req.query
    /*
    const taskCompleted = req.query.taskCompleted;
    const productId = req.query.pid;
    */
    const { authorization: token } = req.headers
    console.log(productId);
    const finalToken = token ? token.split(" ")[1] : null
    console.log(finalToken);
    const taskId = parseInt(req.params.id)
    if (method === "PUT") console.log("good");
    console.log(taskId);
    const task = tasks.find(t => t.id === taskId);
    if (task) {
        task.title = req.body.title || task.title;
        task.completed = req.body.completed !== undefined ? req.body.completed : task.completed;
        console.log(task);
        res.json(task);
    } else {
        res.status(404).send('Task not found');
    }
}
export const deleteTask = (req, res) => {
    console.log("deleteTask()");
    const taskId = parseInt(req.params.id);
 
    const index = tasks.findIndex(t => t.id === taskId);
    if (index !== -1) {
        tasks.splice(index, 1);
    }
    console.log(tasks);
    res.status(204).send();
}