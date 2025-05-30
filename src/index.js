// require('dotenv').config()
import dotenv from "dotenv"
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
  path: './env'
})


connectDB()
.then(() => {
  app.listen (process.env.PORT || 8000, () => {
    console.log(`Server is Running at poet : ${process.env.PORT}`);
    
  })
})
.catch((err) => {
  console.log("MONGODB connect failed", err);
  
})



// ( async () => {
//   try {
    
//   } catch (error) {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//     console.error("ERROR: ", error)
//     throw error
//   }
// })()