import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { JWT_SECRET } from '../../../connection'

import type { Knex } from 'knex'

const AuthService = {
  getUser: (db: Knex, email: string) => db('user')
    .select(
      'id',
      'email',
      'password'
    )
    .where({ email })
    .first(),

  validatePassword: async (db: Knex, email: string, password: string) => {
    const user = await AuthService.getUser(db, email)
    const match = await bcrypt.compare(password, user.password)
    return match
  },

  createJWT: (subject: any, payload: any) => jwt.sign(payload, JWT_SECRET, {
    subject,
    expiresIn: '180d',
    algorithm: 'HS256'
  })
}

export { AuthService }
