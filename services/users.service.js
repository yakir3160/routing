import { userDal } from "../dal/users.dal.js";


export const userService = {
    getUsers: async () => {
        try {
            console.log("users service getUsers start");
            const response = await userDal.getUsers()
            console.log("users service getUsers end");
            return response;
        } catch (error) {
            throw error;
        }
    },

    registerUser: async (userData) => {
        try {
            const response = await userDal.registerUser(userData);
            return response;
        } catch (error) {
            throw error;
        }
    },

    logUser: async (credentials) => {
        try {
            const response = await userDal.logUser(credentials);
            return response;
        } catch (error) {
            throw error;
        }
    },

    actionById: async (id, method, body) => {
        try {
            let response = null;
            if (method === 'GET')
                response = await userDal.getUserById(id);
            else if (method === 'PUT')
                response = await userDal.updateUser(id, body);
            else if (method === 'DELETE')
                response = await userDal.deleteUser(id);
            else
                throw { status: 400, message: 'Invalid method' };

            return response;
        } catch (error) {
            if (error && error.status === 404)
                return {
                    status: 404,
                    message: "not found ... "
                };
            throw error;
        }
    }

}