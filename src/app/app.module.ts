import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { ComponentsModule } from './components/components.module';
import { MaterialModule } from './material/material.module';


function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: {
        url: 'http://localhost:8080/',
        realm: 'ecommerce-onlinebookstore',
        clientId: 'ecommerce-frontend',
      },
      initOptions: {
        onLoad: 'check-sso',  // KC will check if user has an existing SSO session.  If a session is found, Keycloak will attempt to authenticate the user without prompting for credentials again. If no session is found, the user will be treated as unauthenticated, and they will need to log in manually.
        flow: "standard"          // allowed values 'standard', 'implicit', 'hybrid';
      },
      enableBearerInterceptor: true,
      bearerPrefix: 'Bearer',
    });
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ComponentsModule,
    MaterialModule,

  ],
  providers: [
    /* {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService]
    } */
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
