import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MiscellaneousModule } from '../miscellaneous/miscellaneous.module';
import { MaterialModule } from 'src/app/core/material/material.module';

import { UserAccountComponent } from './user-account/user-account.component';
import { ManageUserOrdersComponent } from './manage-user-orders/manage-user-orders.component';


@NgModule({
  declarations: [
    UserAccountComponent,
    ManageUserOrdersComponent
  ],
  imports: [
    CommonModule,
    MiscellaneousModule,
    MaterialModule
  ],
  exports: [
    UserAccountComponent,
    ManageUserOrdersComponent,
    MiscellaneousModule,
    MaterialModule
  ]
})
export class UserModule { }
