import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Document } from "../Interface/document";

const API_URL = 'http://localhost/api/documents';

@Injectable()
export class DocumentService {

    constructor(private http: HttpClient) { }

    getAllDocuments(): Observable<Array<Document>> {

        const headers = new HttpHeaders({'accept':'application/json'});

        return this.http.get<Array<Document>>(
            API_URL,
            { headers }
        );
    }

    downloadDocument (document: Document): Observable<Document> {
        const headers = new HttpHeaders({'accept':'application/json'});

        return this.http.get<Document>(
            API_URL+'/download/'+document.id,
            { headers }
        );
    }
}