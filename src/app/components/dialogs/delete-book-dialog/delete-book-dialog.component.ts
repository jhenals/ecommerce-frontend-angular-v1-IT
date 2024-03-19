import { Component } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { Book } from 'src/app/interface/books';
import { BookService } from 'src/app/services/book.service';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-delete-book-dialog',
  templateUrl: './delete-book-dialog.component.html',
  styleUrls: ['./delete-book-dialog.component.css']
})
export class DeleteBookDialogComponent {

  constructor(
    private bookService: BookService,
    private utilService: UtilService,
    public dialogRef: MatDialogRef<DeleteBookDialogComponent>,
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

}
