import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MiscellaneousModule } from '../miscellaneous/miscellaneous.module';
import { BookComponent } from './book/book.component';
import { BookDetailComponent } from './book-detail/book-detail.component';



@NgModule({
  declarations: [
    BookComponent,
    BookDetailComponent
  ],
  imports: [
    CommonModule,
    MiscellaneousModule
  ],
  exports: [
    BookComponent,
    BookDetailComponent
  ]
})
export class BookModule { }
