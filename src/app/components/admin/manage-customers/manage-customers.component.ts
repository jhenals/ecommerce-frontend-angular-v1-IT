import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

import { User } from 'src/app/models/User';
@Component({
  selector: 'app-manage-customers',
  templateUrl: './manage-customers.component.html',
  styleUrls: ['./manage-customers.component.css']
})
export class ManageCustomersComponent {

  users$ = this.userService.users$;
  customers: User[] = []
  displayedColumns = ['name', 'email', 'phone', 'address', "createdAt"];

  constructor(
    private userService: UserService
  ) { }
  ngOnInit(): void {
    this.users$ = this.userService.users$;
    this.userService.users$.subscribe((users) => {
      this.customers = users.filter(user => user.roles.includes('user'));
    });
    console.log(this.customers);
  }
}
