import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ComponentsModule } from './components/components.module';
import { HomeComponent } from './components/mainpages/home/home.component';
import { CartComponent } from './components/mainpages/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout/checkout.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: '**', redirectTo: '' }
]

@NgModule({
  imports: [
    ComponentsModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
