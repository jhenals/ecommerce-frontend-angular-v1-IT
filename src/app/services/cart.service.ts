import { Injectable, ChangeDetectorRef } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { UtilService } from './util.service';
import { BookService } from './book.service';
import { AuthService } from './auth.service';

import { Order } from '../models/Order';
import { Book } from '../models/Book';
import { OrderBook } from '../models/OrderBook';
import { OrderForm } from '../models/OrderForm';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  private readonly baseUrl = 'http://localhost:8081/api/v1';
  private readonly userId = sessionStorage.getItem('id');

  private cartItemsSubject = new BehaviorSubject<OrderBook[]>([]);
  cartItems$ = this.cartItemsSubject.asObservable();

  constructor(
    private httpClient: HttpClient,
    private utilService: UtilService,
    private bookService: BookService,
    private authService: AuthService,

  ) {
    this.fetchCartItemsFromDatabse();
  }

  private fetchCartItemsFromDatabse() { //fetch initial cart items from database
    const endpoint = `/orders/pending-cart?userId=${this.userId}`;
    const url = `${this.baseUrl}${endpoint}`;
    this.httpClient.get<Order>(url).subscribe((response: any) => {
      this.cartItemsSubject.next(response.orderBooks as OrderBook[]);
    });
  }


  getPendingCart(): Observable<Order> {
    const endpoint = `/orders/pending-cart?userId=${this.userId}`;
    const url = `${this.baseUrl}${endpoint}`;
    return this.httpClient.get<Order>(url);
  }

  addToCart(book: Book) {
    const endpoint = `/orders/${this.userId}`;
    const url = `${this.baseUrl}${endpoint}`;
    this.authService.isLoggedIn().then((loggedIn) => {
      if (!loggedIn) {
        this.authService.login();
        return;
      } else {
        this.httpClient.post(url, book).subscribe(
          response => {
            console.log('API response:', response);
            this.fetchCartItemsFromDatabse();
          },
          error => {
            console.error('API error:', error);
            this.utilService.showToast('Error adding book to cart. Please try again.');
          }
        );
      }
    }
    );
  }

  /* bookIsInCart(book: Book): boolean {
    return this.itemsInPendingCart.some((orderBook) => orderBook.book.id === book.id);
  }
   */


  increaseBookQuantity(book: Book) {
    const endpoint = `/orders/${this.userId}/incr-quantity/book?id=${book.id}`;
    const url = `${this.baseUrl}${endpoint}`;
    this.httpClient.put(url, book).subscribe(
      response => {
        console.log('API response:', response);
        this.fetchCartItemsFromDatabse();
      },
      error => {
        console.error('API error:', error);
        this.utilService.showToast('Error increasing book quantity. Please try again.');
      }
    );
  }

  removeFromCart(book: Book) {
    const endpoint = `/orders/${this.userId}`;
    const url = `${this.baseUrl}${endpoint}`;
    const body = {
      body: book // Include the book object as the body of the request
    };
    this.httpClient.delete(url, body).subscribe(
      response => {
        console.log('API response:', response);
        this.fetchCartItemsFromDatabse();
      },
      error => {
        console.error('API error:', error);
        this.utilService.showToast('Error removing book from cart. Please try again.');
      }
    );
  }

  checkout(orderForm: OrderForm) {
    const userId = sessionStorage.getItem('id');
    const endpoint = `/orders/${userId}/checkout`;
    const url = `${this.baseUrl}${endpoint}`;
    this.httpClient.post(url, orderForm).subscribe(
      response => {
        console.log('API response:', response);
        this.utilService.showToast('New Order Added Successfully');
        this.utilService.goToLink('/orders');
      },
      error => {
        console.error('API error:', error);
        this.utilService.showToast("Error adding new order. Please try again.");
      }
    )
  }



  reset() {
    const endpoint = `/orders/${this.userId}/reset`;
    const url = `${this.baseUrl}${endpoint}`;
    this.httpClient.delete(url).subscribe(
      response => {
        console.log('API response:', response);
        this.fetchCartItemsFromDatabse();
      },
      error => {
        console.error('API error:', error);
        this.utilService.showToast('Error resetting cart. Please try again.');
      }
    );
  }

  getCartItems() {
  }


}
