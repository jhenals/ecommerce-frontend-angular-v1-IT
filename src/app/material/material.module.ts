import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatBadgeModule } from '@angular/material/badge';

import { MatCardModule } from '@angular/material/card';










@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    FormsModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatBadgeModule,
    MatCardModule


  ],

  exports: [
    CommonModule,
    FormsModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatBadgeModule,
    MatCardModule



  ],
  providers: [],
  bootstrap: [],
  schemas: []
})
export class MaterialModule { }
