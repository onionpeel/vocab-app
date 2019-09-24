const app = require('../../src/app');
const request = require('supertest');


test('Should register a new user', async () => {
  await request(app)
    .post('/api/user')
    .send({
      username: 'Hitomi',
      email: 'hi@mail.com',
      password: 'hhh123'
    })
    .expect(201)

});
