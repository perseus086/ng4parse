# ng4parse

This project is a boilerplate to begin a new Angular project that connects to Parse Platform.
 
It uses Angular 4, angular material and Parse SDK.

If has a **home page** that is public with or without a user that is logged.

- Login view
- Password recovery view
- Register View
- Restricted View (accessible after login)
- Logout
- Guard to check if user is logged in 
- ParseService that has login, logout, register, reset password methods.

The project uses the email as username for registration but is easy to change if you need to change that


##How to configure?
Go to config folder and set:

SERVER_URL: 'http://localhost:1337/parse', whatever you need to point

PARSE_KEY: '<PUT_YOUR_APP_ID_HERE>'


##How to run it?

As any angular project generated with angular cli


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.3.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
