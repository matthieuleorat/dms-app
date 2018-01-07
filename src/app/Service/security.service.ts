import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from "@angular/common/http";

const API_URL = 'http://localhost/api';

@Injectable()
export class SecurityService {

    public token: string;

    constructor(private http: HttpClient) {
    }

    login(username: string, password: string) {
        let url = `${API_URL}/login_check`;

        const httpHeaders = new HttpHeaders({
            'content-type': 'multipart/form-data'
        });

        return this.http.post(
            url,
            { _username: "mleorat", _password: "P4Uva7D8" },
        ).subscribe(
            (response) => {
                console.log(response);
            }
        );
    }

}