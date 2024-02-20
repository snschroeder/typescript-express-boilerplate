import { type Knex } from 'knex'

const userSeed = [
  {
    id: 1,
    email: 'example@example.com',
    password: 'password'
  }
]

export async function seed (knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('user').del()

  // Inserts seed entries
  await knex('user').insert(userSeed)
};
