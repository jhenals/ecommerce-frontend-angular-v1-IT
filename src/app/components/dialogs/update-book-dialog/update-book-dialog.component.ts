import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, NgForm, FormGroup } from '@angular/forms';

import { Book } from 'src/app/interface/book';
import { Author } from 'src/app/interface/author';
import { Category } from 'src/app/interface/category';
import { UtilService } from 'src/app/services/util.service';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-update-book-dialog',
  templateUrl: './update-book-dialog.component.html',
  styleUrls: ['./update-book-dialog.component.css']
})
export class UpdateBookDialogComponent {
  updateBookForm!: FormGroup;
  infoChanged: boolean = false;

  book: Book | any;
  newBook: Book | any;

  options = [
    { label: 'Dog', value: 'dog' },
    { label: 'Cat', value: 'cat' },
    { label: 'Hamster', value: 'hamster' },
    { label: 'Parrot', value: 'parrot' },
    { label: 'Spider', value: 'spider' },
    { label: 'Goldfish', value: 'goldfish' }
  ];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Book,
    public dialogRef: MatDialogRef<UpdateBookDialogComponent>,
    private bookService: BookService,
    private formBuilder: FormBuilder,
    private utils: UtilService
  ) {
    this.book = data;
  }

  ngOnInit(): void { //TODO:
    this.updateBookForm = this.formBuilder.group({
      title: this.book.title,
      authors: this.book.authors.map((author: Author) => author.name).join(', '),
      price: this.book.price,
      description: this.book.description,
      categoryId: this.book.category.name,
      bookCoverUrl: this.book.coverUrl,
      dataPubblicazione: this.book.publicationDate,
      editor: this.book.editor,
      discount: this.book.discount ? this.book.discount : 0,
      quantity: this.book.quantity ? this.book.quantity : 0,
      dateBookAdded: this.book.dateBookAdded,
    });

    this.updateBookForm.valueChanges.subscribe(() => {
      const updatedValues = this.updateBookForm.getRawValue();
      this.newBook = updatedValues;
    }
    );
  }

  onInputChange(): void {
    this.infoChanged = true;
  }

  onSubmit() {
    this.bookService.updateBook(this.newBook);
    this.dialogRef.close();
  }

  onNoClick(): void {
    this.dialogRef.close();
    this.utils.showToast('Book not updated');
  }




}
