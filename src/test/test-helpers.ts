// import bcrypt from 'bcrypt'
// import { Jwt } from 'jsonwebtoken'
import knex from '../../knex'
import type { Knex } from 'knex'

const testHelpers = {
  setupDB: (app: any) => {
    app.use('db', knex)
  },
  truncateAllTables: (db: Knex) => {
    return db.raw(
      'TRUNCATE user;'
    )
  }
}

export default testHelpers
