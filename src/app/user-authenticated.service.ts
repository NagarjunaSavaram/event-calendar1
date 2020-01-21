import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAuthenticatedService {

  userAuthenticated: boolean = true;

  constructor() { }

  updateAuthentication(isAuthenticated: boolean) {
    this.userAuthenticated = isAuthenticated
  }

}
