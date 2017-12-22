import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentTagsListComponent } from './document-tags-list.component';

describe('DocumentTagsListComponent', () => {
  let component: DocumentTagsListComponent;
  let fixture: ComponentFixture<DocumentTagsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentTagsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentTagsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
