import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BusDetailComponent } from './bus-detail/bus-detail.component';
import { PaymentComponent } from './payment/payment.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AppShellComponent } from './app-shell/app-shell.component';

export const routes: Routes = [
    { path:'shell',component:AppShellComponent},
    { path: '', redirectTo: 'landing', pathMatch: 'full' },
    { path: 'landing', component: LandingPageComponent },
    { path: 'login', component: LoginPageComponent },
    { path: 'signup', component: SignupPageComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'bus-detail/:busNo', component: BusDetailComponent },
    { path: 'payment', component: PaymentComponent },
    { path: 'admin-login', component: AdminLoginComponent },
    { path: 'admin-dashboard', component: AdminDashboardComponent },
];
