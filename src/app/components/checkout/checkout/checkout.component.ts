import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Order } from 'src/app/models/Order';
import { OrderDetail } from 'src/app/models/OrderDetail';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  dataSource: OrderDetail[] = [];
  totalPrice: number = 0;

  recipientName: string = '';
  shippingAddress: string = '';
  phoneNumber: string = '';

  constructor(private _formBuilder: FormBuilder) {
  }
  shippingInfoControl = this._formBuilder.group({
    recipientCtrl: ['', Validators.required],
    addressCtrl: ['', Validators.required],
    phoneCtrl: ['', Validators.required]
  });
  paymentMethodControl = this._formBuilder.group({
    cardCtrl: ['', Validators.required],
    expDateCtrl: ['', [Validators.required, this.notExpiredValidator]],
    cardHolderCtrl: ['', Validators.required],
    emptyInputCtrl: ['', Validators.required],
  });
  notExpiredValidator(control: any) {
    const currentDate = new Date();
    const inputDate = new Date(control.value);
    if (inputDate < currentDate) {
      return { expired: true };
    }
    return null;
  }

  checkout() {
    console.log('checkout');
  }
}
