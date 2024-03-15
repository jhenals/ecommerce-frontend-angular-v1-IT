import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';

import { UtilService } from './util.service';

import { Book } from '../models/Book';
import { BookAuthor } from '../models/BookAuthor';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private baseUrl = 'http://localhost:8081/api/v1';

  constructor(
    private httpClient: HttpClient,
    private utilService: UtilService,
    private router: Router
  ) { }

  getAllBooks() {
    const endpoint = '/books';
    const url = `${this.baseUrl}${endpoint}`;
    return this.httpClient.get<Book[]>(`${url}`);
  }

  getAllBookAuthors() {
    const endpoint = '/books/books-authors';
    const url = `${this.baseUrl}${endpoint}`;
    return this.httpClient.get<BookAuthor[]>(`${url}`);
  }

  getBookAuthorByBookId(bookId: number) {
    const endpoint = '/books/book-author';
    const url = `${this.baseUrl}${endpoint}`;
    const params = new HttpParams().set('id', bookId.toString());
    return this.httpClient.get<BookAuthor>(`${url}`, { params });
  }

  getBookById(id: number) {
    const endpoint = `/books/${id}`;
    const url = `${this.baseUrl}${endpoint}`;
    return this.httpClient.get<BookAuthor>(`${url}`);
  }

  goToBookDetails(book: Book) {
    const bookId = book.id;
    const bookTitle = book.title;

    this.router.navigate([`book/${bookId}/${bookTitle}`]);
  }


  getDiscountedPrice(book: Book): number {
    return book.price - (book.price * book.discount / 100);
  }


  getAllCategories() {
    //GET METHOD
  }

  addNewBook(book: Book) {
    //POST METHOD
  }
}
