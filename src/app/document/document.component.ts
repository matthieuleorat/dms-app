import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { map, switchMap } from 'rxjs/operators';
import { DocumentService } from "../Service/document.service";
import { Document } from "../Interface/document";

@Component({
  selector: 'dms-document',
  templateUrl: './document.component.html',
})
export class DocumentComponent implements OnInit {

  form: FormGroup;
  name: FormControl;
  description: FormControl;
  document: Document;

  constructor(
      private route: ActivatedRoute,
      private documentService: DocumentService
  ) {
    this.form = new FormGroup({
        name: new FormControl('', Validators.required),
        description: new FormControl()
    });
    this.name = <FormControl>this.form.controls.name;
    this.description = <FormControl>this.form.controls.description;
  }

  ngOnInit() {
      this.route.paramMap
          .pipe(
              map((paramMap: ParamMap): number =>
                  +paramMap.get('id')
              ),
              switchMap((id: number) =>
                  this.documentService.getDocument(id)
              )
          ).subscribe(
          (document) => {
              this.document = document;
              this.form.patchValue(this.document);
          }
      );
  }

}
