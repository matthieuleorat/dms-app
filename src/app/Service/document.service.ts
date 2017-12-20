import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Document } from "../Interface/document";
import { saveAs } from 'file-saver';

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

    downloadFile(document: Document) {
        let url = `${API_URL}/download/${document.id}`;

        const headers = new HttpHeaders({});
        const params = {};
        const options = {headers, params, responseType: 'blob'};

        this.http.get(url, options).subscribe(
            (response) => {
                saveAs(new Blob([response], { type: "pdf" }), `${document.name}.pdf`);
            }
        );
    }
}