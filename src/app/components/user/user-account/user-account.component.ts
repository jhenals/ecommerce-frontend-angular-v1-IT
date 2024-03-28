import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { KeycloakProfile } from 'keycloak-js';
import { KeycloakService } from 'keycloak-angular';

import { UtilService } from 'src/app/services/util.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent {
  isLogin: boolean = false;
  firstName: string = '';
  lastName: string = '';
  address: string = 'Not set';
  mobile: string = 'Not set';
  email: string = '';
  constructor(
    public dialog: MatDialog,
    private keycloakService: KeycloakService,
    private authService: AuthService,
    private utilService: UtilService,

  ) {
    this.authService.isLoggedIn().then((loggedIn) => {
      if (loggedIn) {
        this.isLogin = true;
        this.keycloakService.getKeycloakInstance().loadUserProfile()
          .then((user: KeycloakProfile) => {
            this.firstName = user.firstName as string;
            this.lastName = user.lastName as string;
            this.email = user.email as string;
          })
      }
    }).catch((error) => {
      console.log('Error in checking login status:', error);
    });
  }


  openDeleteAccountDialog(): void {
    const dialogRef = this.dialog.open(DeleteAccountDialog, {
      width: '350px',
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteUserAccount();
        console.log('Account deleted.', result);
        this.utilService.goToLink("/");
      }
    });
  }

  deleteUserAccount() {
    const userId = sessionStorage.getItem('id');
    sessionStorage.clear();
    this.authService.deleteUserAccount(userId as string);
  }

  openUpdateAccountDialog(): void {
    const dialogRef = this.dialog.open(UpdateAccountDialog, {
      width: '350px',
      disableClose: true
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
} //DeleteAccountDialog


export interface UserDialogData {
  firstName: string;
  lastName: string;
}


@Component({
  selector: 'update-account-dialog',
  templateUrl: 'update-account-dialog.html',
  styleUrls: ['./user-account.component.css']
})
export class UpdateAccountDialog {
  firstname: string = sessionStorage.getItem('firstName') as string;
  lastname: string = sessionStorage.getItem('lastName') as string;

  constructor(
    public dialogRef: MatDialogRef<UpdateAccountDialog>,
    private authService: AuthService,
    private utilService: UtilService,
    @Inject(MAT_DIALOG_DATA)
    public data: UserDialogData
  ) {
    this.firstname = sessionStorage.getItem('firstName') as string;
    this.lastname = sessionStorage.getItem('lastName') as string;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onUpdateAccountClick() {
    this.authService.updateUserAccount(this.firstname, this.lastname).subscribe((response: any) => {
      this.utilService.showToast('Account updated successfully.');
    })
    this.dialogRef.close();
  }

} //UpdateAccountDialog
