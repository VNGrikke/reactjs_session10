class Book {
    private _title: string;
    private _author: string;
    private _quantity: number;

    constructor(title: string, author: string, quantity: number = 1) {
        this._title = title;
        this._author = author;
        this._quantity = quantity;
    }

    getTitle(): string {
        return this._title;
    }

    getAuthor(): string {
        return this._author;
    }

    getQuantity(): number {
        return this._quantity;
    }

    increaseQuantity(): void {
        this._quantity++;
    }
}

class Library {
    private books: Book[];

    constructor() {
        this.books = [];
    }

    addBook(book: Book): void {
        let existingBook = this.books.find(b => b.getTitle() === book.getTitle() && b.getAuthor() === book.getAuthor());
        if (existingBook) {
            existingBook.increaseQuantity();
        } else {
            this.books.push(book);
        }
    }

    viewBooks(): void {
        console.log("Danh sách các quyển sách trong thư viện:");
        this.books.forEach((book, index) => {
            console.log(`${index + 1}. Tiêu đề: ${book.getTitle()}, Tác giả: ${book.getAuthor()}, Số lượng: ${book.getQuantity()}`);
        });
    }
}

let book1 = new Book("kiếp này em bỏ 1", "Vương tạch python");
let book2 = new Book("kiếp này em bỏ 2", "Vương tạch python");
let book3 = new Book("kiếp này em bỏ 3", "Vương tạch python");
let book4 = new Book("kiếp này em bỏ 4", "Vương tạch python");
let book5 = new Book("kiếp này em bỏ 5", "Vương tạch python");

let library = new Library();

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);
library.addBook(book5);

library.addBook(new Book("kiếp này em bỏ 1", "Vương tạch python"));
library.addBook(new Book("kiếp này em bỏ 1", "Vương tạch python"));
library.addBook(new Book("kiếp này em bỏ 2", "Vương tạch python"));

library.viewBooks();
