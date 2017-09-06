import { Component } from '@angular/core';
import { ParseService } from '../../core/parse/parse.service';
import { MdSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-forgot-password',
  templateUrl: 'forgot-password.component.html',
  styleUrls: ['forgot-password.component.scss']
})

export class ForgotPasswordComponent {

  email = new FormControl('', Validators.compose([Validators.required, Validators.email]));

  constructor(private parseService: ParseService, public snackBar: MdSnackBar, private router: Router) { }

  onSubmit(emailRef) {
    this.parseService.resetPassword(emailRef.value)
      .then( () => {
        emailRef.reset();
        this.snackBar.open('Email sent. Please check your email to reset your password', 'OK', {
          duration: 5000,
        });
      })
      .catch( (error) => {
        this.snackBar.open('Error: ' + error.message, 'OK', {
          duration: 5000,
        });
      });
  }

  goToLogin() {
    this.router.navigate(['auth', 'login']);
  }

  register() {
    this.router.navigate(['auth', 'register']);
  }
}