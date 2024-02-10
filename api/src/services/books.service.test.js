const BooksService = require('./books.service');
// MongoLin es la dependencia de BooksService

// Fakes
const fakeBooks = [
  { id: 1, title: 'Harry Potter' },
  { id: 3, title: 'Game of Thrones' },
];

// BDD => with spies
const mockSpyGetAll = jest.fn();

// The stub or the implementation of the mock
// const MongoLibStub = {
//   getAll: spyGetAll,
//   create: () => {},
// };

// Mocking
jest.mock(
  '../lib/mongo.lib.js', // the module
  // explicit module factory instead of automocking
  () => jest.fn().mockImplementation(() => ({
    getAll: mockSpyGetAll,
    create: () => {},
  })),
  // () => jest.fn(() => MongoLibStub), // module factory instead of automocking
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
    mockSpyGetAll.mockResolvedValue(fakeBooks);
    // Act
    const books = await bookService.getBooks({});
    console.log(books);
    // Assert
    // expect(books).toHaveLength(2);
    expect(books.length).toEqual(2);
    expect(mockSpyGetAll).toHaveBeenCalled();
    expect(mockSpyGetAll).toHaveBeenCalledTimes(1);
    expect(mockSpyGetAll).toHaveBeenCalledWith('books', {});
  });

  test('Should return the book list (getBooks), again.', async () => {
    // Arrange
    mockSpyGetAll.mockResolvedValue([
      { id: 1, title: 'José Trigo' },
    ]);
    // Act
    const books = await bookService.getBooks({});
    console.log(books);
    // Assert
    expect(books).toHaveLength(1);
    expect(books[0].title).toEqual('José Trigo');
  });
});
