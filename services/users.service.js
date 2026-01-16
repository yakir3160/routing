import { userDal } from "../dal/users.dal.js";
import { hashPassword, comparePassword } from "../utils/hashPassword.js";
import { createToken } from "../utils/token.js";
import { getWeather } from "../microServices/weather.service.js";
import { dateTimeFormater_il } from "../utils/dateTimeFormater_il.js";  
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
            if (userData.password.length < 7) {
                throw { status: 400, message: "Password must be at least 7 characters long" };
            }
            const hashedPassword = await hashPassword(userData.password);
            console.log(hashedPassword);

            const response = await userDal.registerUser({ ...userData, password: hashedPassword });
            console.log("users service registerUser end");
            const token = await createToken({ id: response._id, email: response.email }, { expiresIn: '1 month' });
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
            if (method === 'GET') {

                response = await userDal.getUserById(id);
                console.log(response);

                const weather = await getWeather(response.city, response.state, response.country);
  
                return {
                    ...response,
                    createdAt: dateTimeFormater_il.formatDate(response.createdAt)+ ' ' + dateTimeFormater_il.formatTime(response.createdAt),
                    updatedAt: dateTimeFormater_il.formatDate(response.updatedAt)+ ' ' + dateTimeFormater_il.formatTime(response.updatedAt),
                    weather
                };

            }

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