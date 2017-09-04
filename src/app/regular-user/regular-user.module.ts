import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RegularUserRouter } from './regular-user.routing';
import { RestrictedComponent } from './restricted/restricted.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(RegularUserRouter),
  ],
  declarations: [RestrictedComponent]
})
export class RegularUserModule { }
