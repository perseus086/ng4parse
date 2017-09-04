import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AuthModule } from './auth/auth.module';

import { AppComponent } from './app.component';
import { RoutingModule } from './routing/routing.module';
import { CoreModule } from './core/core.module';
import { RegularUserModule } from './regular-user/regular-user.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RoutingModule,
    AuthModule,
    CoreModule,
    RegularUserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
