import { Component, OnInit } from '@angular/core';

import { BookService } from 'src/app/services/book.service';
import { BookAuthor } from 'src/app/models/BookAuthor';

@Component({
  selector: 'app-bookshelf',
  templateUrl: './bookshelf.component.html',
  styleUrls: ['./bookshelf.component.css']
})
export class BookshelfComponent implements OnInit {
  allBooks: BookAuthor[] = [];
  constructor(
    private bookService: BookService,
  ) { }

  ngOnInit(): void {
    console.log("bookshelf component")
    this.getAllBooksWithAuthors();
  }

  getAllBooksWithAuthors() {
    this.bookService.getAllBookAuthors().subscribe((data: BookAuthor[]) => {
      this.allBooks = data;
    })
  }
}
