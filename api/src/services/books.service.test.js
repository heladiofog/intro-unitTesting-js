const BooksService = require('./books.service');
// MongoLin es la dependencia de BooksService

// Fakes
const fakeBooks = [
  { id: 1, title: 'Harry Potter' },
  { id: 3, title: 'Game of Thrones' },
];

// The stub or the implementation of the mock
const MongoLibStub = {
  getAll: () => [...fakeBooks],
  create: () => {},
};

// Mocking
jest.mock(
  '../lib/mongo.lib.js', // the module
  // explicit module factory instead of automocking
  // () => jest.fn().mockImplementation(() => MongoLibStub),
  () => jest.fn(() => MongoLibStub), // module factory instead of automocking
);

describe('Testing the Book Service', () => {
  let bookService = null;

  beforeEach(() => {
    // Arrange
    bookService = new BooksService();
    jest.clearAllMocks(); // Para limpiar siempre el estado
  });

  afterAll(() => {
    // Clean the DB connection**
  });

  test('Should return the book list (getBooks).', async () => {
    // Arrange

    // Act
    const books = await bookService.getBooks({});
    console.log(books);
    // Assert
    // expect(books).toHaveLength(2);
    expect(books.length).toEqual(2);
  });

  test('Should return the book list (getBooks), again.', async () => {
    // Arrange
    // Act
    const books = await bookService.getBooks({});
    console.log(books);
    // Assert
    // expect(books).toHaveLength(2);
    expect(books[1].title).toEqual('Game of Thrones');
  });
});
