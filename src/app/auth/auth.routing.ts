import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegistrationComponent } from './registration/registration.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

export const AuthRoutes: Routes = [
  { path: '', redirectTo: 'logout', pathMatch: 'full'},
  { path: 'login',  component: LoginComponent},
  { path: 'logout',  component: LogoutComponent},
  { path: 'register',  component: RegistrationComponent},
  { path: 'forgot-password',  component: ForgotPasswordComponent},

];
