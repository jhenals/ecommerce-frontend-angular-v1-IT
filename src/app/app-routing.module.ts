import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './core/guards/auth.guard';

import { ComponentsModule } from './components/components.module';
import { HomeComponent } from './components/mainpages/home/home.component';
import { CartComponent } from './components/mainpages/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout/checkout.component';
import { UserAccountComponent } from './components/user/user-account/user-account.component';
import { ManageUserOrdersComponent } from './components/user/manage-user-orders/manage-user-orders.component';
import { BookDetailComponent } from './components/book/book-detail/book-detail.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { ManageCustomersComponent } from './components/admin/manage-customers/manage-customers.component';
import { ManageOrdersComponent } from './components/admin/manage-orders/manage-orders.component';
import { ManageProductsComponent } from './components/admin/manage-products/manage-products.component';
import { AddNewBookComponent } from './components/admin/add-new-book/add-new-book.component';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'book/:id/:title', component: BookDetailComponent },
  { path: 'cart', component: CartComponent, canActivate: [AuthGuard] },
  { path: 'checkout', component: CheckoutComponent, canActivate: [AuthGuard] },
  { path: 'manage-user-account/:userProfile', component: UserAccountComponent, canActivate: [AuthGuard] }, /* , canActivate: [AuthGuard], data: { edit: true }  TODO: change with user's name */
  { path: 'orders', component: ManageUserOrdersComponent, canActivate: [AuthGuard] },
  {
    path: 'admin',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    data: { roles: ['admin'] },
    children: [
      { path: '', redirectTo: 'manage-products', pathMatch: 'full' },
      { path: 'manage-products', component: ManageProductsComponent },
      { path: 'manage-customers', component: ManageCustomersComponent },
      { path: 'manage-orders', component: ManageOrdersComponent },
      { path: 'add-new-book', component: AddNewBookComponent },
    ]
  },
  { path: '**', redirectTo: '' }
]

@NgModule({
  imports: [
    ComponentsModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
