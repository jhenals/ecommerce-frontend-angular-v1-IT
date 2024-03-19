import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from 'src/app/services/book.service';
import { AuthService } from 'src/app/services/auth.service';
import { UtilService } from 'src/app/services/util.service';
import { Book } from 'src/app/models/Book';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  book: Book = new Book();

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private authService: AuthService,
    private utilsService: UtilService,
    private orderService: OrderService
  ) {

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const bookId = parseInt(params.get('id') || '', 10);
      this.bookService.getBookById(bookId).subscribe(book => {
        this.book = book;
        console.log(this.book)
      })
    })


  }

  getDiscountedPrice(book: Book) {
    return this.bookService.getDiscountedPrice(book);
  }

  goToLink(url: string) {
    this.utilsService.goToLink(url);
  }

  addToCart(book: Book) {
    this.orderService.addToCart(book);
  }

  bookIsInCart(book: Book): boolean {
    return this.orderService.bookIsInCart(book);
  }


}
