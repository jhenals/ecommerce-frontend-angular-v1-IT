import { Component } from '@angular/core';

import { Customer } from 'src/app/models/Customer';
@Component({
  selector: 'app-manage-customers',
  templateUrl: './manage-customers.component.html',
  styleUrls: ['./manage-customers.component.css']
})
export class ManageCustomersComponent {
  customers: Customer[] = []
  displayedColumns = ['name', 'email', 'phone', 'address', "createdAt"];
}
