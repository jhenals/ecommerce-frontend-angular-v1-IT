import { Component } from '@angular/core';
import { Book } from 'src/app/models/Book';
import { Order } from 'src/app/models/Order';
import { OrderDetail } from 'src/app/models/OrderDetail';

@Component({
  selector: 'app-manage-user-orders',
  templateUrl: './manage-user-orders.component.html',
  styleUrls: ['./manage-user-orders.component.css']
})
export class ManageUserOrdersComponent {

  orderList: Order[] = [];
  order: Order = new Order();
  cartItems: OrderDetail[] = [];

  constructor() {

  }

  getAuthor(bookId: number) {
    throw new Error('Method not implemented.');
  }

  reorder(bookId: number) {
    /* go to Book details */
    throw new Error('Method not implemented.');
  }

}
