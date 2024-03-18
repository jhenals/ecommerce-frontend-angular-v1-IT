import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';

import { ApiResponse } from '../interface/api-response';
import { UtilService } from './util.service';

import { Book } from '../models/Book';
import { Observable } from 'rxjs';
import { Page } from '../interface/page';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private readonly baseUrl = 'http://localhost:8081/api/v1';

  constructor(
    private httpClient: HttpClient,
    private utilService: UtilService,
    private router: Router
  ) { }

  getBooks(title: string = '', page: number = 0, size: number = 10): Observable<ApiResponse<Page>> {
    const endpoint = '/books';
    const url = `${this.baseUrl}${endpoint}`;
    return this.httpClient.get<ApiResponse<Page>>(`${url}?title=${title}&page=${page}&size=${size}`);
  }
  /*
    getAllBooks(): Observable<Book[]> {
      return this.httpClient.get<Book[]>(`${this.baseUrl}/books`);

    } */


  getBookById(id: number) {
    /*  const endpoint = `/books/${id}`;
     const url = `${this.baseUrl}${endpoint}`;
     return this.httpClient.get<BookAuthor>(`${url}`); */
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
