const request = require('supertest');
const app = require('../app/index');

describe('GET /v1/users', function() {
  it('responds with json', function(done) {
    request(app)
      .get('/v1/users')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});

describe('POST /v1/users/register', function() {
  const data = {
    first_name: 'Torchi',
    last_name: 'Rokaya',
    username: 'torchi@medusa.com',
    password: 'abcd'
  }
  it('responds with json', function(done) {
    request(app)
      .post('/v1/users/register')
      .send(data)
      .set('Accept', 'application/json')
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        done();
      });
  });
});
