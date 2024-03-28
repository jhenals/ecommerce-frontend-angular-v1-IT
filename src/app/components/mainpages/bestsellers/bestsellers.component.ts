import { Component } from '@angular/core';

import { Book } from 'src/app/interface/book';

import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-bestsellers',
  templateUrl: './bestsellers.component.html',
  styleUrls: ['./bestsellers.component.css']
})
export class BestsellersComponent {

  bestsellers: Book[] = [];
  book: Book;

  constructor(
    private bookService: BookService) { }

  ngOnInit(): void {
    return this.getBestSellers();
  }

  private getBestSellers() {
    this.bookService.getBestSellers().subscribe((data) => {
      this.bestsellers = data;
      console.log(this.bestsellers);
    });
  }

  goToBookDetails(book: any) {
    console.log(book);
    this.bookService.goToBookDetails(book);
  }

}
