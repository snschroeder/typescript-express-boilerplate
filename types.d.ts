export interface User {
  id: number
  email: string
}

declare global {
  namespace Express {
    interface Request {
      user: User
    }
  }
  interface Error {
    status: number | undefined
  }
}
