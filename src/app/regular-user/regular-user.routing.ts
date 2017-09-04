import { Routes } from '@angular/router';
import { RestrictedComponent } from './restricted/restricted.component';
import { LoginGuard } from '../auth/guards/login/login.guard';

export const RegularUserRouter: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' , canActivate: [LoginGuard]},
  { path: 'dashboard',  component: RestrictedComponent }
];