"use strict";
class Book {
    constructor(title, author) {
        this._title = title;
        this._author = author;
    }
    getTitle() {
        return this._title;
    }
    getAuthor() {
        return this._author;
    }
}
class Library {
    constructor() {
        this.books = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    viewBooks() {
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
