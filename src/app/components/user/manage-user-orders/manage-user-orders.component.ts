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

  userOrders$ = this.orderService.userOrders$;


  constructor(
    private utilService: UtilService,
    private orderService: OrderService,
    private bookService: BookService
  ) {

  }

  ngOnInit(): void {
    this.userOrders$ = this.orderService.userOrders$;
  }


  reorder(book: Book) {
    this.bookService.goToBookDetails(book);
  }

  goToLink(url: string) {
    this.utilService.goToLink(url);
  }

  isCancelled(order: Order) {
    return order.orderStatus == 'CANCELED' || order.orderStatus == 'DELIVERED' || order.orderStatus == 'SHIPPED';
  }

  cancelOrder(order: Order) {
    this.orderService.updateOrder(order, "CANCELED");
    this.utilService.showToast("Order Cancelled Successfully.Please refresh the page to see the changes.");
  }



}
