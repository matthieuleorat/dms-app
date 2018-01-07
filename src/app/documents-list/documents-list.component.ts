import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Document } from "../Interface/document";

@Component({
  selector: 'dms-documents-list',
  templateUrl: './documents-list.component.html',
  styleUrls: []
})
export class DocumentsListComponent implements OnInit {

  @Input() documents: Array<Document>;
  @Output() onDownload = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }

  download(document: Document) {
      this.onDownload.emit(document);
  }

}
