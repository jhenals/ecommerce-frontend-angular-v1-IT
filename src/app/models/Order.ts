import { User } from "../interface/user";
import { OrderBook } from "../interface/orderBook";

export class Order {
  id: number;
  user: User;
  orderBooks: OrderBook[];
  orderStatus: string;
  dateCreated: Date = new Date();
  recipientName: string;
  shippingAddress: string;
  phoneNumber: string;
  totalAmount: number;
}
