import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users/users.service';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import { PageTrack } from '../decorators/analytics/analytics.decorator';
import { UserDialogComponent } from '../user-dialog/user-dialog.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
@PageTrack('Users Page')
export class UsersComponent implements OnInit {
  public users: Array<any>;
  public userRolesList: Array<any>;
  private user: any  = {
    userName: '',
    firstName: '',
    lastName: '',
    role: ''
  };
  constructor(protected usersService: UsersService, public dialog: MatDialog) {
    this.users = this.usersService.getUsersList();
    this.userRolesList = this.usersService.getUserRoles();
  }

  ngOnInit() {
  }

  openUserDialog(): void {
    let dialogRef = this.dialog.open(UserDialogComponent, {
      width: '500px',
      data: {
        userName: this.user.userName,
        firstName: this.user.firstName,
        lastName: this.user.lastName,
        role: this.user.role
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      this.user = result;
      this.user.dateAdded = new Date();
      //this.users.push(this.user);
      this.usersService.addUser(this.user);
    });
  }

}
