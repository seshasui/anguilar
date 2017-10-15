
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatFormFieldModule, MatInputModule, MatCardModule } from '@angular/material';
import { NgModule, ErrorHandler } from '@angular/core';

import { AppComponent } from './app.component';
import { routes } from './routes.config';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth/auth.guard';
import { AuthService } from './services/auth/auth.service';
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';
import { AnalyticsService } from './services/analytics/analytics.service';
import { GlobalErrorHandler } from './global-error-handler';
import { LogService } from './services/log/log.service';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    HomeComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    FormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatCardModule
  ],
  providers: [
    AuthGuard,
    AuthService,
    AnalyticsService,
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler
    },
    LogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
