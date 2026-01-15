import express from 'express'
import cors from "cors"
import apiRoutes from "./routes/index.js"



// creating app 
const app = express();

// middlewear (cors ,json)
app.use(cors());
app.use(express.json())

// request logging middleware - logs every incoming request
app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} ${req.method} ${req.originalUrl} [app.js]`);
    next();
});
// app.use(checkApiKey);

console.log("app.js file");

app.use('/api', apiRoutes)



export default app