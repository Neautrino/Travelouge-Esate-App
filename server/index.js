import express, { json } from "express"
import rootRouter from './routes/index.js';
import cookieParser from "cookie-parser";


const app = express();

app.use(express.json())
app.use(cookieParser())
app.use("/api/v1", rootRouter)


app.listen(8800 , ()=>{
    console.log("Server is running on port 8800")
})