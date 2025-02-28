import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MiscellaneousModule } from '../miscellaneous/miscellaneous.module';
import { MaterialModule } from 'src/app/core/material/material.module';
import { BookComponent } from './book/book.component';
import { BookDetailComponent } from './book-detail/book-detail.component';



@NgModule({
  declarations: [
    BookComponent,
    BookDetailComponent
  ],
  imports: [
    CommonModule,
    MiscellaneousModule,
    MaterialModule
  ],
  exports: [
    BookComponent,
    BookDetailComponent
  ]
})
export class BookModule { }
