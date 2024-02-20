import type { Knex } from 'knex'

export const UserService = {
  getUser: (db: Knex, id: number) => db('user')
    .select(
      'id',
      'email'
    )
    .where({ id })
    .first()
}
