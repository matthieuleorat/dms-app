import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Document } from "../Interface/document";
import { saveAs } from 'file-saver';
import {SecurityService} from "./security.service";

const API_URL = 'http://localhost/api/documents';

@Injectable()
export class DocumentService {

    constructor(private http: HttpClient) { }

    getAllDocuments(): Observable<Array<Document>> {

        let token = SecurityService.getUserToken();

        const headers = new HttpHeaders({
            'accept':'application/json',
            'Authorization':'Bearer '+token,
        });

        return this.http.get<Array<Document>>(
            API_URL,
            { headers }
        );
    }

    downloadFile(document: Document) {

        let token = SecurityService.getUserToken();
        let url = `${API_URL}/download/${document.id}`;

        let httpHeaders = new HttpHeaders({
            'Authorization':'Bearer '+token,
        });
        let httpParams = new HttpParams();

        this.http.get(url, {
            headers: httpHeaders,
            params: httpParams,
            responseType: 'blob'
        }).subscribe(
            (response) => {
                saveAs(new Blob([response], { type: "pdf" }), `${document.name}.pdf`);
            }
        );
    }

    getDocument(id): Observable<Document> {
        let token = SecurityService.getUserToken();

        let url = `${API_URL}/${id}`;

        const headers = new HttpHeaders({
            'accept':'application/json',
            'Authorization':'Bearer '+token,
        });

        return this.http.get<Document>(
            url,
            { headers }
        );
    }
}