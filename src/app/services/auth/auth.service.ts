import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  private user: any;
  constructor() { }

  isUserLoggedIn() {
    if (localStorage.getItem('loggedUser')) {
      // logged in so return true
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

      // local storage to avoid re-login on local refresh
      localStorage.setItem('loggedUser', JSON.stringify(this.user));
      return this.user;
    }
    return;
  }

  logout() {
    // remove the user on logout
    localStorage.removeItem('loggedUser');
    return;
  }

  setLoggedInUser(user) {
    this.user = user;
  }

  getUser() {
    return this.user ? this.user : {};
  }

}
