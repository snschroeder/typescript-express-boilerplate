export const UserService = {
  getUser: (db: any, id: number) => db('user')
    .select(
      'id',
      'email'
    )
    .where({ id })
    .first()
}
