import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutComponent } from './checkout/checkout.component';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';
import { MaterialModule } from 'src/app/core/material/material.module';


@NgModule({
  declarations: [
    CheckoutComponent,
    CartSummaryComponent,

  ],
  imports: [
    CommonModule,
    MaterialModule,
  ]
})
export class CheckoutModule { }
