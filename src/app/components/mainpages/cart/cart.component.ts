import { Component, EventEmitter, OnInit, Output, ChangeDetectorRef, OnDestroy } from '@angular/core';

import { OrderService } from 'src/app/services/order.service';
import { UtilService } from 'src/app/services/util.service';
import { BookService } from 'src/app/services/book.service';
import { CartService } from 'src/app/services/cart.service';

import { Book } from 'src/app/interface/book';
import { Order } from 'src/app/models/Order';
import { OrderBook } from 'src/app/interface/orderBook';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnDestroy, OnInit {
  orderFinished: boolean = false;

  cartItems$: Observable<OrderBook[]>;
  private cartItemsSubscription: Subscription;

  userId: string = '';
  pendingCart: Order;
  totalAmount: number = 0;
  book: Book;

  @Output()
  onOrderFinished!: EventEmitter<boolean>;


  constructor(
    private orderService: OrderService,
    private cartService: CartService,
    private utilService: UtilService,
    private bookService: BookService,
    private cdr: ChangeDetectorRef
  ) {
    this.onOrderFinished = new EventEmitter<boolean>();

  }


  ngOnInit(): void {
    this.cartItems$ = this.cartService.cartItems$;
    this.cartItemsSubscription = this.cartItems$.subscribe((cartItems) => {
      this.totalAmount = cartItems.reduce((acc, orderBook) => acc + orderBook.bookFinalPrice, 0);
    });
  }
  ngOnDestroy(): void {
    this.cartItemsSubscription.unsubscribe();
  }

  loadCart() {
    /*  this.orderService.getPendingCart().subscribe((response: any) => {
       this.pendingCart = response as Order;
       this.dataSource = response.orderBooks as OrderBook[];
       response.orderBooks.forEach((orderBook: OrderBook) => {
         this.totalAmount += orderBook.bookFinalPrice;
       });
     }); */
  }

  increaseQuantity(book: Book) {
    this.cartService.increaseBookQuantity(book);

  }

  decreaseQuantity(book: Book) {
    this.cartService.removeFromCart(book);
  }

  reset() {
    this.cartService.reset();

  }

  goToLink(url: string) {
    this.utilService.goToLink(url);
  }

}
