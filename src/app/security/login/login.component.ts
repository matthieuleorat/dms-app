import { Component, OnInit } from '@angular/core';
import { SecurityService } from "../../Service/security.service";
import { Router } from "@angular/router";

@Component({
  selector: 'dms-login',
  templateUrl: './login.component.html',
  styleUrls: []
})

export class LoginComponent implements OnInit {

    model: any = {};
    loading = false;
    error: string;


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
            .subscribe(
                result => {
                    if (result.token) {
                        localStorage.setItem('currentUser', JSON.stringify({ username: this.model.username, token: result.token}));
                        this.router.navigateByUrl('/');
                    }
                },
                err => {
                    this.error = err.error.message;
                    this.loading = false;
                }
            );
    }

}
