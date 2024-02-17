import type { Knex } from 'knex'
import { connection } from './connection'

const knexConfig: Record<string, Knex.Config> = {
  development: {
    client: 'pg',
    connection,
    pool: { min: 0, max: 10 },
    migrations: {
      directory: './db_management/migrations'
    },
    seeds: {
      directory: './db_management/seeds'
    }
  }
}

module.exports = knexConfig
