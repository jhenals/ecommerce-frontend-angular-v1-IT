import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { KeycloakProfile } from 'keycloak-js';
import { KeycloakService } from 'keycloak-angular';

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
  private userId = sessionStorage.getItem('id');

  private cartItemsSubject = new BehaviorSubject<OrderBook[]>([]);
  cartItems$ = this.cartItemsSubject.asObservable();

  constructor(
    private httpClient: HttpClient,
    private utilService: UtilService,
    private keycloakService: KeycloakService,
    private authService: AuthService,

  ) {
    this.authService.isLoggedIn().then((loggedIn) => {
      if (loggedIn) {
        this.keycloakService.getKeycloakInstance().loadUserProfile()
          .then((user: KeycloakProfile) => {
            this.userId = user.id as string;
            console.log('User ID:', this.userId);
            this.fetchCartItemsFromDatabse();
          })

      }
    });
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

  bookIsInCart(book: Book): boolean {
    let isInCart = false;
    this.cartItems$.subscribe((orderBooks) => {
      isInCart = orderBooks.some((orderBook) => orderBook.book.id === book.id);
    });
    return isInCart;

  }



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
        this.utilService.goToLink('');
      },
      error => {
        console.error('API error:', error);
        this.utilService.showToast("Error adding new order. Please try again.");
      }
    )
    this.cartItemsSubject.unsubscribe();
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
