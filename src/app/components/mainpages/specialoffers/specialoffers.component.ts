import { Component } from '@angular/core';

import { BookService } from 'src/app/services/book.service';

import { Book } from 'src/app/interface/book';

@Component({
  selector: 'app-specialoffers',
  templateUrl: './specialoffers.component.html',
  styleUrls: ['./specialoffers.component.css']
})
export class SpecialoffersComponent {
  discountedbooks: Book[] = [];

  constructor(
    private bookService: BookService) {

  }

  ngOnInit(): void {
    this.getDiscountedBooks();

  }
  private getDiscountedBooks() {
    this.bookService.getAllDiscountedBooks().subscribe((data) => {
      this.discountedbooks = data;
      console.log(this.discountedbooks);
    });
  }

  goToBookDetails(book: Book) {
    this.bookService.goToBookDetails(book);
  }


}
