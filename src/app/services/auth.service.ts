import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { KeycloakService, KeycloakEventType } from 'keycloak-angular';
import { KeycloakProfile } from 'keycloak-js';
import { UtilService } from './util.service';

import { UserUpdateRequest } from '../interface/user-update-request';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userProfile: KeycloakProfile | null = null;
  roles: string[] = [];
  authenticated = false;
  id: string = '';
  firstName: string = 'User';
  lastName: string = '';
  username: string = '';
  mobile: string = '';
  email: string = '';
  loggedin: boolean = false;

  constructor(
    private keycloak: KeycloakService,
    private http: HttpClient,
    private utilService: UtilService
  ) {
    this.initializeKeycloak();
    this.keycloak.keycloakEvents$.subscribe({
      next(event) {
        if (event.type == KeycloakEventType.OnTokenExpired) {
          keycloak.updateToken(20);
        }
      }
    });
  }

  private initializeKeycloak() {
    this.keycloak.isLoggedIn().then((loggedIn) => {
      if (loggedIn) {
        this.keycloak.getKeycloakInstance().loadUserProfile()
          .then((user: KeycloakProfile) => {
            this.userProfile = user;
            this.loggedin = true;
            this.roles = this.keycloak.getUserRoles();
            this.id = user.id as string;
            this.firstName = user.firstName as string
            this.lastName = this.userProfile?.lastName as string;
            this.email = this.userProfile?.email as string;
            sessionStorage.setItem('id', this.id);
            sessionStorage.setItem('firstName', this.firstName);
            sessionStorage.setItem('lastName', this.lastName);
            sessionStorage.setItem('email', this.email);
            sessionStorage.setItem('token', this.keycloak.getKeycloakInstance().token as string)
            sessionStorage.setItem('isLogin', 'true');
          });
      }
    });
  }

  register() {
    this.keycloak.register({ redirectUri: "http://localhost:4200" });
    this.loggedin = true;
  }

  login() {
    this.keycloak.login({ redirectUri: "http://localhost:4200" });
    this.utilService.goToLink("/");
  }

  logout() {
    sessionStorage.clear();
    this.keycloak.logout();
    this.utilService.showToast("Logout Successful");
    this.utilService.goToLink("/");

  }

  isLoggedIn(): Promise<boolean> {
    return this.keycloak.isLoggedIn();
  }


  isAdmin() {
    return this.keycloak.isUserInRole('admin');
  }

  deleteUserAccount(userId: string) {
    const url = `http://localhost:8081/api/v1/keycloak/users?id=${userId}`;
    sessionStorage.clear();
    this.http.delete(url).subscribe((response: any) => {
      console.log('Account deleted.', response);
      this.utilService.showToast("Account deleted.");
      this.logout();
    });
  }

  updateUserAccount(firstName: string, lastName: string) {
    const url = `http://localhost:8081/api/v1/keycloak/users?id=${this.id}`;
    console.log("id", this.id);
    const request: UserUpdateRequest = {
      firstname: firstName,
      lastname: lastName
    };

    return this.http.put(url, request)
  }

}
