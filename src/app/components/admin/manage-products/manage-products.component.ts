import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, catchError, map, of, startWith } from 'rxjs';

import { ApiResponse } from 'src/app/interface/api-response';
import { BookService } from 'src/app/services/book.service';

import { MatDialog, } from '@angular/material/dialog';
import { DeleteBookDialogComponent } from '../../dialogs/delete-book-dialog/delete-book-dialog.component';
import { UpdateBookDialogComponent } from '../../dialogs/update-book-dialog/update-book-dialog.component';

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
    const dialogRef = this.dialog.open(UpdateBookDialogComponent, {
      data: book
    });
  }

  openDialogDeleteBook(book: Book): void {
    const dialogRef = this.dialog.open(DeleteBookDialogComponent, {
      data: book
    });
  }


}
