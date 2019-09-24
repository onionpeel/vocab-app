const {fahrenheitToCelsius, celsiusToFahrenheit, add} = require('../../src/math');

test('Should convert 32 F to 0 C', () => {
  const temp = fahrenheitToCelsius(32);
  expect(temp).toEqual(0);
});

test('Should convert 0 C to 32 F', () => {
  const temp = celsiusToFahrenheit(0);
  expect(temp).toEqual(32);
});

test('Async test demo', (done) => {
  setTimeout(() => {
    expect(1).toBe(1);
    done();
  }, 2000);
});

test('Should add two numbers', (done) => {
  add(2, 3).then((sum) => {
    expect(sum).toBe(5);
    done();
  });
});

test('Should add two numbers async/await', async (done) => {
  const sum = await add(2, 3);
  expect(sum).toBe(5);
  done();
});

// const User = require('../models/User');
//
// let user;

// beforeEach(async () => {
//   const newUser = new User({
//     username: 'joe',
//     email: 'joe@mail.com',
//     password: 'abc123'
//   });
//
//   try {
//     const user = await newUser.save();
//   } catch(err) {
//     console.log(err);
//   };
// });


// test('Create a new user', async () => {
//   const newUser = new User({
//     username: 'jane',
//     email: 'jane@mail.com',
//     password: 'ABC123'
//   });
//   expect(newUser.username).toEqual('jane');
// });
