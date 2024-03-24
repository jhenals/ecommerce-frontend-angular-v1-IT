import { Component } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, catchError, map, of, startWith } from 'rxjs';

import { MatDialog, } from '@angular/material/dialog';
import { UpdateOrderStatusComponent } from '../../dialogs/update-order-status/update-order-status.component';
import { OrderService } from 'src/app/services/order.service';

import { Order } from 'src/app/interface/order';

@Component({
  selector: 'app-manage-orders',
  templateUrl: './manage-orders.component.html',
  styleUrls: ['./manage-orders.component.css']
})
export class ManageOrdersComponent {
  allOrders$ = this.orderService.orders$;

  constructor(
    private orderService: OrderService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.allOrders$ = this.orderService.orders$;
  }

  ifCanceled(order: Order) {
    return order.orderStatus === 'CANCELED';
  }

  updateOrderStatus(order: Order) {
    const dialogRef = this.dialog.open(UpdateOrderStatusComponent, {
      data: order
    });
  }

}
