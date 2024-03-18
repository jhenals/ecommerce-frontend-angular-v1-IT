import { Author } from './author';
import { Category } from './category';
export interface Book {
  id: number;
  title: string;
  coverUrl: string;
  price: number;
  discount: number;
  finalPrice: number;
  description: string;
  publicationDate: Date;
  category: Category;
  authors: Author[];
}
