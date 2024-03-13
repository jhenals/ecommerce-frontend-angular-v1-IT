import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './book/book.component';
import { BookDetailComponent } from './book-detail/book-detail.component';



@NgModule({
  declarations: [
    BookComponent,
    BookDetailComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BookComponent,
    BookDetailComponent
  ]
})
export class BookModule { }
