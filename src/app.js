import express from 'express'
import morgan from 'morgan'
import productRoutes from './routes/products.router.js'

const app = express()

app.use(morgan('dev'))
app.use(express.json())

app.use('/api/v1/products', productRoutes)


export default app