import { Component, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { OrderService } from 'src/app/services/order.service';

import { Order } from 'src/app/models/Order';
import { OrderDetail } from 'src/app/models/OrderDetail';
import { OrderForm } from 'src/app/models/OrderForm';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  dataSource: OrderDetail[] = []; /* passed from cart component */
  totalPrice: number = 0; /* passed from cart component */


  recipientName: string = '';
  shippingAddress: string = '';
  phoneNumber: string = '';

  shippingInfoControl: any;
  paymentMethodControl: any;

  constructor(
    private formBuilder: FormBuilder,
    private orderService: OrderService) {
  }

  ngOnInit(): void {
    this.dataSource = this.orderService.getOrderDetailList();
    this.totalPrice = this.orderService.getTotalPrice();
    this.initForm();
  }


  initForm(): void {

    this.shippingInfoControl = this.formBuilder.group({
      recipientCtrl: ['', Validators.required],
      addressCtrl: ['', Validators.required],
      phoneCtrl: ['', Validators.required]
    });
    this.paymentMethodControl = this.formBuilder.group({
      cardCtrl: ['', Validators.required],
      expDateCtrl: ['', [Validators.required, this.notExpiredValidator]],
      cardHolderCtrl: ['', Validators.required],
      emptyInputCtrl: ['', Validators.required],
    });
  }

  notExpiredValidator(control: any) {
    const currentDate = new Date();
    const inputDate = new Date(control.value);
    if (inputDate < currentDate) {
      return { expired: true };
    }
    return null;
  }

  checkout() {
    const orderForm = new OrderForm();
    orderForm.recipientName = this.recipientName;
    orderForm.shippingAddress = this.shippingAddress;
    orderForm.phoneNumber = this.phoneNumber;
    orderForm.OrderDetails = this.dataSource;
    orderForm.totalPrice = this.totalPrice;

    this.orderService.checkout(orderForm);
  }
}
