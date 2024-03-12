import { Component } from '@angular/core';

import { AuthService } from 'src/app/services/auth.service';
import { UtilService } from 'src/app/services/util.service';

import { Book } from 'src/app/models/Book';
import { BookAuthor } from 'src/app/models/BookAuthor';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css']
})
export class TopnavComponent {

  isLogin: any;
  firstName: any;
  lastName: any;
  searchInput: string = '';
  filteredList: BookAuthor[] = [];
  bookList: BookAuthor[] = [];

  cartItemsCount: number = 0;
  hidden: boolean = true;

  constructor(
    private authService: AuthService,
    private utilService: UtilService
  ) {
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
    throw new Error('Method not implemented.');
  }


  fetchBooks(event: any) {
    if (event.target.value === '') {
      return this.filteredList = [];
    }
    this.filteredList = this.bookList.filter((book) => {
      return book.book.title.toLowerCase().includes(event.target.value.toLowerCase()) ||
        book.author.name.toLowerCase().includes(event.target.value.toLowerCase());
    });
    return this.filteredList;
  }

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }


}
