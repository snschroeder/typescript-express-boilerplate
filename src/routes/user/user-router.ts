import express from 'express'
import type {
  Request,
  Response,
  NextFunction,
  RequestHandler
} from 'express'

import { UserService } from './user-service'

const userRouter = express.Router()

userRouter
  .route('/:userId')
  .get((async (req: Request, res: Response, next: NextFunction) => {
    const { userId } = req.params

    try {
      const userData = await UserService.getUser(req.app.get('db'), parseInt(userId, 10))
      return res.status(200).json(userData)
    } catch (error) {
      next(error)
    }
  }) as RequestHandler)

export default userRouter
