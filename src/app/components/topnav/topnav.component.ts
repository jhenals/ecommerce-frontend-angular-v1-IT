import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { KeycloakService } from 'keycloak-angular';
import { KeycloakProfile } from 'keycloak-js';
import { AuthService } from 'src/app/services/auth.service';
import { UtilService } from 'src/app/services/util.service';
import { BookService } from 'src/app/services/book.service';

import { Book } from 'src/app/interface/book';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css']
})
export class TopnavComponent {

  userProfile: KeycloakProfile | null = null;
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
    private keycloakService: KeycloakService,
    private bookService: BookService,
    private utilService: UtilService
  ) {
    this.authService.isLoggedIn().then((loggedIn) => {
      if (loggedIn) {
        this.isLogin = true;
        this.keycloakService.getKeycloakInstance().loadUserProfile()
          .then((user: KeycloakProfile) => {
            this.userProfile = user;
            this.firstName = user.firstName as string;
          })
        this.bookService.getBooks().subscribe((response) => {
          this.bookList = response.data.page.content;
        });
      }
    }).catch((error) => {
      console.log('Error in checking login status:', error);
    }
    );
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
