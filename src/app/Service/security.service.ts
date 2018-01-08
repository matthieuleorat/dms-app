import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';

const API_URL = 'http://localhost/api';

@Injectable()
export class SecurityService {

    public token: string;

    constructor(private http: HttpClient) {
    }

    login(username: string, password: string):  Observable<boolean> {
        let url = `${API_URL}/login_check`;

        const httpHeaders = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded'
        });

        let options = {
             headers: httpHeaders
        };

         let body = `_username=${username}&_password=${password}`;

        return this.http.post(
            url,
            body,
            options
        );

        // .subscribe(
        //     (response) => {
        //         if (response && response.token) {
        //             localStorage.setItem('currentUser', JSON.stringify({ username: username, token: response.token}));
        //             return true;
        //         } else {
        //             return false;
        //         }
        //     }
        // );
    }
}
