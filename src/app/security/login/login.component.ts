import { Component, OnInit } from '@angular/core';
import { SecurityService } from "../../Service/security.service";
import { Router } from "@angular/router";

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
        private router: Router,
    ) {

    }

    ngOnInit() {
    }

    login() {
        this.loading = true;
        this.securityService.login(this.model.username, this.model.password)
            .subscribe(result => {
                if (result.token) {
                    this.router.navigateByUrl('/');
                } else {
                    console.log('error');
                }
            });
    }

}
