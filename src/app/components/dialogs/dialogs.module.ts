import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from 'src/app/core/material/material.module';

import { DeleteBookDialogComponent } from './delete-book-dialog/delete-book-dialog.component';
import { UpdateBookDialogComponent } from './update-book-dialog/update-book-dialog.component';


@NgModule({
  declarations: [
    DeleteBookDialogComponent,
    UpdateBookDialogComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    DeleteBookDialogComponent,
    UpdateBookDialogComponent
  ]
})
export class DialogsModule { }
