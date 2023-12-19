import express,{Request,Response,Application} from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
dotenv.config()
import usersRoutes from './routes/usersRoutes'
import productsRoutes from './routes/productRoutes'
import orderRoutes from './routes/orderRoutes'
import adminRoutes from './routes/adminRoutes'
import categoryRoutes from './routes/categoryRoutes'

const database: string = process.env.DATABASE_URI  as string 

//ENV 

export const ACCESS_TOKEN_SECRET: string = process.env.ACCESS_TOKEN_SECRET as string
export const ADMIN_TOKEN_SECRET: string = process.env.ADMIN_TOKEN_SECRET as string

const app: Application = express()

const PORT = process.env.PORT ||  3500;

// middlewwares
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())
app.use(cookieParser())

//Routes
app.use('/users',usersRoutes)
app.use('/products',productsRoutes)
app.use('orders',orderRoutes)
app.use('/admin',adminRoutes)
app.use('/category',categoryRoutes)
 

app.listen(PORT, async () => {
    await mongoose.connect(database)
        .then(() => console.log(`server running on port ${PORT}`))
        .catch((err) => console.log(`database connectivity failed: ${err.message}`))
})