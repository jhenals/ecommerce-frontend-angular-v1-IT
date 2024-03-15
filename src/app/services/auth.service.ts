import { Injectable } from '@angular/core';
import { KeycloakService, KeycloakEventType } from 'keycloak-angular';
import { KeycloakProfile } from 'keycloak-js';
import { from, Observable, } from 'rxjs';
import { UtilService } from './util.service';

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
    //save the id in User table in backend
  }

  login() {
    this.keycloak.login({ redirectUri: "http://localhost:4200" });
  }

  logout() {
    sessionStorage.clear();
    this.keycloak.logout("http://localhost:4200");
  }

  isAdmin() {
    return this.keycloak.isUserInRole('admin');
  }
}
