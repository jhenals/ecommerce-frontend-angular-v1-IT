import { Component } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';

import { Order } from 'src/app/models/Order';
import { OrderService } from 'src/app/services/order.service';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-update-order-status',
  templateUrl: './update-order-status.component.html',
  styleUrls: ['./update-order-status.component.css']
})
export class UpdateOrderStatusComponent {
  selectedStatus: string;

  constructor(
    private utilService: UtilService,
    private orderService: OrderService,
    public dialogRef: MatDialogRef<UpdateOrderStatusComponent>,
    @Inject(MAT_DIALOG_DATA) public order: Order,) { }


  orderStatus = [
    'PROCESSING', 'SHIPPED', 'DELIVERED', 'CANCELED'];

  updateOrder(order: Order) {
    //order.orderStatus = this.selectedStatus;
    this.orderService.updateOrder(order, this.selectedStatus);
    this.dialogRef.close();
    this.utilService.showToast('Order updated successfully');
  }

  closeDialog(): void {
    this.dialogRef.close();
    this.utilService.showToast('Order not updated');
  }


}
