import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { MaterialModule } from '../core/material/material.module';
import { HomepageComponentsModule } from './homepage-components/homepage-components.module';
import { CheckoutModule } from './checkout/checkout.module';
import { BookModule } from './book/book.module';
import { AdminModule } from './admin/admin.module';
import { UserModule } from './user/user.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';

import { TopnavComponent } from './topnav/topnav.component';
import { FooterComponent } from './footer/footer.component';
import { TopsubnavComponent } from './topsubnav/topsubnav.component';
import { SpecialoffersComponent } from './mainpages/specialoffers/specialoffers.component';
import { BestsellersComponent } from './mainpages/bestsellers/bestsellers.component';
import { HomeComponent } from './mainpages/home/home.component';
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
    BrowserAnimationsModule,
    HomepageComponentsModule,
    CheckoutModule,
    AdminModule,
    BookModule,
    UserModule,
    MiscellaneousModule,
    RouterModule.forChild(routes),

  ],
  exports: [
    TopnavComponent,
    FooterComponent,
  ]
})
export class ComponentsModule { }
