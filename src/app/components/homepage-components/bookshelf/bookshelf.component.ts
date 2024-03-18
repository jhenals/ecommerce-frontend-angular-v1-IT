import { Component, OnInit } from '@angular/core';

import { BookService } from 'src/app/services/book.service';

import { ApiResponse } from 'src/app/interface/api-response';
import { Page } from 'src/app/interface/page';
import { Book } from 'src/app/models/Book';
import { Observable, catchError, map, of, startWith } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-bookshelf',
  templateUrl: './bookshelf.component.html',
  styleUrls: ['./bookshelf.component.css']
})
export class BookshelfComponent implements OnInit {
  booksState$: Observable<{ appState: string, appData?: ApiResponse<Page>, error?: HttpErrorResponse }>;

  allBookAuthors: Book[] = [];
  allBooks: Book[] = [];
  constructor(
    private bookService: BookService,
  ) { }

  ngOnInit(): void {
    console.log("bookshelf component")
    this.booksState$ = this.bookService.getBooks().pipe(
      map((response: ApiResponse<Page>) => {
        console.log("response", response);
        return ({ appState: 'APP_LOADED', appData: response });
      }
      ),
      startWith({ appState: 'APP_LOADING' }),
      catchError((error: HttpErrorResponse) =>
        of({ appState: 'APP_ERROR', error: error }))
    );
  }


}
