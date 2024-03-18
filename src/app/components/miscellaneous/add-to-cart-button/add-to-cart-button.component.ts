import { Component, Input } from '@angular/core';

import { UtilService } from 'src/app/services/util.service';

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
    private utilService: UtilService
  ) { }

  addToCart(book: Book) {
    console.log('Add to cart: ', book);
  }

  goToLink(url: string) {
    this.utilService.goToLink(url);
  }

  bookIsInCart(book: Book) {
    return false;
  }

}
