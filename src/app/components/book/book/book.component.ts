import { Component, OnInit, Input } from '@angular/core';

import { BookService } from 'src/app/services/book.service';

import { Book } from 'src/app/models/Book';
import { Author } from 'src/app/interface/author';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  @Input() bookInput!: Book;
  bookTitle: string = '';
  bookAuthors: Author[] = [];
  bookAuthor: string = '';

  constructor(
    private bookService: BookService
  ) {

  }

  ngOnInit(): void {
    this.bookTitle = this.bookInput?.title;
    this.bookAuthors = this.bookInput.authors;
    const maxLength = 15;
    const maxLengthAuthor = 10;
    const ellipsis = '...';
    this.bookTitle = this.bookInput.title.length > maxLength ? this.bookInput.title.slice(0, maxLength) + ellipsis : this.bookInput.title;
    this.bookAuthor = this.bookAuthors[0].name.length > maxLengthAuthor ? this.bookAuthors[0].name.slice(0, maxLengthAuthor) + ellipsis as string : this.bookAuthors[0].name as string;

  }

  goToBookDetails(book: Book) {
    this.bookService.goToBookDetails(book);
  }

  getDiscountedPrice(book: Book): number {
    return this.bookService.getDiscountedPrice(book);
  }
}
