import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Document } from "../Interface/document";
import { saveAs } from 'file-saver';

const API_URL = 'http://localhost/api/documents';

@Injectable()
export class DocumentService {

    constructor(private http: HttpClient) { }

    getAllDocuments(): Observable<Array<Document>> {

        const headers = new HttpHeaders({
            'accept':'application/json',
            'Authorization':'Bearer eyJhbGciOiJSUzI1NiJ9.eyJyb2xlcyI6WyJST0xFX1VTRVIiXSwidXNlcm5hbWUiOiJtbGVvcmF0IiwiaWF0IjoxNTE1MzE3ODEzLCJleHAiOjE1MTUzNTM4MTN9.NntPrCFK2uFbO8x2Fwq_oTZPr7T24tqDnOXMqqAqR4OK5GP2HXstaIn1NNzJjJ17kVtdvf3VuWvs04Z3SCJmgafNbJckasTPrur4mNHx0623JkR-txdElT1frpk-4Yxv2rvLT3xsw0Pl8tCFSvnrTggscURJTxZh0hD6jvDSm08j6ysY-qOgjSOHGQNvtbmeWYw5v0eO81KSrlRXhAA1gjc42SXWPoOezyWkOdRZ8tn3L0AweNVOyz3nMnvlQL7SutQp-KvFQ5mydXRE__FuHsdlaFVVvb-7L_lzTCJm-nNI9yyKlePVIyHX47DboIgL_jXPZ32Krf5tRKEjhgS4nOsj6YaXHLamFQE2pNIZNSnjznQFCToogffH-fvacWKaNkx3lPZ_1_nsmk2he7iIkC6hzk1Idgeh87_U2D-3tFmcoHanMVAQ5h8sL9OaOi2Mv7URsn8TB1pbdcEUOIyPKBUPvaTVnsgb_QhHV8fxdzzc6wVPdVhkjE-1xoXVnZtQ4WumbW-69-Bu3mJzSdeqXGfY8JG2RpdetaUolGbAAhYWAMoQtBvBdLY7SSx9mcId5yEPIgXaP9M3mZANyyV77uesLLBWfoDMuhErTyDgzZmbAzDZmw8GhJkKDKMme0XDMYBpnlxQ9iFKlstz14wmyrFEshvyedPJTkBiWYPG1L4'
        });

        return this.http.get<Array<Document>>(
            API_URL,
            { headers }
        );
    }

    downloadFile(document: Document) {
        let url = `${API_URL}/download/${document.id}`;

        let httpHeaders = new HttpHeaders({
            'Authorization':'Bearer eyJhbGciOiJSUzI1NiJ9.eyJyb2xlcyI6WyJST0xFX1VTRVIiXSwidXNlcm5hbWUiOiJtbGVvcmF0IiwiaWF0IjoxNTE1MzE3ODEzLCJleHAiOjE1MTUzNTM4MTN9.NntPrCFK2uFbO8x2Fwq_oTZPr7T24tqDnOXMqqAqR4OK5GP2HXstaIn1NNzJjJ17kVtdvf3VuWvs04Z3SCJmgafNbJckasTPrur4mNHx0623JkR-txdElT1frpk-4Yxv2rvLT3xsw0Pl8tCFSvnrTggscURJTxZh0hD6jvDSm08j6ysY-qOgjSOHGQNvtbmeWYw5v0eO81KSrlRXhAA1gjc42SXWPoOezyWkOdRZ8tn3L0AweNVOyz3nMnvlQL7SutQp-KvFQ5mydXRE__FuHsdlaFVVvb-7L_lzTCJm-nNI9yyKlePVIyHX47DboIgL_jXPZ32Krf5tRKEjhgS4nOsj6YaXHLamFQE2pNIZNSnjznQFCToogffH-fvacWKaNkx3lPZ_1_nsmk2he7iIkC6hzk1Idgeh87_U2D-3tFmcoHanMVAQ5h8sL9OaOi2Mv7URsn8TB1pbdcEUOIyPKBUPvaTVnsgb_QhHV8fxdzzc6wVPdVhkjE-1xoXVnZtQ4WumbW-69-Bu3mJzSdeqXGfY8JG2RpdetaUolGbAAhYWAMoQtBvBdLY7SSx9mcId5yEPIgXaP9M3mZANyyV77uesLLBWfoDMuhErTyDgzZmbAzDZmw8GhJkKDKMme0XDMYBpnlxQ9iFKlstz14wmyrFEshvyedPJTkBiWYPG1L4'
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
}