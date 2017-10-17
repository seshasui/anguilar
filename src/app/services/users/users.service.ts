import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UsersService {
  private usersList: Array<any> = [
    {
      userName: 'completeAdmin',
      firstName: 'First Name',
      lastName: 'Last Name',
      roles: 'ADMIN',
      dateAdded: '03/23/2017'
    },
    {
      userName: 'manager',
      firstName: 'Manager First Name',
      lastName: 'Manager Last Name',
      roles: 'MANAGER',
      dateAdded: '03/28/2017'
    },
    {
      userName: 'readOnly',
      firstName: 'Read Only First Name',
      lastName: 'Read Only Last Name',
      roles: 'READ_ONLY',
      dateAdded: '05/14/2017'
    }
  ];
  private userRoles: Array<any> = [
    {
      label: 'Read Only',
      value: 'READ_ONLY'
    },
    {
      label: 'Manager',
      value: 'MANAGER'
    },
    {
      label: 'Administrator',
      value: 'ADMIN'
    }
  ];
  constructor() { }



  getUsersList() {
    return this.usersList;
  }

  addUser(user) {
    this.usersList.push(user);
    return this.usersList;
  }

  getUserRoles() {
    return this.userRoles;

  }

}
