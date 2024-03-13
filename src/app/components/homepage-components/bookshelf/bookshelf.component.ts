import { Component, OnInit } from '@angular/core';
import { BookAuthor } from 'src/app/models/BookAuthor';

@Component({
  selector: 'app-bookshelf',
  templateUrl: './bookshelf.component.html',
  styleUrls: ['./bookshelf.component.css']
})
export class BookshelfComponent implements OnInit {
  allBooks: BookAuthor[] = [];
  constructor() { }

  ngOnInit(): void {
    this.getAllBooksWithAuthors();
  }

  getAllBooksWithAuthors() {
    // this.allBooks = this.bookService.getAllBooksWithAuthors();
  }
}
