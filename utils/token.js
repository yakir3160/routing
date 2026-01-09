import  jwt from 'jsonwebtoken';
import {jwtSecret} from '../config/index.js'


export const extractToken = (req, res, next) => {
  const auth = req.headers.authorization || req.get('Authorization');
  if (!auth) return res.status(401).json({ error: 'No Authorization header' });

  const [scheme, token] = auth.split(' ');
  if (scheme !== 'Bearer' || !token) return res.status(401).json({ error: 'Invalid Authorization header' });

  req.token = token;
  next();
}
export const createToken = async (payload, options) => {

    if (!jwtSecret) {
        throw new Error('JWT Secret is not defined');
    }
    return await jwt.sign(payload, jwtSecret, options);
};

export const verifyToken = async (token) => {
    try {
        return await jwt.verify(token, jwtSecret);
    } catch (error) {
        throw error;
    }
};
