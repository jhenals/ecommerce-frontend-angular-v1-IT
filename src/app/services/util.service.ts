import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor(
    private router: Router,
    private location: Location,
    private snackBar: MatSnackBar
  ) { }

  goToLink(url: string): void {
    this.router.navigateByUrl(url);
  }

  goBack() {
    this.location.back();
  }

  showToast(message: string) {
    console.log(message);
    this.snackBar.open(message, 'Dismiss', {
      duration: 3000,
      panelClass: ['success-snackbar']
    });
  }

  success() {
    console.log('success');
    this.snackBar.open('Your information has been updated', 'Dismiss', {
      duration: 3000,
      panelClass: ['success-snackbar']
    });
    throw new Error('Method not implemented.');
  }

  error(message: string) {
    console.log('error');
    this.snackBar.open(message, 'Dismiss', {
      duration: 3000,
      panelClass: ['error-snackbar']
    });
  }

}
