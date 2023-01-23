import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'

const app = express()
const port = process.env.PORT || 5000

// Error handler middleware

dotenv.config()
connectDB()

app.listen(port, () =>
  console.log(`Server running in ${process.env.NODE_ENV} on port ${port}`)
)
