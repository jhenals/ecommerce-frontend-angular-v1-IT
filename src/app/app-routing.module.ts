import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ComponentsModule } from './components/components.module';
import { HomeComponent } from './components/mainpages/home/home.component';
import { CartComponent } from './components/mainpages/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout/checkout.component';
import { UserAccountComponent } from './components/user/user-account/user-account.component';
import { ManageUserOrdersComponent } from './components/user/manage-user-orders/manage-user-orders.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'manage-user-account/:userProfile', component: UserAccountComponent }, /* , canActivate: [AuthGuard], data: { edit: true }  TODO: change with user's name */
  { path: 'orders', component: ManageUserOrdersComponent },
  { path: '**', redirectTo: '' }
]

@NgModule({
  imports: [
    ComponentsModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
