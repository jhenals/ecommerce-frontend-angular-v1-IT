import { Component } from '@angular/core';

import { Book } from '../../core/models/Book';

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
  filteredList: Book[] = [];

  cartItemsCount: number = 0;
  hidden: boolean = true;

  login() {
    throw new Error('Method not implemented.');
  }
  goToAdminDashboard() {
    throw new Error('Method not implemented.');
  }

  goToLink(arg0: string) {
    throw new Error('Method not implemented.');
  }
  logout() {
    throw new Error('Method not implemented.');
  }

  isAdmin() {
    return false;
  }
  goToBookDetails(book: Book) {
    throw new Error('Method not implemented.');
  }
  fetchBooks($event: KeyboardEvent) {
    throw new Error('Method not implemented.');
  }

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }


}
