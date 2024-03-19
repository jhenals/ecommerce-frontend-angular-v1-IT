import { Component, Input, OnInit } from '@angular/core';

import { BookService } from 'src/app/services/book.service';
import { UtilService } from 'src/app/services/util.service';

import { ApiResponse } from 'src/app/interface/api-response';
import { Page } from 'src/app/interface/page';
import { Book } from 'src/app/models/Book';
import { BehaviorSubject, Observable, catchError, map, of, startWith } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-bookshelf',
  templateUrl: './bookshelf.component.html',
  styleUrls: ['./bookshelf.component.css']
})
export class BookshelfComponent implements OnInit {
  searchInput: string = '';

  booksState$: Observable<{ appState: string, appData?: ApiResponse<Page>, error?: HttpErrorResponse }>;
  responseSubject = new BehaviorSubject<ApiResponse<Page>>(null);

  private currentPageSubject = new BehaviorSubject<number>(0);
  currentPage$ = this.currentPageSubject.asObservable();


  constructor(
    private bookService: BookService,
    private utilService: UtilService
  ) { }

  ngOnInit(): void {
    this.booksState$ = this.bookService.getBooks().pipe(
      map((response: ApiResponse<Page>) => {
        this.responseSubject.next(response);
        this.currentPageSubject.next(response.data.page.number);
        console.log("response", response);
        return ({ appState: 'APP_LOADED', appData: response });
      }
      ),
      startWith({ appState: 'APP_LOADING' }),
      catchError((error: HttpErrorResponse) =>
        of({ appState: 'APP_ERROR', error: error }))
    );


  }

  goToPage(title?: string, page?: number) {
    this.booksState$ = this.bookService.getBooks(title, page).pipe(
      map((response: ApiResponse<Page>) => {
        this.responseSubject.next(response);
        this.currentPageSubject.next(response.data.page.number);
        console.log("response", response);
        return ({ appState: 'APP_LOADED', appData: response });
      }
      ),
      startWith({ appState: 'APP_LOADED', appData: this.responseSubject.value }),
      catchError((error: HttpErrorResponse) =>
        of({ appState: 'APP_ERROR', error: error }))
    );
  }

  goToNextOrPreviousPage(direction?: string, title?: string): void {
    this.goToPage(title, direction === 'forward' ?
      this.currentPageSubject.value + 1 :
      this.currentPageSubject.value - 1);
  }
}
