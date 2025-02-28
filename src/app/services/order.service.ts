import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

import { UtilService } from './util.service';
import { AuthService } from './auth.service';

import { Order } from '../models/Order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private readonly baseUrl = 'http://localhost:8081/api/v1';
  private userId = sessionStorage.getItem('id');

  private ordersSubject = new BehaviorSubject<Order[]>([]);
  orders$ = this.ordersSubject.asObservable();

  private userOrdersSubject = new BehaviorSubject<Order[]>([]);
  userOrders$ = this.userOrdersSubject.asObservable();


  constructor(
    private httpClient: HttpClient,
  ) {
    this.userId = sessionStorage.getItem('id');
    this.fetchAllOrdersFromDB();
    this.fetchAllOrdersOfUserFromDB();
  }


  fetchAllOrdersFromDB() {
    const endpoint = '/orders';
    const url = `${this.baseUrl}${endpoint}`;
    return this.httpClient.get(`${url}`).subscribe((response: any) => {
      this.ordersSubject.next(response as Order[]);
    });
  }

  fetchAllOrdersOfUserFromDB() {
    const endpoint = `/orders/user?id=${this.userId}`;
    const url = `${this.baseUrl}${endpoint}`;
    return this.httpClient.get(`${url}`).subscribe((response: any) => {
      this.userOrdersSubject.next(response as Order[]);
    });
  }

  getOrdersOfUser() {
    const endpoint = `/orders/user?id=${this.userId}`;
    const url = `${this.baseUrl}${endpoint}`;
    return this.httpClient.get<Order>(url);
  }

  updateOrder(order: Order, status: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset= UTF-8',
      'Accept': '*/*',
    });

    const body = `{"orderStatus": "${status}"}`; // Not recommended, but illustrates the need for quotes

    const endpoint = `/orders/order?id=${order.id}`;
    const url = `${this.baseUrl}${endpoint}`;
    this.httpClient.put(url, body, { headers }).subscribe(
      response => {
        console.log('API response:', response);
        this.fetchAllOrdersFromDB();
      },
      error => {
        console.error('API error:', error);
      }
    );
  }


}
