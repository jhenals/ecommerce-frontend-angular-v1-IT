import { Customer } from './Customer';

export class Order {
  id: number = 0;
  orderDate: Date = new Date();
  customer: Customer = new Customer();
  total: number = 0;
  orderStatus: string = '';
  recipientName: string = '';
  shippingAddress: string = '';
  contactNumber: string = '';
}
