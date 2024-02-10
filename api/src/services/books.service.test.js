const { generateBooks } = require('../fakes/books.fake');
const BooksService = require('./books.service');
// BDD => with spies
const mockSpyGetAll = jest.fn();

// MongoLib es la dependencia de BooksService
// Mocking
jest.mock(
  '../lib/mongo.lib.js', // the module
  // explicit module factory instead of automocking
  () => jest.fn().mockImplementation(() => ({
    getAll: mockSpyGetAll,
    create: () => {},
  }))
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
    const fakeBooks = generateBooks(15);
    mockSpyGetAll.mockResolvedValue(fakeBooks);
    // Act
    const books = await bookService.getBooks({});
    console.log(books);
    // Assert
    // expect(books).toHaveLength(2);
    expect(books.length).toEqual(15);
    expect(mockSpyGetAll).toHaveBeenCalled();
    expect(mockSpyGetAll).toHaveBeenCalledTimes(1);
    expect(mockSpyGetAll).toHaveBeenCalledWith('books', {});
  });

  test('Should return the book list (getBooks), again.', async () => {
    // Arrange
    const fakeBooks = generateBooks();
    mockSpyGetAll.mockResolvedValue(fakeBooks);
    // Act
    const books = await bookService.getBooks({});
    console.log(books);
    // Assert
    expect(books).toHaveLength(10);
    expect(books[0].name).toEqual(fakeBooks[0].name);
  });
});
