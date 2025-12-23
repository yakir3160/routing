import { tasksDal } from "../dal/tasks.dal"

export const getTasks = async () =>{
    try{
        console.log("getTasks servicas start")
        const response = await tasksDal.getTask()
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