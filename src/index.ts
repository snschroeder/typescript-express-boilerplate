import express from 'express'
import knex from '../knex'
import cors from 'cors'
import helmet from 'helmet'
import 'dotenv/config'

const app = express()
const port = process.env.PORT ?? 3000

app.use(helmet())
app.use(cors())
app.use(express.json())
app.set('knex', knex)

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})
