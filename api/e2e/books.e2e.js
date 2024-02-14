// e2e test
const request = require('supertest');
const { MongoClient } = require('mongodb');

const createApp = require('../src/app');

const { config } = require('../src/config');

const DB_NAME = config.dbName;
const COLLECTION_NAME = 'books';
const MONGO_DB_URL = config.dbUrl;

describe('Testing Books Resource - e2e', () => {
  let app = null;
  let server = null;
  let database = null;
  let client = null;

  beforeAll(async () => {
    app = createApp();
    server = app.listen(3001);
    client = new MongoClient(MONGO_DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await client.connect();
    database = client.db(DB_NAME);
    console.log('Server has been started!');
  });

  beforeEach(async () => {
    // Clean 'books' collection before each test
    await database.collection(COLLECTION_NAME).deleteMany({});
    console.log('Before Each test, clean the books collection.');
  });

  afterAll(async () => {
    await server.close();
    client.close();
    // Here I could have set a drop database in order to have a clean DB for all DBs if it's needed.
    console.log('Server has been closed!');
  });

  describe('Test for books resource [GET] /api/v1/books', () => {
    test('Should return the list of books', async () => {
      // Arrange (Seed Data for testing purposes only)
      // Inserting data to the same DB as the Testing request
      const seedData = await database.collection(COLLECTION_NAME).insertMany([
        {
          title: 'La Democracia en México',
          year: 1962,
          author: 'Pablo González Casanova',
        },
        {
          title: 'Cien años de soledad',
          year: 1985,
          author: 'Gabriel García Márquez',
        },
      ]);
      console.log(seedData);
      // Act
      return request(app)
        .get('/api/v1/books')
        .expect(200)
        .then((response) => {
          const { body } = response;
          console.log({ body });
          // Assert
          expect(body.length).toEqual(seedData.insertedCount);
        });
    });
  });
});
