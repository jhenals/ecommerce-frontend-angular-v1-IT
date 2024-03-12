import { Component, EventEmitter, OnInit, Output, ChangeDetectorRef } from '@angular/core';

import { CartService } from 'src/app/services/cart.service';
import { UtilService } from 'src/app/services/util.service';
import { BookService } from 'src/app/services/book.service';

import { Book } from 'src/app/models/Book';
import { BookAuthor } from 'src/app/models/BookAuthor';
import { OrderDetail } from 'src/app/models/OrderDetail';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  orderFinished: boolean = false;

  userId: string = '';
  dataSource: OrderDetail[] = [];
  totalPrice: number = 0;
  bookFinalPrice: number = 0;
  book: BookAuthor = new BookAuthor();

  @Output()
  onOrderFinished!: EventEmitter<boolean>;


  constructor(
    private cartService: CartService,
    private utilService: UtilService,
    private bookService: BookService,
    private cdr: ChangeDetectorRef
  ) {
    this.onOrderFinished = new EventEmitter<boolean>();

  }


  ngOnInit(): void {
    /*    this.cartService.getUserCart().subscribe(() => {
         this.loadCart();
         this.loadTotalPrice();
       }); */
  }

  loadCart() {
    /* this.cartService.getUserCart().subscribe((cart: Cart) => {
      this.dataSource = cart.orderBooks;
    });
    this.loadTotalPrice(); */
  }

  loadTotalPrice() {
    /*  this.cartService.getUserCart().subscribe((cart: Cart) => {
       this.totalPrice = cart.totalPrice;
     });
     this.cdr.detectChanges(); */

  }

  increaseQuantity(book: Book) {
    /*  this.cartService.increaseQuantity(book);
     this.cdr.detectChanges();
     this.loadCart(); */
  }

  decreaseQuantity(book: Book) {
    /*  this.cartService.decreaseQuantity(book);
     this.cdr.detectChanges();

     this.loadCart(); */
  }


  goToLink(url: string) {
    //this.utilsService.goToLink(url);
  }

  reset() {
    //this.cartService.reset();

  }

}
