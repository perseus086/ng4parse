import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from '../auth/guards/login/login.guard';

const routes: Routes = [
  { path: 'restricted', canActivate: [LoginGuard], loadChildren: '../regular-user/regular-user.module#RegularUserModule' },
  { path: 'auth', loadChildren: '../auth/auth.module#AuthModule' },
  { path: '', loadChildren: '../core/core.module#CoreModule' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: [],
  providers: [LoginGuard]
})

export class RoutingModule { }
