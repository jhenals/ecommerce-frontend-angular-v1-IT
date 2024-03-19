import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/core/material/material.module';
import { TitleBarComponent } from './title-bar/title-bar.component';
import { GoBackButtonComponent } from './go-back-button/go-back-button.component';
import { AddToCartButtonComponent } from './add-to-cart-button/add-to-cart-button.component';
import { FilterSortComponent } from './filter-sort/filter-sort.component';
import { filter } from 'rxjs';



@NgModule({
  declarations: [
    TitleBarComponent,
    GoBackButtonComponent,
    AddToCartButtonComponent,
    FilterSortComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    TitleBarComponent,
    GoBackButtonComponent,
    AddToCartButtonComponent,
    FilterSortComponent
  ]
})
export class MiscellaneousModule { }
