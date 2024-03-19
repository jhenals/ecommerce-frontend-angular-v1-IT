import { OrderDetail } from "./OrderDetail";

export class OrderForm {
  recipientName: String = '';
  shippingAddress: String = '';
  phoneNumber: String = '';
  OrderDetails: OrderDetail[] = [];
  totalPrice: number = 0;
}
