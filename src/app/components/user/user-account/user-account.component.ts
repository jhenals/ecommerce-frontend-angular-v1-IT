import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


import { KeycloakService } from 'keycloak-angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent {
  firstName: string = '';
  lastName: string = '';
  address: string = 'Not set';
  mobile: string = 'Not set';
  email: string = '';
  constructor(
    public dialog: MatDialog,
    private authService: AuthService,
  ) {
    this.firstName = sessionStorage.getItem('firstName') as string;
    this.lastName = sessionStorage.getItem('lastName') as string;
    this.email = sessionStorage.getItem('email') as string;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DeleteAccountDialog, {
      width: '350px',
      disableClose: true

    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteUserAccount();
        console.log('Account deleted.', result);
      }
    });
  }

  deleteUserAccount() {
    const userId = sessionStorage.getItem('id');
    this.authService.deleteUserAccount(userId as string).subscribe((response: any) => {
      console.log('Account deleted.', response);
      this.authService.logout();
    });
  }

}



  @Component({
    selector: 'delete-account-dialog',
    templateUrl: 'delete-account-dialog.html',
    styleUrls: ['./user-account.component.css']
  })
  export class DeleteAccountDialog {

  constructor(
    public dialogRef: MatDialogRef<DeleteAccountDialog>,
  ) { }

  /*   onNoClick(): void {
      this.dialogRef.close();
    } */

} //DeleteAccountDialog
