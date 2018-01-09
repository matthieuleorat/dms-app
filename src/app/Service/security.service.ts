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

    login(username: string, password: string): Observable<any> {
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
    }

    static logout(): void {
        localStorage.removeItem('currentUser');
    }

    static getUserToken(): string {
        return JSON.parse(localStorage.getItem('currentUser')).token;
    }

    static isLoggedIn(): boolean {
        let localuser = localStorage.getItem('currentUser');
        return localuser && JSON.parse(localuser).token;
    }
}
