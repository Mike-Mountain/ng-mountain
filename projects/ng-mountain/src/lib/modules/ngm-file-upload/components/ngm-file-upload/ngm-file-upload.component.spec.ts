import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgmFileUploadComponent } from './ngm-file-upload.component';

describe('FileUploadComponent', () => {
  let component: NgmFileUploadComponent;
  let fixture: ComponentFixture<NgmFileUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgmFileUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgmFileUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
