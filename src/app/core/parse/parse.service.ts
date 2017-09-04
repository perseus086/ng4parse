import { Injectable } from '@angular/core';
import { Parse } from 'parse';
import { configuration } from '../../config/config';
import { Router } from '@angular/router';

@Injectable()
export class ParseService {

  private user: any;
  private role: any;

  constructor(private route: Router) {
    Parse.initialize(configuration.PARSE_KEY);
    Parse.serverURL = configuration.SERVER_URL;
    this.user = Parse.User.current();
  }

  login(username: String, password: String): Promise<any> {
    return new Promise( (resolve, reject) => {
      Parse.User.logIn(username, password, {
        success: user => {
          if (user) {
            resolve(user);
          } else {
            reject();
          }
        },
        error: (error) => {
          console.log('errror', error);
          reject(error)

        }
      })
    });
  }

  isLoggedIn(): boolean {
    const currentUser = Parse.User.current();
    if (currentUser) {
      this.user = currentUser;
      if (!this.role) {
        const query = new Parse.Query(Parse.Role);
        query.equalTo("users", this.user);
        query.find().then(function(roles) {
          this.roles = roles;
        });
      }
    }
    return !!(currentUser);
  }

  resetPassword(email): Promise<any> {
    return new Promise( (resolve, reject) => {
      Parse.User.requestPasswordReset(email, {
        success: () => {
          resolve();
        },
        error: error => {
          reject(error);
        }
      });
    });
  }

  logout(): boolean {
    return Parse.User.logOut().then(() => {
      const currentUser = Parse.User.current();
      this.user = null;
      console.log('Current user', currentUser);
      this.route.navigate(['']);
      return true;
    });
  }

  register(userName: string, password: string, email: string) {
    //TODO: add array for adding any type of data on registration
    return new Promise( (resolve, reject) => {
      let user = new Parse.User();
      user.set('username', userName);
      user.set('password', password);
      user.set('email', email);

      user.signUp(null, {
        success: (user) => {
          Parse.User.logOut();
          resolve();
        },
        error: (user, error) => {
          reject(error);
        }
      })
    });



  }

}