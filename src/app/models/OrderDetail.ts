import { Order } from "./Order";
import { BookAuthor } from "./BookAuthor";
import { Book } from "./Book";

export class OrderDetail {
  order: Order = new Order();
  book: BookAuthor = new BookAuthor();
  quantity: number = 0;
  price: number = 0;
}
