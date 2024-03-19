import { Injectable } from '@angular/core';
import { Book } from '../models/Book';
import { OrderDetail } from '../models/OrderDetail';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  orderDetails: OrderDetail[] = [];

  constructor() { }

  addToCart(book: Book) {
    const orderDetail = new OrderDetail();
    orderDetail.book = book;
    orderDetail.quantity = 1;
    orderDetail.price = book.price;
    this.orderDetails.push(orderDetail);

  }

  bookIsInCart(book: Book): boolean {
    let ret = false;
    this.orderDetails.forEach((orderDetail) => {
      if (orderDetail.book.id === book.id) {
        ret = true;
      }
    });
    return ret;
  }
}
