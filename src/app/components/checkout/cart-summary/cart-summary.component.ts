import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { CartService } from 'src/app/services/cart.service';

import { OrderBook } from 'src/app/interface/orderBook';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent {
  cartItems$: Observable<OrderBook[]>;
  private cartItemsSubscription: Subscription;
  cartItems: OrderBook[] = [];
  totalAmount: number = 0;

  constructor(private cartService: CartService) { }


  ngOnInit(): void {
    this.cartItems$ = this.cartService.cartItems$;
    this.cartItemsSubscription = this.cartItems$.subscribe((cartItems) => {
      this.totalAmount = cartItems.reduce((acc, orderBook) => acc + orderBook.bookFinalPrice, 0);
    });
  }

}
