import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from 'src/app/core/material/material.module';

import { DeleteBookDialogComponent } from './delete-book-dialog/delete-book-dialog.component';
import { UpdateBookDialogComponent } from './update-book-dialog/update-book-dialog.component';
import { UpdateOrderStatusComponent } from './update-order-status/update-order-status.component';


@NgModule({
  declarations: [
    DeleteBookDialogComponent,
    UpdateBookDialogComponent,
    UpdateOrderStatusComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    DeleteBookDialogComponent,
    UpdateBookDialogComponent,
    UpdateOrderStatusComponent
  ]
})
export class DialogsModule { }
