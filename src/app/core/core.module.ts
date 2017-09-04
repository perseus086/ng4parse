import { NgModule } from '@angular/core';
import { ParseService } from './parse/parse.service';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';

const routes = [
  { path: '',  component: HomeComponent},
];

@NgModule({
  declarations: [HomeComponent],
  imports: [
    RouterModule.forChild(routes)
  ],
  providers: [ParseService],
  exports: []
})

export class CoreModule {}