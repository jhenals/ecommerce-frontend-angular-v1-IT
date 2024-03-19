import { Component, Input, ChangeDetectorRef } from '@angular/core';

import { UtilService } from 'src/app/services/util.service';
import { AuthService } from 'src/app/services/auth.service';
import { OrderService } from 'src/app/services/order.service';

import { Book } from 'src/app/models/Book';

@Component({
  selector: 'app-add-to-cart-button',
  templateUrl: './add-to-cart-button.component.html',
  styleUrls: ['./add-to-cart-button.component.css']
})
export class AddToCartButtonComponent {
  @Input() bookInput!: Book;
  @Input() bookDetailPage: boolean = true;
  book!: Book;

  constructor(
    private utilService: UtilService,
    private authService: AuthService,
    private orderService: OrderService,
    private cdr: ChangeDetectorRef
  ) {
    console.log("book in cart", this.bookInput)
  }

  addToCart(book: Book) {
    this.authService.isLoggedIn().then((loggedIn) => {
      if (!loggedIn) {
        this.authService.login();
        return;
      } else {
        console.log(book)
        this.orderService.addToCart(book);
      }
    });
    this.cdr.detectChanges();
  }

  goToLink(url: string) {
    this.utilService.goToLink(url);
  }

  bookIsInCart(book: Book) {
    return this.orderService.bookIsInCart(book);
  }

}
