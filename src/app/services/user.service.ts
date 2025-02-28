import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly baseUrl = "http://localhost:8081/api/v1";

  constructor(
    private httpClient: HttpClient,
  ) {
    this.fetchAllUsersFromD();
  }

  private usersSubject = new BehaviorSubject<User[]>([]);
  users$ = this.usersSubject.asObservable();

  fetchAllUsersFromD() {
    const endpoint = "/keycloak/users";
    const url = `${this.baseUrl}${endpoint}`;
    return this.httpClient.get(`${url}`).subscribe((response: any) => {
      this.usersSubject.next(response as User[]);
    });
  }


} //user service
