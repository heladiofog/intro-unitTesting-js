// integration test
const request = require('supertest');

// const createApp = require('../src/app');

const { generateBooks } = require('../src/fakes/books.fake');

// Mocking instead of using the real DB for integration tests
const mockSpyGetAll = jest.fn();
// const createApp = require("../src/app");
jest.mock(
  '../src/lib/mongo.lib.js',
  () => jest.fn().mockImplementation(
    () => ({
      getAll: mockSpyGetAll,
      create: () => { },
    }),
  ),
);

// Debido al error: ReferenceError: Cannot access 'mockSpyGetAll' before initialization
const createApp = require('../src/app');

describe('Testing Hello World endpoint - e2e', () => {
  let app = null;
  let server = null;

  beforeAll(() => {
    app = createApp();
    server = app.listen(3001);
    console.log('Server has been started!');
  });

  afterAll(async () => {
    await server.close();
    console.log('Server has been closed!');
  });

  describe('Test for books resource [GET] /api/v1/books', () => {
    test('Should return the list of books', () => {
      // Arrange
      const fakeBooks = generateBooks(5);
      mockSpyGetAll.mockResolvedValue(fakeBooks);
      // Act
      return request(app)
        .get('/api/v1/books')
        .expect(200)
        .then((response) => {
          const { body } = response;
          console.log({ body });
          // Assert
          expect(body.length).toEqual(fakeBooks.length);
        });
    });
  });
});
