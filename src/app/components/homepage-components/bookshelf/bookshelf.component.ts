import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { BookService } from 'src/app/services/book.service';
import { UtilService } from 'src/app/services/util.service';
import { CartService } from 'src/app/services/cart.service';

import { ApiResponse } from 'src/app/interface/api-response';
import { Page } from 'src/app/interface/page';
import { Book } from 'src/app/interface/book';
import { BehaviorSubject, Observable, catchError, map, of, startWith } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { PageEvent } from '@angular/material/paginator';
import { OrderService } from 'src/app/services/order.service';
import { Order } from 'src/app/models/Order';
import { OrderBook } from 'src/app/interface/orderBook';

@Component({
  selector: 'app-bookshelf',
  templateUrl: './bookshelf.component.html',
  styleUrls: ['./bookshelf.component.css']
})
export class BookshelfComponent implements OnInit {
  booksState$: Observable<{ appState: string, appData?: ApiResponse<Page>, error?: HttpErrorResponse }>;
  responseSubject = new BehaviorSubject<ApiResponse<Page>>(null);

  private currentPageSubject = new BehaviorSubject<number>(0);
  currentPage$ = this.currentPageSubject.asObservable();

  itemsInCart: OrderBook[] = [];
  itemsInCart$: Observable<OrderBook[]>;

  selectedFilters: number[] = [];
  sort: string = 'id';
  sortDirection: string = 'ASC';

  constructor(
    private bookService: BookService,
    private orderService: OrderService,
    private cartService: CartService,) { }

  ngOnInit(): void {
    this.booksState$ = this.bookService.getBooks().pipe(
      map((response: ApiResponse<Page>) => {
        this.responseSubject.next(response);
        this.currentPageSubject.next(response.data.page.number);
        return ({ appState: 'APP_LOADED', appData: response });
      }
      ),
      startWith({ appState: 'APP_LOADING' }),
      catchError((error: HttpErrorResponse) =>
        of({ appState: 'APP_ERROR', error: error }))
    );

    this.cartService.cartItems$.subscribe((items) => {
      this.itemsInCart = items;
    });

  }

  applyFilters(filters: number[]) {
    this.selectedFilters = filters;
    console.log("filters", filters);
    this.booksState$ = this.bookService.getBooksByCategories(this.selectedFilters).pipe(
      map((response: ApiResponse<Page>) => {
        this.responseSubject.next(response);
        this.selectedFilters = [];
        console.log("response", response);
        return ({ appState: 'APP_LOADED', appData: response });
      }
      ),
      startWith({ appState: 'APP_LOADED', appData: this.responseSubject.value }),
      catchError((error: HttpErrorResponse) =>
        of({ appState: 'APP_ERROR', error: error }))
    );
  }


  sortBy(field: string) {
    if (field === "alphabetical") {
      this.sort = "title";
      this.sortDirection = "ASC";
    } else if (field === "price-low-high") {
      this.sort = "price";
      this.sortDirection = "ASC";
    } else if (field === "price-high-low") {
      this.sort = "price";
      this.sortDirection = "DESC";
    }

    this.booksState$ = this.bookService.getBooks(0, 12, this.sort, this.sortDirection).pipe(
      map((response: ApiResponse<Page>) => {
        this.responseSubject.next(response);
        this.currentPageSubject.next(response.data.page.number);
        console.log("response", response);
        this.sort = 'id';
        this.sortDirection = 'ASC';
        return ({ appState: 'APP_LOADED', appData: response });
      }
      ),
      startWith({ appState: 'APP_LOADED', appData: this.responseSubject.value }),
      catchError((error: HttpErrorResponse) =>
        of({ appState: 'APP_ERROR', error: error }))
    );

  }

  goToPage(page?: number) {
    this.booksState$ = this.bookService.getBooks(page, 12, this.sort, this.sortDirection).pipe(
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

  goToNextOrPreviousPage(direction?: string): void {
    this.goToPage(direction === 'forward' ?
      this.currentPageSubject.value + 1 :
      this.currentPageSubject.value - 1);
  }

  isInCart(book: Book) {
    return this.itemsInCart.some((orderBook) => orderBook.book.id === book.id);
  }
}
