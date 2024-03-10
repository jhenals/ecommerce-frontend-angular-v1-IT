import { Injectable } from '@angular/core';
import { KeycloakService, KeycloakEventType } from 'keycloak-angular';
import { KeycloakProfile } from 'keycloak-js';
import { from, Observable, } from 'rxjs';

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
    // this.initializeKeycloak();

  }



  /*   private initializeKeycloak() {
      this.keycloak.isLoggedIn().then((loggedIn: boolean) => {
        this.loggedin = loggedIn;
        if (loggedIn) {
          this.authenticated = loggedIn;
          //this.loadUserProfile();
        }
      });
      this.keycloak.keycloakEvents$.subscribe(event => {
        if (event.type === KeycloakEventType.OnAuthSuccess) {
          this.authenticated = true;
          //this.loadUserProfile();
        }
        if (event.type === KeycloakEventType.OnAuthLogout) {
          this.authenticated = false;
          this.userProfile = null;
        }
      }
      );
    }; */

  register() {
    this.keycloak.register({ redirectUri: "http://localhost:4200" });
    //save the id in User table in backend
  }

  login() {
    this.keycloak.login({ redirectUri: "http://localhost:4200" });
  }

  logout() {
    localStorage.clear();
    this.keycloak.logout("http://localhost:4200");
    this.loggedin = false;
  }
}
