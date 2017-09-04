import { OnInit, Component } from '@angular/core';
import { ParseService } from '../../core/parse/parse.service';
import { Router } from '@angular/router';

@Component({
  selector: 'cb-logout',
  template: ''
})

export class LogoutComponent implements OnInit {
  constructor(private parseService: ParseService, private route: Router) { }
  ngOnInit() {
    this.parseService.logout();
  }
}