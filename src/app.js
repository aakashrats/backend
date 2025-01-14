import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
const app = express()

//cors 
app.use(cors(
{
    origin: process.env.CORS_ORIGIN,
    credentials: true

}))


//settings
app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit:"16kb"}))
app.use(express.static("public"))

//cookie 
app.use(cookieParser())





export { app }