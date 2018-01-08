import { Component, OnInit } from '@angular/core';
import {SecurityService} from "../../Service/security.service";
import {Router} from "@angular/router";

@Component({
  selector: 'dms-logout',
  template: '',
  styleUrls: []
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router,) { }

  ngOnInit() {
      SecurityService.logout();
      this.router.navigateByUrl('/login');
  }

}
