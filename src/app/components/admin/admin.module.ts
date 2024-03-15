import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MaterialModule } from 'src/app/core/material/material.module';
import { ManageCustomersComponent } from './manage-customers/manage-customers.component';
import { ManageProductsComponent } from './manage-products/manage-products.component';
import { ManageOrdersComponent } from './manage-orders/manage-orders.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { AddNewBookComponent } from './add-new-book/add-new-book.component';



@NgModule({
  declarations: [
    ManageCustomersComponent,
    ManageProductsComponent,
    ManageOrdersComponent,
    DashboardComponent,
    SidenavComponent,
    AddNewBookComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,

  ],
  exports: [
    ManageCustomersComponent,
    ManageProductsComponent,
    ManageOrdersComponent,
    DashboardComponent,
    SidenavComponent
  ]
})
export class AdminModule { }
