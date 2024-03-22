import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { BookService } from 'src/app/services/book.service';
import { Book } from 'src/app/interface/book';


@Component({
  selector: 'app-homepage-banner',
  templateUrl: './homepage-banner.component.html',
  styleUrls: ['./homepage-banner.component.css']
})
export class HomepageBannerComponent {
  discountedBooks: Book[] = [];

  constructor(
    private bookService: BookService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.getRandomDiscountedBooks();
  }


  private getRandomDiscountedBooks() {
    this.bookService.getAllDiscountedBooks().subscribe((data) => {
      this.discountedBooks = data;
      this.discountedBooks = this.getRandomBooks();
    }
    );
  }

  private getRandomBooks(): Book[] {
    let randomBooks: Book[] = [];
    while (randomBooks.length < 4) {
      let randomIndex = Math.floor(Math.random() * this.discountedBooks.length);
      let randomBook = this.discountedBooks[randomIndex];
      if (!randomBooks.includes(randomBook)) {
        randomBooks.push(randomBook);
      }
    }
    return randomBooks;
  }

  goToBookDetails(book: Book) {
    console.log(book);
    const bookId = book.id;
    const bookTitle = book.title;
    this.router.navigate([`book/${bookId}/${bookTitle}`]);
  }


}

