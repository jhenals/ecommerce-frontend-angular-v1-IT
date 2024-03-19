import { Component } from '@angular/core';
import { Subscription } from 'rxjs';

import { AuthService } from 'src/app/services/auth.service';
import { UtilService } from 'src/app/services/util.service';
import { BookService } from 'src/app/services/book.service';

import { Book } from 'src/app/models/Book';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css']
})
export class TopnavComponent {

  searchInput: string = '';
  filteredList: Book[] = [];
  bookList: Book[] = [];


  isLogin: boolean = false;
  firstName: string = '';
  lastName: string = '';

  cartItemsCount: number = 0;
  hidden: boolean = true;

  constructor(
    private authService: AuthService,
    private bookService: BookService,
    private utilService: UtilService
  ) {
    this.isLogin = sessionStorage.getItem('isLogin') === 'true' ? true : false;
    this.firstName = sessionStorage.getItem('firstName') as string;
    this.lastName = sessionStorage.getItem('lastName') as string;
    this.bookService.getBooks().subscribe((response) => {
      this.bookList = response.data.page.content;
    });
  }


  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }

  goToLink(url: string) {
    this.utilService.goToLink(url);
  }

  goToAdminDashboard() {
    throw new Error('Method not implemented.');
  }



  isAdmin() {
    return false;
  }
  goToBookDetails(book: Book) {
    this.bookService.goToBookDetails(book);
    this.searchInput = '';
  }


  fetchBooks(event: any) {
    if (event.target.value === '') {
      return this.filteredList = [];
    }
    this.filteredList = this.bookList.filter((book) => {
      return book.title.toLowerCase().includes(event.target.value.toLowerCase()) ||
        book.authors.find.name.toLowerCase().includes(event.target.value.toLowerCase());
    });
    return this.filteredList;
  }

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }



}
