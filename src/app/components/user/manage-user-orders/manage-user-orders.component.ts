import { Component } from '@angular/core';

import { UtilService } from 'src/app/services/util.service';
import { OrderService } from 'src/app/services/order.service';
import { BookService } from 'src/app/services/book.service';

import { Book } from 'src/app/interface/book';
import { Order } from 'src/app/models/Order';
import { OrderBook } from 'src/app/interface/orderBook';

@Component({
  selector: 'app-manage-user-orders',
  templateUrl: './manage-user-orders.component.html',
  styleUrls: ['./manage-user-orders.component.css']
})
export class ManageUserOrdersComponent {

  orderList: Order[] = [];
  order: Order;
  cartItems: OrderBook[] = [];

  constructor(
    private utilService: UtilService,
    private orderService: OrderService,
    private bookService: BookService
  ) {

  }

  ngOnInit(): void {
    this.orderService.getOrdersOfUser().subscribe((response: any) => {
      response.forEach((order: Order) => {
        if (order.orderStatus != 'PENDING') {
          this.orderList.push(order);
        }
      });
    });
  }

  getAuthor(bookId: number) {
    throw new Error('Method not implemented.');
  }

  reorder(book: Book) {
    this.bookService.goToBookDetails(book)
  }

  goToLink(url: string) {
    this.utilService.goToLink(url);
  }

}
