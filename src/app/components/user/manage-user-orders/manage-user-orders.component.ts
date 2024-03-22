import { Component } from '@angular/core';

import { UtilService } from 'src/app/services/util.service';

import { Book } from 'src/app/interface/book';
import { Order } from 'src/app/interface/order';
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
  ) {

  }

  getAuthor(bookId: number) {
    throw new Error('Method not implemented.');
  }

  reorder(bookId: number) {
    /* go to Book details */
    throw new Error('Method not implemented.');
  }

  goToLink(url: string) {
    this.utilService.goToLink(url);
  }

}
