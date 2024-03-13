import { Component, Input } from '@angular/core';

import { UtilService } from 'src/app/services/util.service';
import { BookAuthor } from 'src/app/models/BookAuthor';

@Component({
  selector: 'app-add-to-cart-button',
  templateUrl: './add-to-cart-button.component.html',
  styleUrls: ['./add-to-cart-button.component.css']
})
export class AddToCartButtonComponent {
  @Input() bookInput!: BookAuthor;
  @Input() bookDetailPage: boolean = true;
  book!: BookAuthor;

  constructor(
    private utilService: UtilService
  ) { }

  addToCart(book: BookAuthor) {
    console.log('Add to cart: ', book);
  }

  goToLink(url: string) {
    this.utilService.goToLink(url);
  }

  bookIsInCart(book: BookAuthor) {
    return false;
  }

}
