import express from 'express'
import cors from "cors"
import apiRoutes from "./routes/index.js"
import { checkApiKey } from './utils/apiKey.js';
//loading env variables


// creating app 
const app = express();

// middlewear (cors ,json)
app.use(cors());
app.use(express.json())
app.use(checkApiKey);


app.use('/api', apiRoutes)



export default app