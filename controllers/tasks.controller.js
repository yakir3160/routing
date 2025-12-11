


let tasks = [
    { id: 1, title: "Learn Routing", completed: true },
    { id: 2, title: "Build an API", completed: false }
];

export const getTasks = (req, res) => {
    console.log("getTasks()");
    

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
}
export const getLastTask = (req,res) => { 
        console.log("getLastTask()");
    res.json(tasks[tasks.length-1])
}
export const getTasksById = (req, res) => {
      console.log("getTasksById()");
    const taskId = parseInt(req.params.id);
    const task = tasks.find(t => t.id === taskId);
    if (task)
        res.json(task);
    res.status(404).send('Task not found');
}
export const addTask = (req, res) => {
 console.log("addTask()");
    const newTask = {
        id: tasks.length + 1,
        title: req.body.title,
        completed: false
    };
    tasks.push(newTask);
    console.log(tasks);

    res.status(201).json(newTask);

}

export const updateTask = (req, res) => {
     console.log("updateTask()");
    const { method } = req
    const { taskCompleted, pid: productId } = req.query

    const { authorization: token } = req.headers
    console.log(productId);

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
}
export const deleteTask = (req, res) => {
      console.log("deleteTask()");
    console.log(tasks);
    const taskId = parseInt(req.params.id);
    tasks = tasks.filter(t => t.id !== taskId);
    console.log(tasks);
    res.status(204).send(); // 204 = No Content

}