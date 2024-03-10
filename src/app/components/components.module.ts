import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/material.module';

import { TopnavComponent } from './topnav/topnav.component';
import { FooterComponent } from './footer/footer.component';
import { TopsubnavComponent } from './topsubnav/topsubnav.component';



@NgModule({
  declarations: [
    TopnavComponent,
    FooterComponent,
    TopsubnavComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    TopnavComponent,
    FooterComponent
  ]
})
export class ComponentsModule { }
