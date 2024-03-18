import { Component } from '@angular/core';

import { AuthService } from 'src/app/services/auth.service';
import { UtilService } from 'src/app/services/util.service';

import { Book } from 'src/app/models/Book';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css']
})
export class TopnavComponent {

  isLogin: boolean = false;
  firstName: string = '';
  lastName: string = '';
  searchInput: string = '';
  filteredList: Book[] = [];
  bookList: Book[] = [];

  cartItemsCount: number = 0;
  hidden: boolean = true;

  constructor(
    private authService: AuthService,
    private utilService: UtilService
  ) {
    this.isLogin = sessionStorage.getItem('isLogin') === 'true' ? true : false;
    this.firstName = sessionStorage.getItem('firstName') as string;
    this.lastName = sessionStorage.getItem('lastName') as string;
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
      return book.title.toLowerCase().includes(event.target.value.toLowerCase()) /*||
       book.author.name.toLowerCase().includes(event.target.value.toLowerCase()); */
    });
    return this.filteredList;
  }

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }


}
