import express from 'express'
import knex from '../knex'
import cors from 'cors'
import helmet from 'helmet'
import 'dotenv/config'

import userRouter from './routes/user/user-router'

const app = express()
const port = process.env.PORT ?? 3000

app.use(helmet())
app.use(cors())
app.use(express.json())
app.set('db', knex)

app.use('/user', userRouter)

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})
