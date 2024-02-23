import { expect } from 'chai'
// import knex from '../knex'
import app from '../index'
import testHelpers from './test-helpers'

describe('User endpoints', () => {
  testHelpers.setupDB(app)
  // const mockUsers = testHelpers.mockUsers()
  const endpointPath = 'v1/users'

  expect(endpointPath, 'v1/user')
  // before('cleanup', () => testHelpers.truncateAllTables(knex))
  // afterEach('cleanup', () => testHelpers.truncateAllTables(knex))
  // after('disconnect from db', async () => { await knex.destroy() })

  // describe(`GET ${endpointPath}:/userId`, () => {
  //   // beforeEach('Insert mock users', () => testHelpers.seedUsers(db, mockUsers))
  // })
})
