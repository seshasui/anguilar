import { Routes } from '@angular/router';
import { CanActivate } from '@angular/router';
// guards go here
import { AuthGuard } from './guards/auth/auth.guard';

// components go here
import { LoginComponent } from './login/login.component';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';

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
            }
        ]
    }

];
