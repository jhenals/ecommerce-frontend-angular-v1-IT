import { Component } from '@angular/core';

import { BookService } from 'src/app/services/book.service';

import { Book } from 'src/app/models/Book';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css']
})
export class ManageProductsComponent {

  allProducts: Book[] = [];

  constructor(private bookService: BookService) {
  }

  getDiscountedPrice(book: Book): number {
    return this.bookService.getDiscountedPrice(book);
  }

}
