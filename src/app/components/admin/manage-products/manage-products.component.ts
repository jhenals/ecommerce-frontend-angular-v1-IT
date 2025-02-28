import { Component, OnInit, Inject } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, catchError, map, of, startWith } from 'rxjs';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';

import { ApiResponse } from 'src/app/interface/api-response';
import { BookService } from 'src/app/services/book.service';
import { UtilService } from 'src/app/services/util.service';

import { Page } from 'src/app/interface/page';
import { Book } from 'src/app/interface/book';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css']
})
export class ManageProductsComponent implements OnInit {

  booksState$: Observable<{ appState: string, appData?: ApiResponse<Page>, error?: HttpErrorResponse }>;
  allBooksSubject = new BehaviorSubject<ApiResponse<Page>>(null);
  allProducts: Book[] = [];
  veryLargeNumber = 1000;

  constructor(
    private bookService: BookService,
    public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.booksState$ = this.bookService.getBooks(0, this.veryLargeNumber, 'id', 'ASC').pipe(
      map((response: ApiResponse<Page>) => {
        this.allBooksSubject.next(response);
        return ({ appState: 'APP_LOADED', appData: response });
      }
      ),
      startWith({ appState: 'APP_LOADING' }),
      catchError((error: HttpErrorResponse) =>
        of({ appState: 'APP_ERROR', error: error }))
    );
  }

  goToBookDetails(book: Book) {
    this.bookService.goToBookDetails(book);
  }

  openDialogUpdateBook(book: Book): void {
    const dialogRef = this.dialog.open(UpdateBookDialog, {
      data: book
    });
  }

  openDialogDeleteBook(book: Book): void {
    const dialogRef = this.dialog.open(DeleteBookDialog, {
      data: book
    });
  }
} //MANAGE PRODUCTS END


@Component({
  selector: 'app-delete-book-dialog',
  templateUrl: './dialog-delete-book.component.html',
  styleUrls: ['./manage-products.component.css']
})
export class DeleteBookDialog {

  constructor(
    private bookService: BookService,
    private utilService: UtilService,
    public dialogRef: MatDialogRef<DeleteBookDialog>,
    @Inject(MAT_DIALOG_DATA) public data: Book,
  ) { }

  deleteBook(book: Book) {
    this.bookService.deleteBook(book);
    this.dialogRef.close();
    this.utilService.showToast('Book deleted successfully');
  }

  closeDialog(): void {
    this.dialogRef.close();
    this.utilService.showToast('Book not deleted');
  }

} //DELETE BOOK DIALOG END



@Component({
  selector: 'app-update-book-dialog',
  templateUrl: './dialog-update-book.component.html',
  styleUrls: ['./manage-products.component.css']
})
export class UpdateBookDialog {
  updateBookForm!: FormGroup;
  originalBook: Book;
  infoChanged: boolean = false;

  book: Book | any;
  newBook: Book | any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Book,
    public dialogRef: MatDialogRef<UpdateBookDialog>,
    private bookService: BookService,
    private formBuilder: FormBuilder,
    private utils: UtilService
  ) {
    this.book = data;
  }

  ngOnInit(): void {
    this.updateBookForm = this.formBuilder.group({
      id: this.book.id,
      title: this.book.title,
      price: this.book.price,
      description: this.book.description,
      bookCoverUrl: this.book.coverUrl,
      dataPubblicazione: this.book.publicationDate,
      publisher: this.book.publisher,
      discount: this.book.discount ? this.book.discount : 0,
      quantity: this.book.quantity ? this.book.quantity : 0,
      dateBookAdded: this.book.dateBookAdded,
    });

    this.originalBook = { ...this.book };

    this.updateBookForm.valueChanges.subscribe(updatedValues => {
      this.newBook = { ...this.originalBook, ...updatedValues };
    });
  }

  onInputChange(): void {
    this.infoChanged = true;
  }

  onSubmit() {
    this.bookService.updateBook(this.newBook as Book);
    this.dialogRef.close();
  }

  onNoClick(): void {
    this.dialogRef.close();
    this.utils.showToast('Book not updated');
  }

} //UPDATE BOOK DIALOG END
