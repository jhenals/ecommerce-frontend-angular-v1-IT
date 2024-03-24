import { OrderBook } from './OrderBook';
import { User } from './User';

export class Order {
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
