import {Component, Input, OnInit} from '@angular/core';
import {Tag} from "../../Interface/tag";

@Component({
  selector: 'dms-document-tags-list',
  templateUrl: './document-tags-list.component.html'
})
export class DocumentTagsListComponent implements OnInit {

  @Input() tags: Array<Tag>;

  constructor() { }

  ngOnInit() {
  }

}
