import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MaterialModule } from '../core/material/material.module';
import { HomepageComponentsModule } from './homepage-components/homepage-components.module';

import { TopnavComponent } from './topnav/topnav.component';
import { FooterComponent } from './footer/footer.component';
import { TopsubnavComponent } from './topsubnav/topsubnav.component';
import { SpecialoffersComponent } from './mainpages/specialoffers/specialoffers.component';
import { BestsellersComponent } from './mainpages/bestsellers/bestsellers.component';
import { HomeComponent } from './mainpages/home/home.component';
import { BookshelfComponent } from './homepage-components/bookshelf/bookshelf.component';
import { CartComponent } from './mainpages/cart/cart.component';

const routes: Routes = [
  { path: 'special-offers', component: SpecialoffersComponent },
  { path: 'bestsellers', component: BestsellersComponent },

];


@NgModule({
  declarations: [
    TopnavComponent,
    FooterComponent,
    TopsubnavComponent,
    HomeComponent,
    SpecialoffersComponent,
    BestsellersComponent,
    CartComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HomepageComponentsModule,
    RouterModule.forChild(routes),

  ],
  exports: [
    TopnavComponent,
    FooterComponent,

  ]
})
export class ComponentsModule { }
