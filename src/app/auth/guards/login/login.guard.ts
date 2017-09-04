import { Router, RouterStateSnapshot, CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { Parse } from 'parse';
import { ParseService } from '../../../core/parse/parse.service';

@Injectable()
export class LoginGuard implements CanActivate {

  constructor(private parseService: ParseService, private router: Router) {};

  canActivate(): boolean {
    if (!this.parseService.isLoggedIn()) {
      this.router.navigate(['auth', 'login']);
    }
    return this.parseService.isLoggedIn();
  }

}