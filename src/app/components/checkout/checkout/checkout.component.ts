import { Component, Input } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

import { OrderService } from 'src/app/services/order.service';
import { UtilService } from 'src/app/services/util.service';

import { Order } from 'src/app/interface/order';
import { OrderForm } from 'src/app/models/OrderForm';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  dataSource: any[] = []; /* passed from cart component */
  totalPrice: number = 0; /* passed from cart component */


  recipientName: string = '';
  shippingAddress: string = '';
  phoneNumber: string = '';

  shippingInfoControl: any;
  paymentMethodControl: any;

  constructor(
    private utilService: UtilService,
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

  notExpiredValidator(control: FormControl) {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;

    const inputMonth = control.value.slice(0, 2);
    const inputYear = control.value.slice(3, 7);

    const year = parseInt(inputYear, 10);
    const month = parseInt(inputMonth, 10);

    if (year > currentYear || (year === currentYear && month >= currentMonth)) {
      return null;
    } else {
      return { expired: true };
    }
  }

  checkout() {
    const orderForm = new OrderForm();
    orderForm.recipientName = this.recipientName;
    orderForm.shippingAddress = this.shippingAddress;
    orderForm.phoneNumber = this.phoneNumber;

    this.orderService.checkout(orderForm);
  }

  goToLink(url: string) {
    this.utilService.goToLink(url);
  }

}
