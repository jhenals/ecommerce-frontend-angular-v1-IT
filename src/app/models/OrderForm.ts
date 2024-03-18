import { OrderDetail } from "./OrderDetail";

export class OrderForm {
  recipientName: String = '';
  shippingAddress: String = '';
  OrderDetails: OrderDetail[] = [];
}
