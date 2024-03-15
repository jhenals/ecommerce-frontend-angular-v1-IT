import { Component } from '@angular/core';

import { Order } from 'src/app/models/Order';

@Component({
  selector: 'app-manage-orders',
  templateUrl: './manage-orders.component.html',
  styleUrls: ['./manage-orders.component.css']
})
export class ManageOrdersComponent {
  orders: Order[] = [];

}
