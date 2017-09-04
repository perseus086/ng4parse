import { Component, OnInit } from '@angular/core';
import { ParseService } from '../../core/parse/parse.service';
import { Router } from '@angular/router';
import { MdSnackBar } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  private model: LoginModel;

  constructor(private parseService: ParseService, private router: Router, public snackBar: MdSnackBar) { }

  ngOnInit() {
    if(this.parseService.isLoggedIn()) {
      this.router.navigate(['restricted']);
    }
    this.model = new LoginModel('', '');
  }

  onSubmit() {
    this.parseService.login(this.model.userName, this.model.password)
      .then( (user) => {
        console.log('here', user);
        this.router.navigate(['restricted']);
      })
      .catch( (error) => {
        console.log(error);
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

class LoginModel {
  constructor(
    public userName: string,
    public password: string
  ){}
}
