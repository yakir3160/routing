
import { userService } from "../services/users.service.js";
import { verifyToken } from "../utils/token.js";

export const getUsers = async (req, res) => {
    try {
        console.log("users controller getUsers start");
        await verifyToken(req.token);
        const response = await userService.getUsers()
        console.log("users controller getUsers end");
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json(error);
    }
}

export const registerUser = async (req, res) => {
    try {
        console.log("users controller registerUser start");
        const response = await userService.registerUser(req.body)
        console.log("users controller registerUser end");
        res.status(201).json(response);
    } catch (error) {
        res.status(500).json(error);
    }
}

export const logUser = async (req, res) => {
    try {
        console.log("users controller logUser start");
        const credentials = req.body;
        const response = await userService.logUser(credentials);
        console.log("users controller logUser end");
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json(error);
    }
}

export const actionById = async (req, res) => {
    try {
        await verifyToken(req.token);
        const { id } = req.params
        const { method } = req
        const { body } = req
        const response = await userService.actionById(id, method, body)
        const statusCode = (response && Number.isInteger(response.status)) ? response.status : 200
        res.status(statusCode).json(response);
    } catch (error) {
        const statusCode = (error && Number.isInteger(error.status)) ? error.status : 500
        res.status(statusCode).json(error);
    }
}

