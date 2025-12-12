


export const checkApiKey = (req, res, next) => {
    const apiKey = req.headers['x-api-key'];
    if (!apiKey ) {
        return res.status(403).json({ message: 'Forbidden: Invalid API Key or missing' });
    }
    next();
}   