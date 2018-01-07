import { Component, OnInit } from '@angular/core';
import {SecurityService} from "../../Service/security.service";

@Component({
  selector: 'dms-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

    model: any = {};
    loading = false;


    constructor(
        private securityService: SecurityService,
    ) {

    }

    ngOnInit() {
    }

    login() {
        this.loading = true;
        let token = this.securityService.login(this.model.username, this.model.password);
        console.log(token);
    }

}
