import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { routes } from './routes.config';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth/auth.guard';
import { AuthService } from './services/auth/auth.service';
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    HomeComponent,
    AuthComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    FormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule
  ],
  providers: [
    AuthGuard,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
