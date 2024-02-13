const request = require('supertest');
const createApp = require('../src/app');

describe("Testing Hello World endpoint - e2e", () => {
  let app = null;
  let server = null;
  beforeAll(() => {
    app = createApp();
    server = app.listen(3001);
    // console.log("Server has been started!");
  });

  afterAll(async () => {
    await server.close();
    // console.log('Server has been closed!');
  });

  describe('test for [GET] /', () => {
    test('should return "Hello World!', () => {
      return request(app)
        .get('/')
        .expect(200)
        .then((response) => {
          expect(response.text).toEqual('Hello World!');
        });
    });
  });
});
