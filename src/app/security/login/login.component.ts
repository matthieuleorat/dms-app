import { Component, OnInit } from '@angular/core';
import { SecurityService } from "../../Service/security.service";
import { Router } from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'dms-login',
  templateUrl: './login.component.html',
  styleUrls: []
})

export class LoginComponent implements OnInit {

    model: any = {};
    loading = false;
    error: string;
    form: FormGroup;
    username: FormControl;
    password: FormControl;


    constructor(
        private securityService: SecurityService,
        private router: Router,
    ) {
        this.form = new FormGroup({
            username: new FormControl('', Validators.required),
            password: new FormControl('', Validators.required),
        });
        this.username = <FormControl>this.form.controls.username;
        this.password = <FormControl>this.form.controls.password;
    }

    ngOnInit() {
    }

    login() {

        this.loading = true;

        this.securityService.login(this.username.value, this.password.value)
            .subscribe(
                result => {
                    if (result.token) {
                        localStorage.setItem('currentUser', JSON.stringify({ username: this.username.value, token: result.token}));
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
