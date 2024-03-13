import { Book } from "./Book";
import { Author } from "./Author";

export class BookAuthor {
  id: number = 0;
  book: Book = new Book();
  author: Author = new Author();
}
