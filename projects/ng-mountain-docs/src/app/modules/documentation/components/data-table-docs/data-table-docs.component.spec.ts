import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTableDocsComponent } from './data-table-docs.component';

describe('DataTableDocsComponent', () => {
  let component: DataTableDocsComponent;
  let fixture: ComponentFixture<DataTableDocsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataTableDocsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataTableDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
