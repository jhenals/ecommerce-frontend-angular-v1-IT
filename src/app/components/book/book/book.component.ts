import { Component, OnInit, Input } from '@angular/core';

import { BookService } from 'src/app/services/book.service';

import { Book } from 'src/app/models/Book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  @Input() bookInput!: Book;
  book!: Book;
  bookTitle: string = '';
  bookAuthor: string = '';

  constructor(
    private bookService: BookService
  ) {

  }

  ngOnInit(): void {
    this.getBookAuthorOfBook();
    this.bookTitle = this.book?.title;
    this.bookAuthor = '';
    const maxLength = 20;
    const maxLengthAuthor = 10;
    const ellipsis = '...';
    this.bookTitle = this.book.title.length > maxLength ? this.book.title.slice(0, maxLength) + ellipsis : this.book.title;
    /* this.bookAuthor = this.book.author.name.length > maxLengthAuthor ? this.book.author.name.slice(0, maxLengthAuthor) + ellipsis : this.book.author.name; */

  }

  getBookAuthorOfBook() {
    /* this.bookService.getBookAuthorByBookId(this.book.book.id).subscribe(book => {
      this.book = book;
    }) */
  }


  goToBookDetails(book: Book) {
    this.bookService.goToBookDetails(book);
  }

  getDiscountedPrice(book: Book) {
    return book.price - (book.price * book.discount / 100);
  }
}
