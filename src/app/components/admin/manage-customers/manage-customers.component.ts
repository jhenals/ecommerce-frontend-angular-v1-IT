import { Component } from '@angular/core';

import { User } from 'src/app/interface/user';
@Component({
  selector: 'app-manage-customers',
  templateUrl: './manage-customers.component.html',
  styleUrls: ['./manage-customers.component.css']
})
export class ManageCustomersComponent {
  customers: User[] = []
  displayedColumns = ['name', 'email', 'phone', 'address', "createdAt"];
}
