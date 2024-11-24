import { MockBook } from './book.test-helpers';
import Library from './library';
describe('Library', () => {
  it('should add and find books', () => {
    const library = new Library();
    const book = new MockBook('1', 'Test Book', 'Test Author');

    library.addBook(book);
    expect(library.findBookById('1')).toBe(book);
  });

  it('should return all books', () => {
    const library = new Library();
    const book1 = new MockBook('1', 'Test Book 1', 'Test Author');
    const book2 = new MockBook('2', 'Test Book 2', 'Test Author');

    library.addBook(book1);
    library.addBook(book2);

    const allBooks = library.getAllBooks();
    expect(allBooks).toHaveLength(2);
    expect(allBooks).toContain(book1);
    expect(allBooks).toContain(book2);
  });
});
