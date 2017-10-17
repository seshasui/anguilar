import { Routes } from '@angular/router';
import { CanActivate } from '@angular/router';
// guards go here
import { AuthGuard } from './guards/auth/auth.guard';

// components go here
import { LoginComponent } from './login/login.component';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { LoanListComponent } from './loan-list/loan-list.component';
import { LoanDetailComponent } from './loan-detail/loan-detail.component';
import { UsersComponent } from './users/users.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/authorized/home',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'authorized',
        component: AuthComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: '',
                redirectTo: '/home',
                pathMatch: 'full'
            },
            {
                path: 'home',
                component: HomeComponent,
                canActivate: [AuthGuard]
            },
            {
                path: 'loans/:id',
                component: LoanDetailComponent,
                canActivate: [AuthGuard]
            },
            {
                path: 'loans',
                component: LoanListComponent,
                canActivate: [AuthGuard]
            },
            {
                path: 'users',
                component: UsersComponent,
                canActivate: [AuthGuard]
            }
        ]
    }

];
