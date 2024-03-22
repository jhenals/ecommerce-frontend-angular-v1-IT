import { Component, EventEmitter, OnInit, Output, ChangeDetectorRef } from '@angular/core';

import { OrderService } from 'src/app/services/order.service';
import { UtilService } from 'src/app/services/util.service';
import { BookService } from 'src/app/services/book.service';

import { Book } from 'src/app/interface/book';
import { OrderBook } from 'src/app/interface/orderBook';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  orderFinished: boolean = false;

  userId: string = '';
  dataSource: OrderBook[] = [];
  totalPrice: number = 0;
  bookFinalPrice: number = 0;
  book: Book;

  @Output()
  onOrderFinished!: EventEmitter<boolean>;


  constructor(
    private orderService: OrderService,
    private utilService: UtilService,
    private bookService: BookService,
    private cdr: ChangeDetectorRef
  ) {
    this.onOrderFinished = new EventEmitter<boolean>();

  }


  ngOnInit(): void {
    this.loadCart();
    this.loadTotalPrice();
  }

  loadCart() {
    //this.dataSource = this.orderService.getOrderDetailList();

  }

  loadTotalPrice() {
    /*   this.orderService.getOrderDetailList().forEach((orderDetail) => {
        this.totalPrice += orderDetail.finalPrice * orderDetail.quantity;
      });
      this.cdr.detectChanges(); */

  }

  increaseQuantity(book: Book) {
    /*  this.orderService.getOrderDetailList().forEach((orderDetail) => {
       if (orderDetail.book.id === book.id) {
         orderDetail.quantity++;
         this.totalPrice += orderDetail.finalPrice;
       }
     }); */
  }

  decreaseQuantity(book: Book) {
    /*   this.orderService.getOrderDetailList().forEach((orderDetail) => {
        if (orderDetail.book.id === book.id) {
          if (orderDetail.quantity > 1) {
            orderDetail.quantity--;
            this.totalPrice -= orderDetail.finalPrice;
          }
        }
      }); */
  }


  goToLink(url: string) {
    this.utilService.goToLink(url);
  }

  reset() {
    //this.cartService.reset();

  }

}
