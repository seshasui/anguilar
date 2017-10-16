import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';
import { PageTrack } from '../decorators/analytics/analytics.decorator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
@PageTrack('login')
export class LoginComponent implements OnInit {
  public user: any = {};
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    // reset login status
    this.authService.logout();
  }

  public login = () => {
    let result = this.authService.authorizeUser(this.user);
    if (result) {
      this.router.navigate(['/authorized/home']);
    }else {
      return;
    }
  }

}
