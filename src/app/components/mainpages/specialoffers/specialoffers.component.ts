import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { BookService } from 'src/app/services/book.service';
import { UtilService } from 'src/app/services/util.service';

import { Book } from 'src/app/models/Book';
@Component({
  selector: 'app-specialoffers',
  templateUrl: './specialoffers.component.html',
  styleUrls: ['./specialoffers.component.css']
})
export class SpecialoffersComponent {
  discountedbooks: Book[] = [];

  constructor(
    private bookService: BookService,
    private utilService: UtilService,
    private router: Router) {

  }

  ngOnInit(): void {
    this.getDiscountedBooks();
    /* this.discountedbooks = dummyBooks; */
  }
  private getDiscountedBooks() {
    /* this.booksService.getBooksWithDiscount().subscribe((data) => {
      this.discountedbooks = data;
      console.log(this.discountedbooks);
    }); */
  }

  goToBookDetails(bookId: number) {
    //this.utilsService.goToBookDetails(bookId);
  }


}
