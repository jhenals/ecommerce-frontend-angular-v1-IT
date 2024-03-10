import { Book } from "./Book";
import { Order } from "./Order";

export class OrderDetail {
  order: Order = new Order();
  book: Book = new Book();
  quantity: number = 0;
  finalPrice: number = 0;
}
