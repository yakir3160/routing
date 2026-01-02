import { User } from "../models/user.model.js";
let users = [
    { id: 1, name: "John Doe", email: "john.doe@example.com" },
    { id: 2, name: "Jane Smith", email: "jane.smith@example.com" },
    { id: 3, name: "Alice Johnson", email: "alice.johnson@example.com" }
]


export const userDal = {
    getUsers: async () => {
        try {
            console.log("users dal getUsers start");
            const response = await User.find();
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
            console.log("Error in registerUser DAL:", error);
            
            throw error
        }
    },

    logUser: async (credentials) => {
        try {
            const response = await User.findOne({ email: credentials.email ,}).select('+password');
            if (!response) throw { status: 404, message: "User not found" };
            return response
        } catch (error) {
            throw error
        }
    },
    getUserById: async (id) => {
        try {

            const response = await User.findById(id)
            return response;
        } catch (error) {
            throw error
        }
    },
    updateUser: async (id, body) => {
        try {
            console.log("users dal updateUser start", body, id);
            const response = await User.findByIdAndUpdate(id, body, { new: true, runValidators: true });
            console.log("users dal updateUser end");
            return response;
        } catch (error) {
            throw error
        }
    },
    deleteUser: async (id) => {
        try {
            console.log("users dal deleteUser start");
            const response = await User.deleteOne({ _id: id });
            console.log("users dal deleteUser end");
            return response;
        } catch (error) {
            throw error
        }
    },
}