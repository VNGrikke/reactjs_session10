class Book {
    private _title: string;
    private _author: string;

    constructor(title: string, author: string) {
        this._title = title;
        this._author = author;
    }

    getTitle(): string {
        return this._title;
    }

    getAuthor(): string {
        return this._author;
    }
}

class Library {
    private books: Book[];

    constructor() {
        this.books = [];
    }

    addBook(book: Book): void {
        this.books.push(book);
    }

   viewBooks(): void {
        console.log("Danh sách các quyển sách trong thư viện:");
        this.books.forEach((book, index) => {
            console.log(`${index + 1}. Tiêu đề: ${book.getTitle()}, Tác giả: ${book.getAuthor()}`);
        });
    }
}

const book1 = new Book("kiếp này em bỏ 1", "Vương tạch python");
const book2 = new Book("kiếp này em bỏ 2", "Vương tạch python");
const book3 = new Book("kiếp này em bỏ 3", "Vương tạch python");
const book4 = new Book("kiếp này em bỏ 4", "Vương tạch python");
const book5 = new Book("kiếp này em bỏ 5", "Vương tạch python");

const library = new Library();

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);
library.addBook(book5);

library.viewBooks();
