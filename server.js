import app from './app.js' 
import { config } from 'dotenv'
config();



//starting server
const port = process.env.PORT || 5002;

app.listen(port, () => {

    console.log(`The server is running on http://localhost:${port}`);

})
