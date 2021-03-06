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
  file: FormControl;
  fileName: string;
  document: Document;

  constructor(
      private route: ActivatedRoute,
      private documentService: DocumentService
  ) {
    this.form = new FormGroup({
        name: new FormControl('', Validators.required),
        description: new FormControl(),
        file: new FormControl(),
    });
    this.name = <FormControl>this.form.controls.name;
    this.description = <FormControl>this.form.controls.description;
    this.file = <FormControl>this.form.controls.file;
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

    save() {
      console.log(this.document, this.form.value);
      console.log(Object.assign(this.document, this.form.value));
      this.documentService.save(Object.assign(this.document, this.form.value))
          .subscribe(() => {
              //this.router.navigate(['/projects']);
          });
    }

    filechange(fileInput: any) {
        if (fileInput.target.files && fileInput.target.files[0]) {
            this.fileName = fileInput.target.files[0].name;
        }

    }

}
