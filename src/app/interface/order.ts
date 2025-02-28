import { User } from "./user";
import { OrderBook } from "./orderBook";

export interface Order {
  id: number;
  user: User;
  orderBooks: OrderBook[];
  orderStatus: string;
  dateCreated: Date;
  recipientName: string;
  shippingAddress: string;
  phoneNumber: string;
  totalAmount: number;

}
