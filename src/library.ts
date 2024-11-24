import Book from './book';

class Library {
  private books: Book[] = [];

  addBook(book: Book): void {
    this.books.push(book);
  }

  findBookById(id: string): Book | undefined {
    return this.books.find(book => book.id === id);
  }

  getAllBooks(): Book[] {
    return [...this.books];
  }

  printAllBooks(): void {
    console.log('All books in the library:');
    this.books.forEach(book => {
      console.log(`${book.id} - "${book.title}" by ${book.author}`);
    });
  }
}

export default Library;
