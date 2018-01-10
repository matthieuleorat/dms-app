import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DmsLayoutComponent } from './dms-layout.component';

describe('DmsLayoutComponent', () => {
  let component: DmsLayoutComponent;
  let fixture: ComponentFixture<DmsLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DmsLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DmsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
