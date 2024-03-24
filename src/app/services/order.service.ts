import { Injectable } from '@angular/core';
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

  getPendingCart(): Observable<Order> {
    const endpoint = `/orders/pending-cart?userId=${this.userId}`;
    const url = `${this.baseUrl}${endpoint}`;
    return this.httpClient.get<Order>(url);
  }

  getOrdersOfUser() {
    const endpoint = `/orders/user?id=${this.userId}`;
    const url = `${this.baseUrl}${endpoint}`;
    return this.httpClient.get<Order>(url);
  }

  getTotalPrice(): number {
    let totalPrice = 0;
    /*     this.orderDetails.forEach((orderDetail) => {
          totalPrice += orderDetail.finalPrice * orderDetail.quantity;
        }
        ); */
    return totalPrice;
  }

  bookIsInCart(book: Book): boolean {
    return this.itemsInPendingCart.some((orderBook) => orderBook.book.id === book.id);
  }

}
