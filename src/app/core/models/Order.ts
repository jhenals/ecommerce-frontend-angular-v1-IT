import { Customer } from "./Customer";

export class Order {
  id: number = 0;
  customer: Customer = new Customer();
  orderDate: Date = new Date();
  totalAmount: number = 0;
  status: string = '';
}
