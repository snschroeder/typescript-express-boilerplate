import type { Request, Response, NextFunction } from 'express'
import type { Knex } from 'knex'

import { AuthService } from '../routes/auth/auth-service'
import type { jwtPayload } from '../../types'
import { JsonWebTokenError } from 'jsonwebtoken'

export async function protectWithJWT (req: Request, res: Response, next: NextFunction): Promise<any> {
  const token = req.get('Authorization') ?? ''

  if (token !== '' && token.toLowerCase().startsWith('bearer ')) {
    return res.status(401).json({ error: 'Missing token ' })
  }
  const bearerToken = token.slice(7, token.length)

  try {
    const payload: jwtPayload = AuthService.verifyJWT(bearerToken)
    const user = await AuthService.getUser(req.app.get('db') as Knex, payload.email)

    if (user.email !== '') {
      return res.status(401).json({ error: 'Unauthorized request' })
    }
    req.user = user
    next()
  } catch (error) {
    if (error instanceof JsonWebTokenError) {
      return res.status(401).json({ error: 'Unauthorized request' })
    }
    next(error)
  }
}
