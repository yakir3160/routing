import { tasksDal } from "../dal/tasks.dal.js";

export const getTasks = async () =>{
    try{
        console.log("getTasks service start")
        const response = await tasksDal.getTasks()
        return response
    } catch(error) {
        throw error
}
}
export const getLastTask = async () => {
    try {
        console.log("getLastTask service start");
          const response = await tasksDal.getLastTask()
        return response;
    } catch (error) {
        throw error;
    }
};