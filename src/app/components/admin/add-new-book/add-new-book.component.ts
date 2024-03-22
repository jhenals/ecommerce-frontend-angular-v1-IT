import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { Category } from 'src/app/interface/category';
import { Book } from 'src/app/interface/book';
import { BookService } from 'src/app/services/book.service';
@Component({
  selector: 'app-add-new-book',
  templateUrl: './add-new-book.component.html',
  styleUrls: ['./add-new-book.component.css']
})
export class AddNewBookComponent implements OnInit {
  categories: Category[] = [];
  addNewBookForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private bookService: BookService) { }

  ngOnInit() {
    this.getAllCategories();
    this.addNewBookForm = this.formBuilder.group({
      title: '',
      author: '',
      price: 0,
      description: '',
      categoryId: 0,
      bookCoverUrl: '',
      dataPubblicazione: new Date(),
      editor: '',
      discount: 0,
      dateBookAdded: new Date(),
      quantity: 0,
    });
  }

  private getAllCategories() {
    /*   this.bookService.getAllCategories().subscribe((categories) => {
        this.categories = categories;
      }); */
  }

  onSubmit() {
    this.bookService.addNewBook(this.addNewBookForm.value as Book);
  }
}
