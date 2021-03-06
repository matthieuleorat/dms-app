import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Document } from "../Interface/document";
import { Router } from "@angular/router";
import { DocumentService } from "../Service/document.service";

@Component({
  selector: 'dms-documents',
  template: `<dms-documents-list [documents]="documents$|async" (onDownload)="download($event)"></dms-documents-list>`,
})

export class DocumentsComponent implements OnInit {

  documents$: Observable<Document[]>;

  constructor(
      private documentService: DocumentService,
      private router: Router,
  ) { }

  ngOnInit(): void {
    this.documents$ = this.documentService.getAllDocuments();
  }

  download(document: Document) {
    this.documentService.downloadFile(document);
  }
}
