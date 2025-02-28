import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UtilService } from 'src/app/services/util.service';
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {
  selectedLink: string = 'manage-products';
  constructor(
    private utils: UtilService,
    private router: Router
  ) { }

  selectOption(string: string) {
    this.selectedLink = string;
  }
}
