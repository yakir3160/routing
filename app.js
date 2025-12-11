import express from 'express'
import cors from "cors"
import { config } from 'dotenv'
import apiRoutes from "./routes/index.js"
//loading env variables
config();

// creating app 
const app = express();

// middlewear (cors ,json)
app.use(cors());
app.use(express.json())

app.use('/api',apiRoutes)


//starting server
const port = process.env.PORT || 5002;

app.listen(port, () => {
    {
        console.log(`The server is running on http://localhost:${port}`);
    }
})


