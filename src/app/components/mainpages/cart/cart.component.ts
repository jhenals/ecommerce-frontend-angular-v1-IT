import { Component, EventEmitter, OnInit, Output, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';

import { UtilService } from 'src/app/services/util.service';
import { BookService } from 'src/app/services/book.service';
import { CartService } from 'src/app/services/cart.service';

import { Book } from 'src/app/interface/book';
import { Order } from 'src/app/models/Order';
import { OrderBook } from 'src/app/interface/orderBook';


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
    private cartService: CartService,
    private utilService: UtilService,
    private bookService: BookService,
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
