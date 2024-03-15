import { Category } from "./Category";

export class Book {
  id: number = 0;
  title: string = '';
  coverUrl: string = '';
  price: number = 0;
  discount: number = 0;
  description: string = '';
  publicationDate: Date = new Date();
  category: Category = new Category();
}
