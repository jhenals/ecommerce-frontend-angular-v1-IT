import { Book } from "./books";

export interface Author {
  id: number;
  name: string;
  Books: Book[];
}
