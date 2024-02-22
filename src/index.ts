import express from 'express'
import knex from '../knex'
import cors from 'cors'
import helmet from 'helmet'
import 'dotenv/config'

import userRouter from './routes/user/user-router'
import errorHandler from './error-handler/error-handler'

const app = express()
const port = process.env.PORT ?? 3000

// =================== //
// Middleware          //
// =================== //

app.use(helmet())
app.use(cors())
app.use(express.json())
app.set('db', knex)

// =================== //
// Routes              //
// =================== //

app.use('/user', userRouter)

// =================== //
// Error Handling      //
// =================== //

// Catch-all 404 handler
app.use((req, res, next) => {
  const error = new Error('Path not found')
  error.status = 404
  next(error)
})

app.use(errorHandler)

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})
