

export const getUsers = async (req, res) => {
    try {
        const response = await getUsers()
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json(error);
    }
}

export const registerUser = async (req, res) => {
    try {
        const response = await registerUser()
        res.status(201).json(response);
    } catch (error) {
        res.status(500).json(error);
    }
}

export const logUser = async (req, res) => {
    try {
        const response = await logUser()
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json(error);
    }
}

export const actionById = async (req, res) => {
    try {
        const {id} = req.params
        const {method} = req
        const response = await actionById(id,method)
        res.status(response.status).json(response);
    } catch (error) {
        res.status(error.status).json(error);
    }
}

