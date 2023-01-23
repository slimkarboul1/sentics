import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import humanRouter from './routes/humanRouter.js'
import { errorHandler, notFound } from './middleware/errorMiddleware.js'

const app = express()
const port = process.env.PORT || 5000

dotenv.config()
connectDB()

app.use(errorHandler)

app.use('/humans', humanRouter)

app.get('/', (req, res) => {
  res.send('API is running...')
})

app.listen(port, () =>
  console.log(`Server running in ${process.env.NODE_ENV} on port ${port}`)
)
