import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

import { UtilService } from './util.service';
import { AuthService } from './auth.service';

import { Book } from '../interface/book';
import { Order } from '../models/Order';
import { OrderBook } from '../models/OrderBook';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private readonly baseUrl = 'http://localhost:8081/api/v1';
  private readonly userId = sessionStorage.getItem('id');

  private ordersSubject = new BehaviorSubject<Order[]>([]);
  orders$ = this.ordersSubject.asObservable();


  constructor(
    private httpClient: HttpClient,
    private utilService: UtilService,
    private authService: AuthService,
  ) {
    this.fetchAllOrdersFromDB();
  }


  fetchAllOrdersFromDB() {
    const endpoint = '/orders';
    const url = `${this.baseUrl}${endpoint}`;
    return this.httpClient.get(`${url}`).subscribe((response: any) => {
      this.ordersSubject.next(response as Order[]);
    });
  }

  getOrdersOfUser() {
    const endpoint = `/orders/user?id=${this.userId}`;
    const url = `${this.baseUrl}${endpoint}`;
    return this.httpClient.get<Order>(url);
  }

  updateOrder(order: Order) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset= UTF-8',
      'Accept': '*/*',
    });

    const body = JSON.stringify({
      order
    });
    const endpoint = `/orders/order?id=${order.id}`;
    const url = `${this.baseUrl}${endpoint}`;
    this.httpClient.put(url, order, { headers }).subscribe(
      response => {
        console.log('API response:', response);
      },
      error => {
        console.error('API error:', error);
      }
    );
  }


}
