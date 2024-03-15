import { Component, OnInit, Input } from '@angular/core';

import { BookService } from 'src/app/services/book.service';

import { Book } from 'src/app/models/Book';
import { BookAuthor } from 'src/app/models/BookAuthor';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  @Input() bookInput!: BookAuthor;
  book!: BookAuthor;
  bookTitle: string = '';
  bookAuthor: string = '';

  constructor(
    private bookService: BookService
  ) {

  }

  ngOnInit(): void {
    this.book = this.bookInput;;
    this.bookTitle = this.book?.book?.title;
    this.bookAuthor = this.book?.author?.name;
    const maxLength = 20;
    const maxLengthAuthor = 10;
    const ellipsis = '...';
    this.bookTitle = this.book.book.title.length > maxLength ? this.book.book.title.slice(0, maxLength) + ellipsis : this.book.book.title;
    this.bookAuthor = this.book.author.name.length > maxLengthAuthor ? this.book.author.name.slice(0, maxLengthAuthor) + ellipsis : this.book.author.name;

  }

  goToBookDetails(book: BookAuthor) {
    this.bookService.goToBookDetails(book.book);
  }

  getDiscountedPrice(book: Book) {
    return book.price - (book.price * book.discount / 100);
  }
}
