import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Document } from "../Interface/document";
import { Router } from "@angular/router";
import {DocumentService} from "../Service/document.service";

@Component({
  selector: 'dms-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})

export class DocumentsComponent implements OnInit {

  documents$: Observable<Document[]>;

  constructor(
      private documentService: DocumentService,
      private router: Router,
  ) { }

  ngOnInit(): void {
    this.documents$ = this.documentService.getAllDocuments();
    console.log(this.documents$);
  }

}
