import { Category } from "./Category";
import { Author } from "./Author";

export class Book {
  id: number = 0;
  title: string = '';
  coverUrl: string = '';
  price: number = 0;
  discount: number = 0;
  finalPrice: number = 0;
  description: string = '';
  publicationDate: Date = new Date();
  category: Category = new Category();
  authors: Author[] = [];
}
