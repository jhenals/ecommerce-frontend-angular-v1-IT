import { Author } from './Author';
import { Category } from './Category';

export class Book {
  id: number = 0;
  title: string = '';
  publicationYear: Date = new Date();
  description: string = '';
  price: number = 0;
  coverUrl: string = '';
  author: Author = new Author();
  category: Category = new Category();
}
