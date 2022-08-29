const library = document.querySelector('#library')

// Constructor for Books
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

// Book.prototype.info =  ()=> `${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? 'read' : 'not read yet'}`;
Book.prototype.info = function() {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? 'read' : 'not read yet'}`
};
function addBookToLibrary() {
    for(book of myLibrary) {
        console.log(book.info);
        const wrapper = document.createElement('div');
        wrapper.classList.add('book-wrapper');
        wrapper.textContent = book.info();
        library.appendChild(wrapper);
    }
}

let myLibrary = [new Book('The Hobbit', `J.R.R. Tolkien`, 295, false), 
new Book('The Hobbit', `J.R.R. Tolkien`, 295, false),
new Book('The Hobbit', `J.R.R. Tolkien`, 295, false),
new Book('The Hobbit', `J.R.R. Tolkien`, 295, false),];

const book1 = new Book('The Hobbit', `J.R.R. Tolkien`, 295, false)
console.log(book1.info());
addBookToLibrary();