import Book from './book';
import Library from './library';

const library = new Library();
const book1 = new Book('1', 'TypeScript Basics', 'John Doe');
library.addBook(book1);
library.printAllBooks();

process.exit(0);
