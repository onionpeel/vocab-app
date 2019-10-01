const app = require('../../src/app');
const request = require('supertest');
const User = require('../../src/models/User');

const userOne = {
  username: 'fishface',
  email: 'fish@mail.com',
  password: 'haha11'
};

beforeEach(async () => {
  await User.deleteMany();
  await new User(userOne).save();
});

test('Should register a new user', async () => {
  await request(app)
    .post('/api/user')
    .send({
      name: 'Hitomi',
      email: 'hi@mail.com',
      password: 'hhh123'
    })
    .expect(201)
});

test('Should fail to register a new user', async () => {
  await request(app)
    .post('/api/user')
    .send({
      name: 'kazumi',
      email: 'kaz@mail.com',
      password: '123'
    })
    .expect(400);
});
