import { Order } from "./Order";
import { BookAuthor } from "./BookAuthor";
import { Book } from "./Book";

export class OrderDetail {
  order: Order = new Order();
  book: Book = new Book();
  quantity: number = 0;
  price: number = 0;
}
