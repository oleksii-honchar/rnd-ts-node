export const MockBook = jest.fn().mockImplementation((id, title, author) => ({
  id,
  title,
  author,
  borrow: jest.fn().mockReturnValue(true),
  return: jest.fn(),
  getAvailability: jest.fn().mockReturnValue(true),
}));
