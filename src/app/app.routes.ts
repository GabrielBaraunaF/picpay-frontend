import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HomeComponent } from './pages/home/home.component';
import { authenticationGuard } from './_guards/authentication.guard';
import { TransactionHistoryComponent } from './pages/transaction-history/transaction-history.component';

export const routes: Routes = [
    {
        path: "",
        component: LoginComponent
    },
    {
        path: "signup",
        component: SignupComponent
    },
    {
        path: "home",
        component: HomeComponent,
        canActivate:[authenticationGuard]
    },
    {
        path: "history",
        component: TransactionHistoryComponent,
        canActivate:[authenticationGuard]  
    }
];
