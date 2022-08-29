// Constructor for Books
function Books(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Books.prototype.info = () => `${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? 'read' : 'not read yet'}`;

const book1 = new Books('The Hobbit', `J.R.R. Tolkien`, 295, false)
console.log(book1.info());