import Book from './book';
import { Logger } from './logger';

export interface LibraryDependencies {
  logger: Logger;
}

class Library {
  private books: Book[] = [];
  private logger: Logger;

  constructor({ logger }: LibraryDependencies) {
    this.logger = logger;
  }

  addBook(book: Book): void {
    this.books.push(book);
    this.logger.info(`Added book: ${book.title} by ${book.author}`);
  }

  findBookById(id: string): Book | undefined {
    return this.books.find(book => book.id === id);
  }

  getAllBooks(): Book[] {
    return [...this.books];
  }

  printAllBooks(): void {
    this.logger.info('All books in the library:');
    this.books.forEach(book => {
      this.logger.info(`${book.id} - "${book.title}" by ${book.author}`);
    });
  }
}

export default Library;
