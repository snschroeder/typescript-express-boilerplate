import Knex from 'knex'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const knexConfig = require('./knexfile')

const knex = Knex(knexConfig.development)

export default knex
