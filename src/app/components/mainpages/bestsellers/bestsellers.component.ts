import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Book } from 'src/app/models/Book';

import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-bestsellers',
  templateUrl: './bestsellers.component.html',
  styleUrls: ['./bestsellers.component.css']
})
export class BestsellersComponent {

  bestsellers: Book[] = [];
  book: Book = new Book();

  constructor(private bookService: BookService,
    private router: Router) { }

  ngOnInit(): void {
    return this.getBestSellers();
  }

  private getBestSellers() {
    /*  this.bookService.getBestSellers().subscribe((data: any[]) => {
       this.bestsellers = data;
       console.log(this.bestsellers);
     }); */
  }

  goToBookDetails(book: any) {
    console.log(book);
    const bookId = book.id;
    this.router.navigate([`book/${bookId}`]);
  }

}
