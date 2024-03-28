import { Component, Inject } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, catchError, map, of, startWith } from 'rxjs';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';

import { OrderService } from 'src/app/services/order.service';
import { UtilService } from 'src/app/services/util.service';

import { Order } from 'src/app/models/Order';

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

  disabled(order: Order) {
    return order.orderStatus === 'CANCELED' || order.orderStatus === 'DELIVERED' || order.orderStatus === 'RETURNED';
  }

  updateOrderStatus(order: Order) {
    const dialogRef = this.dialog.open(UpdateOrderStatus, {
      data: order
    });
  }

} //MANAGE ORDERS END


@Component({
  selector: 'app-update-order-status',
  templateUrl: './dialog-update-order-status.html',
  styleUrls: ['./manage-orders.component.css']
})
export class UpdateOrderStatus {
  selectedStatus: string;

  constructor(
    private utilService: UtilService,
    private orderService: OrderService,
    public dialogRef: MatDialogRef<UpdateOrderStatus>,
    @Inject(MAT_DIALOG_DATA)
    public order: Order,) { }


  orderStatus = [
    'PROCESSING', 'SHIPPED', 'DELIVERED'];

  updateOrder(order: Order) {
    this.orderService.updateOrder(order, this.selectedStatus);
    this.dialogRef.close();
    this.utilService.showToast('Order updated successfully');
  }

  closeDialog(): void {
    this.dialogRef.close();
    this.utilService.showToast('Order not updated');
  }

} //UPDATE ORDER STATUS END
