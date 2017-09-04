import { Component, OnInit } from '@angular/core';
import { ParseService } from '../../core/parse/parse.service';
import { Router } from '@angular/router';
import { MdSnackBar } from '@angular/material';

@Component({
  selector: 'cb-registration',
  templateUrl: 'registration.component.html',
  styleUrls: ['registration.component.scss'],
})

export class RegistrationComponent implements OnInit{
  private model: RegistrationModel;

  constructor(private parseService: ParseService, private router: Router, public snackBar: MdSnackBar) {}

  ngOnInit() {
    this.model = new RegistrationModel('', '', '', '');
    console.log('on Registration');
  }

  onSubmit() {
    //Because we will use the email as username in this case
    console.log(this.model);
    this.parseService.register(this.model.userName, this.model.password, this.model.userName)
      .then( () => {
        this.router.navigate(['']);
      })
      .catch( (error) => {
        this.snackBar.open('Error: ' + error.message, 'OK', {
          duration: 5000,
        });
      })
  }

  forgotPassword() {
    this.router.navigate(['auth', 'forgot-password']);
  }

  login() {
    this.router.navigate(['auth', 'login']);
  }
}

class RegistrationModel {
  constructor(
    public userName: string,
    public email: string,
    public password: string,
    public passwordRepeat: string,
  ){};
}