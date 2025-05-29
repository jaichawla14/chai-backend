// require('dotenv').config()
import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({
  path: './env'
})


connectDB()




// ( async () => {
//   try {
    
//   } catch (error) {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//     console.error("ERROR: ", error)
//     throw error
//   }
// })()