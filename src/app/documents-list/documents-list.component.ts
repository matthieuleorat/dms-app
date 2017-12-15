import {Component, Input, OnInit} from '@angular/core';
import { Document } from "../Interface/document";

@Component({
  selector: 'dms-documents-list',
  templateUrl: './documents-list.component.html',
  styleUrls: ['./documents-list.component.css']
})
export class DocumentsListComponent implements OnInit {

  @Input() documents: Array<Document>;

  constructor() { }

  ngOnInit() {
  }

}
