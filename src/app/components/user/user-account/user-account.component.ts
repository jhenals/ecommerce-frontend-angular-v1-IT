import { Component } from '@angular/core';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent {
  firstName: string = '';
  lastName: string = '';
  address: string = 'Not set';
  mobile: string = 'Not set';
  email: string = '';
  constructor() {
    this.firstName = sessionStorage.getItem('firstName') as string;
    this.lastName = sessionStorage.getItem('lastName') as string;
    this.email = sessionStorage.getItem('email') as string;
  }

  deleteUserAccount() {
  }

}
