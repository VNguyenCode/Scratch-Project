const request = require('supertest');

const server = 'http://localhost:3000';

/**
 * TESTING ROOT ROUTE HANDLER FUNCTIONALITY
 */
describe('root router integration', () => {
  describe('/', () => {
    /**
     * NEED TO CONFIRM WHAT KIND OF REQUEST WE ARE MAKING TO '/'
     * IN SERVER.JS WE HAVE THE ROOT END ROUTE BEING SENT TO
     * AUTHROUTER
     */
  });
});
/**
 * TESTING MAIN ROUTER FUNCTIONALITY
 */
describe('main router integration', () => {
  describe('/main/addURL', () => {
    describe('POST', () => {
      const demoApi = 'https://dog.ceo/api/breeds/image/random';
      it('responds with 200 status and application/json content type', (done) => {
        return request(server)
          .post('/main/addURL')
          .send(demoApi)
          .expect(200)
          .expect('Content-Type', 'application/json; charset=utf-8', done);
      });
      const badApi = 'thisisnotavalidapi';
      it('responds with 400 status and err with an invalid url', (done) => {
        return request(server)
          .post('/main/addURL')
          .send(badApi)
          .expect(400)
          .then(({ body }) => {
            expect(body).toHaveProperty('err');
            done();
          });
      });
    });
  });
  describe('/main/checkNow', () => {
    describe('POST', () => {
      const demoApi = 'https://dog.ceo/api/breeds/image/random';
      it('responds with 200 status and application/json content type', (done) => {
        return request(server)
          .post('/main/checkNow')
          .send(demoApi)
          .expect('Content-Type', 'application/json; charset=utf-8', done);
      });
    });
  });
});

/**
 * TESTING AUTH ROUTER FUNCTIONALITY
 */
describe('auth router integration', () => {
  /**
   * TESTING LOGIN ROUTE FUNCTIONALITY
   */
  describe('/auth/login', () => {
    describe('POST', () => {
      // --> 'POST' used as first parameter below to reflect what was used in authrouter.js
      /**
       * NEED TO CONFIRM IF WE ARE USING REACT-ROUTER FOR REDIRECT
       */
    });
  });
  /**
   * TESTING SIGNUP ROUTE FUNCTIONALITY
   */
  describe('/auth/register', () => {
    describe('POST', () => {
      const data = {
        username: 'username',
        password: 'password',
        phoneNumber: 8882222222,
      };
      /**
       * TESTING SUCCESSFUL CREATION OF USER
       */
      it('respond with 201 created', (done) => {
        request(server)
          .post('/auth/register')
          .send(data)
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .end((err) => {
            if (err) return done(err);
            done();
          });
      });
      /**
       * TESTING UNSUCCESSFUL CREATION OF USER
       */
      const incorrectData = {
        username: 'username',
        password: 'password',
        phoneNumber: '888-222-2222',
      };
      it('respond with 400 status and err with invalid data type entered', (done) => {
        request(server)
          .post('/auth/register')
          .send(incorrectData)
          .expect(400)
          .then(({ body }) => {
            expect(body).toHaveProperty('err');
            done();
          });
      });
    });
  });
});

/**
 * TESTING UNKNOWN ROUTE HANDLER FUNCTIONALITY
 */
describe('unknown routes integration', () => {
  it("reponds with 404 status and 'Not Found'", (done) => (
    request(server).get('/random').expect(404).expect('Not Found', done)
  )
);

// NOT TOO SURE ON HOW TO APPROACH? LOOKED UP RESOURCES & NADA
describe('global error handler integration', () => {});
