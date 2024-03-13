import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageCustomersComponent } from './manage-customers/manage-customers.component';
import { ManageProductsComponent } from './manage-products/manage-products.component';
import { ManageOrdersComponent } from './manage-orders/manage-orders.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidenavComponent } from './sidenav/sidenav.component';



@NgModule({
  declarations: [
    ManageCustomersComponent,
    ManageProductsComponent,
    ManageOrdersComponent,
    DashboardComponent,
    SidenavComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
