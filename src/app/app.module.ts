import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatSidenavModule,
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatGridListModule,
  MatTabsModule,
  MatToolbarModule,
  MatIconModule
} from '@angular/material';
import { MatTableModule, MatDialogModule} from '@angular/material';
import {NgModule, ErrorHandler} from '@angular/core';

import {AppComponent} from './app.component';
import {routes} from './routes.config';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './guards/auth/auth.guard';
import {AuthService} from './services/auth/auth.service';
import {HomeComponent} from './home/home.component';
import {AuthComponent} from './auth/auth.component';
import {AnalyticsService} from './services/analytics/analytics.service';
import {GlobalErrorHandler} from './global-error-handler';
import {LogService} from './services/log/log.service';
import {WebsocketService} from './services/websocket/websocket.service';
import {LoanListComponent} from './loan-list/loan-list.component';
import {LoanDetailComponent} from './loan-detail/loan-detail.component';
import {LoanService} from './services/loan/loan.service';
import {UsersService} from './services/users/users.service';
import { UsersComponent } from './users/users.component';
import { UserDialogComponent } from './user-dialog/user-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    HomeComponent,
    AuthComponent,
    LoanListComponent,
    LoanDetailComponent,
    UsersComponent,
    UserDialogComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    FormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatCardModule,
    MatDialogModule,
    MatSidenavModule,
    MatGridListModule,
    MatTabsModule,
    MatToolbarModule,
    MatIconModule
  ],
  providers: [
    AuthGuard,
    AuthService,
    AnalyticsService,
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler
    },
    LogService,
    WebsocketService,
    LoanService,
    UsersService
  ],
  entryComponents: [UserDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
