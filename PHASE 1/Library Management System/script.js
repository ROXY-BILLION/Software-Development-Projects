// ==============================
// BOOK CLASS
// ==============================

class Book {
    constructor(title, author, year, isbn) {
        this.title = title;
        this.author = author;
        this.year = year;
        this.isbn = isbn;
        this.available = true;
    }

    borrow() {
        if (this.available) {
            this.available = false;
            console.log(`"${this.title}" has been borrowed.`);
        } else {
            console.log(`"${this.title}" is already borrowed.`);
        }
    }

    returnBook() {
        if (!this.available) {
            this.available = true;
            console.log(`"${this.title}" has been returned.`);
        } else {
            console.log(`"${this.title}" is already available.`);
        }
    }

    displayInfo() {
        console.log("----------------------------");
        console.log(`Title      : ${this.title}`);
        console.log(`Author     : ${this.author}`);
        console.log(`Year       : ${this.year}`);
        console.log(`ISBN       : ${this.isbn}`);
        console.log(
            `Status     : ${this.available ? "Available" : "Borrowed"}`
        );
    }
}

// ==============================
// LIBRARY CLASS
// ==============================

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    // Add a new book
    addBook(book) {
        this.books.push(book);
        console.log(`"${book.title}" added to the library.`);
    }

    // Remove a book
    removeBook(isbn) {
        const index = this.books.findIndex(book => book.isbn === isbn);

        if (index !== -1) {
            console.log(`"${this.books[index].title}" removed.`);
            this.books.splice(index, 1);
        } else {
            console.log("Book not found.");
        }
    }

    // Search by title
    findBook(title) {
        const book = this.books.find(
            b => b.title.toLowerCase() === title.toLowerCase()
        );

        if (book) {
            console.log("Book Found");
            book.displayInfo();
        } else {
            console.log("Book not found.");
        }
    }

    // Borrow
    borrowBook(isbn) {
        const book = this.books.find(book => book.isbn === isbn);

        if (book) {
            book.borrow();
        } else {
            console.log("Book not found.");
        }
    }

    // Return
    returnBook(isbn) {
        const book = this.books.find(book => book.isbn === isbn);

        if (book) {
            book.returnBook();
        } else {
            console.log("Book not found.");
        }
    }

    // Display all books
    displayAllBooks() {
        console.log(`\n===== ${this.name} =====`);

        if (this.books.length === 0) {
            console.log("No books in library.");
            return;
        }

        this.books.forEach(book => {
            book.displayInfo();
        });
    }

    // Available books
    displayAvailableBooks() {
        console.log("\n===== Available Books =====");

        const availableBooks = this.books.filter(book => book.available);

        if (availableBooks.length === 0) {
            console.log("No available books.");
            return;
        }

        availableBooks.forEach(book => {
            book.displayInfo();
        });
    }

    // Borrowed books
    displayBorrowedBooks() {
        console.log("\n===== Borrowed Books =====");

        const borrowedBooks = this.books.filter(book => !book.available);

        if (borrowedBooks.length === 0) {
            console.log("No borrowed books.");
            return;
        }

        borrowedBooks.forEach(book => {
            book.displayInfo();
        });
    }

    // Total books
    totalBooks() {
        console.log(`Total Books: ${this.books.length}`);
    }
}

// ==============================
// CREATE LIBRARY
// ==============================

const library = new Library("City Library");

// ==============================
// CREATE BOOKS
// ==============================

const book1 = new Book(
    "JavaScript Guide",
    "John Smith",
    2025,
    "ISBN001"
);

const book2 = new Book(
    "React Mastery",
    "Sarah Doe",
    2024,
    "ISBN002"
);

const book3 = new Book(
    "Node.js Basics",
    "David Brown",
    2023,
    "ISBN003"
);

const book4 = new Book(
    "Python Essentials",
    "Michael Lee",
    2022,
    "ISBN004"
);

const book5 = new Book(
    "HTML & CSS",
    "Jane Wilson",
    2021,
    "ISBN005"
);

// ==============================
// ADD BOOKS
// ==============================

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);
library.addBook(book5);

// ==============================
// DISPLAY ALL
// ==============================

library.displayAllBooks();

// ==============================
// BORROW BOOKS
// ==============================

library.borrowBook("ISBN002");
library.borrowBook("ISBN004");

// ==============================
// DISPLAY AVAILABLE
// ==============================

library.displayAvailableBooks();

// ==============================
// DISPLAY BORROWED
// ==============================

library.displayBorrowedBooks();

// ==============================
// SEARCH
// ==============================

library.findBook("React Mastery");

// ==============================
// RETURN BOOK
// ==============================

library.returnBook("ISBN002");

// ==============================
// REMOVE BOOK
// ==============================

library.removeBook("ISBN005");

// ==============================
// TOTAL
// ==============================

library.totalBooks();

// ==============================
// DISPLAY FINAL LIBRARY
// ==============================

library.displayAllBooks();