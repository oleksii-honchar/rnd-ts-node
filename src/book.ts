class Book {
  constructor(
    public id: string,
    public title: string,
    public author: string,
    private isAvailable = true,
  ) {}

  borrow(): boolean {
    if (!this.isAvailable) {
      return false;
    }
    this.isAvailable = false;
    return true;
  }

  return(): void {
    this.isAvailable = true;
  }

  getAvailability(): boolean {
    return this.isAvailable;
  }
}

export default Book;
