import { userDal } from "../dal/users.dal.js";
import { hashPassword, comparePassword } from "../utils/hashPassword.js";
import { createToken } from "../utils/token.js";

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
            console.log("users service registerUser start");
            const hashedPassword = await hashPassword(userData.password);
            const response = await userDal.registerUser({ ...userData, password: hashedPassword });
            console.log("users service registerUser end");
            const token = await createToken({ id: response._id, email: response.email }, { expiresIn: '1d' });
            console.log("users service registerUser token created");
            return { ...response._doc, password: undefined, token };
        } catch (error) {
            throw error;
        }
    },

    logUser: async (credentials) => {
        try {
            if (!credentials.email || !credentials.password) {
                throw { status: 400, message: "Email and password are required" };
            }
            console.log("users service logUser start");
            const response = await userDal.logUser(credentials);
            
            const isMatch = await comparePassword(credentials.password, response.password);
            if (!isMatch) {
                throw { status: 401, message: "Invalid password" };
            }
            console.log("users service logUser end");
            const token = await createToken({ id: response._id, email: response.email }, { expiresIn: '1d' });
            console.log("users service logUser token created");
            return { ...response._doc, password: undefined, token };
        } catch (error) {
            throw error;
        }
    },

    actionById: async (id, method, body) => {
        try {
            console.log("users service action by id start");
            let response = null;
            if (method === 'GET')
                response = await userDal.getUserById(id);
            else if (method === 'PUT')
                response = await userDal.updateUser(id, body);
            else if (method === 'DELETE')
                response = await userDal.deleteUser(id);
            else
                throw { status: 400, message: 'Invalid method' };

            console.log("users service action by id end");
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