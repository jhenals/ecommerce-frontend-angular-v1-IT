import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookshelfComponent } from './bookshelf/bookshelf.component';
import { HomepageBannerComponent } from './homepage-banner/homepage-banner.component';
import { BookModule } from '../book/book.module';


@NgModule({
  declarations: [
    BookshelfComponent,
    HomepageBannerComponent
  ],
  imports: [
    CommonModule,
    BookModule
  ],
  exports: [
    BookshelfComponent,
    HomepageBannerComponent
  ]
})
export class HomepageComponentsModule { }
