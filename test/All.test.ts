import request from 'supertest'
import app from '../src/app'

describe('Test example', () => {
  test('GET /', () => {
    request(app)
      .get('/')
      .expect(200)
      // More logic goes here
  })
  // More things come here
})