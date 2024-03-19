import { Order } from "./Order";
import { Book } from "./Book";

export class OrderDetail {
  order: Order = new Order();
  book: Book = new Book();
  quantity: number = 0;
  finalPrice: number = 0;
}
