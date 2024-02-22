import { NODE_ENV } from '../../connection'
import type { Request, Response } from 'express'

function errorHandler (error: Error, req: Request, res: Response): void {
  const status = error.status ?? 500
  const response = NODE_ENV === 'production'
    ? error.message = 'server error'
    : error.message
  res.status(status).json(response)
}

export default errorHandler
