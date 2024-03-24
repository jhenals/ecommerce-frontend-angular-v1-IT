import { Injectable, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { UtilService } from './util.service';
import { AuthService } from './auth.service';

import { Book } from '../interface/book';
import { Order } from '../models/Order';
import { OrderForm } from '../models/OrderForm';
import { OrderBook } from '../interface/orderBook';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private readonly baseUrl = 'http://localhost:8081/api/v1';
  private readonly userId = sessionStorage.getItem('id');

  itemsInPendingCart: OrderBook[] = [];


  constructor(
    private httpClient: HttpClient,
    private utilService: UtilService,
    private authService: AuthService,
  ) {
  }

  getOrdersOfUser() {
    const endpoint = `/orders/user?id=${this.userId}`;
    const url = `${this.baseUrl}${endpoint}`;
    return this.httpClient.get<Order>(url);
  }

  getPendingCart(): Observable<Order> {
    const endpoint = `/orders/pending-cart?userId=${this.userId}`;
    const url = `${this.baseUrl}${endpoint}`;
    return this.httpClient.get<Order>(url);
  }

  getItemsInPendingCart(): OrderBook[] {
    let orderBooks: OrderBook[] = [];
    this.getPendingCart().subscribe((response: any) => {
      orderBooks = response.orderBooks as OrderBook[];
    }
    );
    return orderBooks;
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
            this.utilService.showToast('Book added to cart');
          },
          error => {
            console.error('API error:', error);
            this.utilService.showToast('Error adding book to cart. Please try again.');
          }
        );
      }
    })


  }

  bookIsInCart(book: Book): boolean {
    return this.itemsInPendingCart.some((orderBook) => orderBook.book.id === book.id);
  }



  getTotalPrice(): number {
    let totalPrice = 0;
    this.itemsInPendingCart.forEach((orderBook) => {
      totalPrice += orderBook.bookFinalPrice;
    });
    return totalPrice;
  }

  increaseBookQuantity(book: Book) {
    const endpoint = `/orders/${this.userId}/incr-quantity/book?id=${book.id}`;
    const url = `${this.baseUrl}${endpoint}`;
    this.httpClient.put(url, book).subscribe(
      response => {
        console.log('API response:', response);
        this.utilService.showToast('Book quantity increased');
      },
      error => {
        console.error('API error:', error);
        this.utilService.showToast('Error increasing book quantity. Please try again.');
      }
    );
  }



  checkout(orderForm: OrderForm) {
    const userId = sessionStorage.getItem('id');
    const endpoint = `/orders/user?id=${userId}`;
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
}
