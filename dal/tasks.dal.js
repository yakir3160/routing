


export let tasks = [
    { id: 1, title: "Learn Routing", completed: true },
    { id: 2, title: "Build an API", completed: false }
];


export const tasksDal = {
    getTasks : () =>{
        try {
            return tasks
        } catch (error) {
            throw error
        }
    },
    getLastTask: () => {
          try {
            return tasks[length-1];
        } catch (error) {
            throw error
        }
    }
}