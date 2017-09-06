import { Component, OnInit } from '@angular/core';
import { ParseService } from '../../core/parse/parse.service';
import { Router } from '@angular/router';
import { MdSnackBar } from '@angular/material';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  private loginForm: FormGroup;

  constructor(private parseService: ParseService, private router: Router,
              public snackBar: MdSnackBar, private formBuilder: FormBuilder) {
    this.loginForm = formBuilder.group({
      userName: [null, Validators.compose([Validators.required, Validators.email])],
      password: [null, Validators.compose([Validators.required, Validators.minLength(6)])]
    })
  }

  ngOnInit() {
    if(this.parseService.isLoggedIn()) {
      this.router.navigate(['restricted']);
    }
  }

  onSubmit(formReference) {
    this.parseService.login(formReference.userName, formReference.password)
      .then( (user) => {
        this.router.navigate(['restricted']);
      })
      .catch( (error) => {
        this.snackBar.open('Error: cannot login. Please verify email, password or verify the account on your email', 'OK', {
          duration: 5000,
        });
      })
    ;
  }

  forgotPassword() {
    this.router.navigate(['auth', 'forgot-password']);
  }

  register() {
    this.router.navigate(['auth', 'register']);
  }
}
