import { Author } from "./Author";
import { Category } from "./Category";

export class Book {
  id: number;
  title: string;
  coverUrl: string;
  price: number;
  discount: number;
  finalPrice: number;
  description: string;
  publisher: string;
  publicationDate: Date;
  category: Category;
  authors: Author[];
}
