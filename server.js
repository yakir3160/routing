import app from './app.js' 
import {port} from './config/index.js'
import {connectDB} from './config/db.js'


app.listen(port, async() => {
    await connectDB();
    console.log(`The server is running on http://localhost:${port}`);
})
