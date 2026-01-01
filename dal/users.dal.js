
import { User } from "../models/user.model.js";
let  users = [
    { id: 1, name: "John Doe", email: "john.doe@example.com" },
    { id: 2, name: "Jane Smith", email: "jane.smith@example.com" },
    { id: 3, name: "Alice Johnson", email: "alice.johnson@example.com" }
]


export const userDal = {
    getUsers: async () => {
        try {
            console.log("users dal getUsers start");
            const response = users;
            console.log("users dal getUsers end");
            return response;
        } catch (error) {
            throw error
        }
    },

    registerUser: async (body) => {
        try {
             const response = await User.create(body);
            console.log("users dal registerUser end");
            return response;
        } catch (error) {
            throw error
        }
    },

    logUser: async () => {
        try {
            const response = await logUser()
            return response;
        } catch (error) {
            throw error
        }
    },
   getUserById: async (id) => {
        try {

            const response = await getUserById(id)
            return response;
        } catch (error) {
            throw error
        }
    },
    updateUser: async (id, body) => {
        try {

            const response = users.map(user => user.id === parseInt(id) ? { ...user, ...body } : user);
            users = response;
            return response;
        } catch (error) {
            throw error
        }
    },
    deleteUser: async (id) => {
        try {
            users = users.filter(user => user.id !== parseInt(id));
            const response = { message: "User deleted successfully" };
            return response;
        } catch (error) {
            throw error
        }
    },
}