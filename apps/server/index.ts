import express,{Request,Response} from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
dotenv.config()
import usersRoutes from './routes/usersRoutes'

const database = process.env.DATABASE_URI    

const app = express()

const PORT = process.env.PORT ||  3500;

// middlewwares
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())
app.use(cookieParser())

//Routes
app.use('/users',usersRoutes)
 


app.listen(PORT, async () => {
    await mongoose.connect(database)
        .then(() => console.log(`server running on port ${PORT}`))
        .catch((err) => console.log(`database connectivity failed: ${err.message}`))
})