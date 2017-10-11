import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  private user: any;
  constructor() { }

  isUserLoggedIn() {
    if (this.user) {
      return true;
    }
    return false;
  }

  authorizeUser(userCredentials: any) {
    if (userCredentials.userName === 'admin' && userCredentials.password === 'password') {
      this.user = {
        name: 'Administrator',
        roles: ['admin']
      };
      return this.user;
    }
    return;
  }

  logout() {
    this.user = null;
    return;
  }

  setLoggedInUser(user) {
    this.user = user;
  }

}
