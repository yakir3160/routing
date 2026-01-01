import {mongoDB_URI} from './index.js';
import {connect} from 'mongoose';




export const connectDB = async () => {
    try {
        await connect(mongoDB_URI);
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
};
