import Book from './book';

import { faker } from '@faker-js/faker';

describe('Book', () => {
  it('should create a book with correct properties', () => {
    const id = faker.string.uuid();
    const title = faker.lorem.sentence();
    const author = faker.person.fullName();
    const book = new Book(id, title, author);

    expect(book.id).toBe(id);
    expect(book.title).toBe(title);
    expect(book.author).toBe(author);
    expect(book.getAvailability()).toBe(true);
  });

  it('should handle borrowing correctly', () => {
    const book = new Book(faker.string.uuid(), faker.lorem.sentence(), faker.person.fullName());
    expect(book.borrow()).toBe(true);
    expect(book.getAvailability()).toBe(false);
    expect(book.borrow()).toBe(false); // Can't borrow again
  });

  it('should handle returning correctly', () => {
    const book = new Book(faker.string.uuid(), faker.lorem.sentence(), faker.person.fullName());
    book.borrow();
    book.return();
    expect(book.getAvailability()).toBe(true);
  });
});
