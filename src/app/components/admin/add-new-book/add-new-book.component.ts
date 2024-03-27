import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl, AbstractControl } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


import { Author } from 'src/app/models/Author';
import { Book } from 'src/app/interface/book';
import { BookService } from 'src/app/services/book.service';
import { MaterialModule } from 'src/app/core/material/material.module';
import { Category } from 'src/app/models/Category';


export interface DialogData {
  author: string;
}

@Component({
  selector: 'app-add-new-book',
  templateUrl: './add-new-book.component.html',
  styleUrls: ['./add-new-book.component.css']
})
export class AddNewBookComponent implements OnInit {
  selectedAuthors: number[] = [];

  author: string;
  categories: Category[] = [];
  authors: Author[] = [];
  addNewBookForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private bookService: BookService,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.getAllCategories();
    this.getAllAuthorsInDB();
    this.addNewBookForm = this.formBuilder.group({
      title: '',
      price: 0,
      description: '',
      category: new Category().id,
      coverUrl: '',
      publicationDate: new Date(),
      publisher: '',
      discount: 0,
      quantity: 0,
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddNewAuthorDialog, {
      width: '350px',
      data: { author: this.author }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('A new Author has been added in the database: ', result);
      this.author = result;
    });
  }

  private getAllCategories() {
    this.bookService.getAllCategories().subscribe((categories) => {
      this.categories = categories;
    });
  }

  private getAllAuthorsInDB() {
    this.bookService.getAllAuthors().subscribe((authors) => {
      this.authors = authors;
    });
  }

  onAuthorCheckboxChange(e: any) {
    const authorIds: FormArray = this.addNewBookForm.get('authors') as FormArray;

    if (e.target.checked) {
      authorIds.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      authorIds.controls.forEach((item: AbstractControl) => {
        if (item.value == e.target.value) {
          authorIds.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  updateBookAuthors() {
    const authorIdsArray: FormArray = this.addNewBookForm.get('authors') as FormArray;
    authorIdsArray.clear();

    this.selectedAuthors.forEach(authorId => {
      authorIdsArray.push(new FormControl(authorId));
    });
  }

  handleCheckboxChange(author: Author, isChecked: boolean) {
    if (isChecked) {
      this.selectedAuthors.push(author.id);
    } else {
      const index = this.selectedAuthors.indexOf(author.id);
      if (index > -1) {
        this.selectedAuthors.splice(index, 1);
      }
    }
  }

  onSubmit() {
    console.log(this.addNewBookForm.value as Book)
    console.log("authors:", this.selectedAuthors)
    this.bookService.addNewBook(this.addNewBookForm.value as Book, this.selectedAuthors, this.addNewBookForm.value.category);
  }

} //AddNewBookComponent


@Component({
  selector: 'add-new-author-dialog',
  templateUrl: 'add-new-author-dialog.html',
  styleUrls: ['./add-new-book.component.css']
})
export class AddNewAuthorDialog {

  constructor(
    private bookService: BookService,
    public dialogRef: MatDialogRef<AddNewAuthorDialog>,
    @Inject(MAT_DIALOG_DATA)
    public data: DialogData
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  submitNewAuthor(name: string) {
    this.bookService.addNewAuthor(name);
    this.dialogRef.close();
  }
} //AddNewAuthorDialog
