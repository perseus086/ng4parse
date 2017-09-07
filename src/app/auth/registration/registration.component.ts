import { Component, OnInit } from '@angular/core';
import { ParseService } from '../../core/parse/parse.service';
import { Router } from '@angular/router';
import { MdSnackBar } from '@angular/material';
import {
  FormGroup, FormControl, FormBuilder, Validators, ValidatorFn, AbstractControl,
  FormGroupDirective, NgForm
} from '@angular/forms';

function passwordValidator(pass1: string, pass2: string): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} => {
    const passNotMatch = control.get(pass1).value !== control.get(pass2).value;
    return passNotMatch ? {'passwordNotMatch': {'value': true} }: null;
  };
}

@Component({
  selector: 'cb-registration',
  templateUrl: 'registration.component.html',
  styleUrls: ['registration.component.scss'],
})

export class RegistrationComponent implements OnInit{

  registrationForm: FormGroup;

  constructor(private parseService: ParseService, private router: Router, public snackBar: MdSnackBar,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
      //We are using userName the same as email, if diffetent change this validator
      userName: [null, Validators.compose([Validators.required, Validators.email])],
      password: [null, Validators.compose([Validators.required, Validators.minLength(6)])],
      passwordRepeat: [null, Validators.compose([Validators.required, Validators.minLength(6)])]
    }, { validator: passwordValidator('password', 'passwordRepeat') })
  }

  onSubmit(formRef) {
    //Because we will use the email as username in this case
    this.parseService.register(formRef.userName, formRef.password, formRef.userName)
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

  passwordMatcher(control: FormControl, form: FormGroupDirective | NgForm): boolean {
    return control.touched && form.value.password !== control.value;
  }

}
