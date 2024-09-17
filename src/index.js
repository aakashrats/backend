import dotenv from "dotenv"
import connectDB from "./db/index.js";


dotenv.config({
    path: './env',

})

connectDB()
.then((err) =>{
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running on port ${process.env.PORT || 8000}`); 
    })
})
.catch((err) =>{
     console.log("MONGO db connection failed !!! ", err);
}
)





// import express from 'express';
// const app = express();
// const PORT = process.env.PORT ;

// app.listen(PORT, () => {
//   console.log(`App is listening on port ${PORT}`);
// });
























/*
// import mongoose, { Mongoose } from "mongoose";
// import { DB_NAME } from "./constants";
// import express from "express"
// const app = express()
// (async () =>
// {
//     try{
//         await Mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("errror",(error)=>{
//           console.log("ERRR:", error);
//            throw error
//     })
//     app.listen(process.env.PORT,() +> {
//         console.log(`App is listening on port ${proces.env.PORT ||8000}`)
//     })

//     } catch (error) {
//         console.error("ERROR:",error);
//         throw err
//     }
// })()
*/